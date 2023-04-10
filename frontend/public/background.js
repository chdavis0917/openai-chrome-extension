/*global chrome*/
import axios from 'axios';

// Store highlights in a temporary array until the user is done highlighting
const highlights = [];

// Establish connection with content scripts and popup
chrome.runtime.onConnect.addListener(function(port) {
  console.log("Connected with port: ", port);

  // Listen for messages from content script
  port.onMessage.addListener(function(message) {
    console.log("Received message from content script: ", message);

    // Send message to backend to generate summary
    axios.post('/api/summary', {
      url: message.url,
      highlightedText: message.highlightedText
    })
    .then(response => {
      console.log('Received response from backend: ', response.data);

      // Send message to content script with summary
      port.postMessage({ summary: response.data.summary });

      // Add highlight to temporary array with the generated summary
      highlights.push({
        url: message.url,
        text: message.highlightedText,
        summary: response.data.summary
      });
    })
    .catch(error => console.error(error));
  });
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Received message from popup: ", message);

  // Add highlight to temporary array without summary
  highlights.push({
    url: message.url,
    text: message.highlightedText,
  });

  // If user is done highlighting, send all highlights to server
  if (message.done) {
    axios.post('/api/highlights', { highlights })
      .then(response => console.log('Highlights saved:', response.data))
      .catch(error => console.error(error));

    // Clear temporary array
    highlights.length = 0;
  }
});
