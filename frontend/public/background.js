/*global chrome*/
// Establish connection with content scripts and popup
chrome.runtime.onConnect.addListener(function(port) {
    console.log("Connected with port: ", port);
  
    // Listen for messages from content script
    port.onMessage.addListener(function(message) {
      console.log("Received message from content script: ", message);
  
      // Send message to OpenAI API
      fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
          prompt: message.highlightedText,
          max_tokens: 50
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Received response from OpenAI API: ', data);
  
        // Send message to content script with summary
        port.postMessage({ summary: data.choices[0].text });
      })
      .catch(error => console.error(error));
    });
  });
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Received message from popup: ", message);
  
    // Save highlight and summary to storage
    chrome.storage.local.get(['highlights'], function(result) {
      let highlights = result.highlights || [];
      highlights.push({
        url: message.url,
        text: message.highlightedText,
        summary: message.summary
      });
      chrome.storage.local.set({ highlights: highlights }, function() {
        console.log('Highlight saved: ', message.highlightedText);
      });
    });
  });
  