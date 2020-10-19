//introduces t and i
chrome.storage.local.get({ t: null, i: false }, function (localUrl) {
	//localUrl.i = checks if its specified
	if (localUrl.i) {
		//localUrl.t = the url specified in settings
		//if it is, opens the tabSwitcher.htm file
		location.href = localUrl.t;
	} else {
		//changes the tab to the url
		chrome.tabs.update({ url: localUrl.t });
	}
});
