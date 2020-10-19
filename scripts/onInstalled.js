chrome.runtime.onInstalled.addListener(function (newUrl) {
	'install' == newUrl.reason && chrome.runtime.openOptionsPage();
});
