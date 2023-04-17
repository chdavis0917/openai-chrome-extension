self.addEventListener('install', function(event) {
  console.log('Service worker installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
});

self.addEventListener('fetch', function(event) {
  console.log('Service worker fetching', event.request.url);
});

self.addEventListener('mouseup', function(event) {
  var selectedText = window.getSelection().toString();
  if(selectedText.length) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/summary', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var summary = xhr.responseText;
        var tooltip = document.createElement('div');
        tooltip.textContent = summary;
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'white';
        tooltip.style.border = '1px solid black';
        tooltip.style.padding = '5px';
        tooltip.style.top = event.clientY + 'px';
        tooltip.style.left = event.clientX + 'px';
        document.body.appendChild(tooltip);
        setTimeout(function() {
          tooltip.parentNode.removeChild(tooltip);
        }, 5000);
      }
    };
    xhr.send(JSON.stringify({ text: selectedText }));
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getSummary') {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/summary', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const summary = xhr.responseText;
        console.log("what is summary?", sumary);
        sendResponse({ summary });
      }
    };
    xhr.send(JSON.stringify({ text: request.text }));
    return true; // Need to return true to indicate that we will send the response asynchronously
  }
});

