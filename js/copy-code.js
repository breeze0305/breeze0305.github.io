$(document).ready(function () {
    $('pre code').each(function () {
      var button = $('<button class="copy-button">Copy</button>');
      button.attr('data-clipboard-text', $(this).text());
      $(this).after(button);
    });
  
    var clipboard = new ClipboardJS('.copy-button');
  
    clipboard.on('success', function (e) {
      alert('Code copied to clipboard');
      e.clearSelection();
    });
  
    clipboard.on('error', function (e) {
      alert('Error: Unable to copy');
    });
  });
  