self.addEventListener('install', function(event) {
  console.log('Service worker installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
});

self.addEventListener('fetch', function(event) {
  console.log('Service worker fetching', event.request.url);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getSelectedText') {
    chrome.tabs.executeScript(sender.tab.id, {
      code: 'var selectedText = window.getSelection().toString(); selectedText;',
    }, function(result) {
      var selectedText = result[0];
      sendResponse({ selectedText });
    });
    return true; // Need to return true to indicate that we will send the response asynchronously
  }
});
