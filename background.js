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
