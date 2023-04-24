document.addEventListener('mouseup', function(event) {
    var selectedText = window.getSelection().toString();
    console.log("selectedText is: ", selectedText);
    if (selectedText.length) {
    chrome.runtime.sendMessage({ message: 'getSelectedText' }, function(response) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3001/api/summary', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var summary = response.summary;
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
      var data = { 
        url: window.location.href, 
        highlightedText: selectedText 
      };
      xhr.send(JSON.stringify(data));
    });
    };
  });
  