/*chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      //text: "OFF",
    });
  });
*/
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        { file: 'dist/index.js' }
    );
});