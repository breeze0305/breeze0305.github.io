document.addEventListener('DOMContentLoaded', function () {
  const clipboard = new ClipboardJS('.copy-btn');
  clipboard.on('success', function (e) {
    console.log('Code copied:', e.text);
  });
  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
});
