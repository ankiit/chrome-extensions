console.log('media key handler');

function simulatePlayPause(doc) {
	var e = new KeyboardEvent("keyup", {key : " ", code: "Space", keyCode: 32, type: "keyup", bubbles: true, cancelable: true});
	doc.body.dispatchEvent(e);
}
chrome.runtime.onMessage.addListener((message) => {
	console.log(message);
	if(message.playpause) simulatePlayPause(document);
});
