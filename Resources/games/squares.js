var win = Ti.UI.currentWindow;

win.title = "Hairspray Memory";

var webview = Ti.UI.createWebView({
	url:'squares.html'
});

win.add(webview);
