chrome.browserAction.onClicked.addListener(function () {
	chrome.tabs.create({url: "https://leetcode.com/problemset/all/?difficulty=Easy"}, function(tab) {
		chrome.tabs.executeScript(tab.id, {
			file: "openwindow.js"
		});
	});
});