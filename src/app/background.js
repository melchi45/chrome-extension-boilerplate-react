chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('app.html', {
    width: 800,
    height: 600,
  });
});
