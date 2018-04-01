chrome.extension.getBackgroundPage().console.log('Media key background extension');
chrome.commands.onCommand.addListener(function(command) {
	chrome.extension.getBackgroundPage().console.log(command);
	var message = {
		playpause: true
	};
	// find the tab with amazon music
	chrome.tabs.query({url: "https://music.amazon.in/*"}, (tabs => {
		console.log(tabs);
		if(tabs[0]) {	
			chrome.tabs.sendMessage(tabs[0].id, message, (response) => console.log(response));
		}
	}));
});
