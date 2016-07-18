console.log('Hello');
chrome.browserAction.onClicked.addListener(function(tab)
{
    chrome.tabs.create({'url': chrome.extension.getURL('popup.html'), 'selected': true});
});
