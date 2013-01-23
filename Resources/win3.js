var win = Ti.UI.currentWindow;

var table = Ti.UI.createTableView({
	top:5,
	data:[{title:'Hairspray Memory', url:'games/squares.js', hide:true, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:'Amber Knockout', url:'games/popup.js', hide:true, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'}, 
	{title:'I know the lyrics!', url:'games/practiceTest1.js', hide:false, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:"Tracy's Photo Booth", url:'games/santaPic.js', hide:true, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:"Link's Photo Booth", url:'games/linkPic.js', hide:false, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:'Autograph', url:'games/draw.js', hide:false, leftImage:'images/gMan.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'}
	],
	//separatorColor:'transparent',
	//separatorStyle:0,
	color:'#000',
	backgroundColor:'#f99cc8'
});
if(Ti.Platform.osname == 'android'){
	table.data = [{title:'Gingerbread Party', url:'games/popup.js', hide:true, leftImage:'images/santahat.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:'Sneaky Santa', url:'games/santa.js', hide:false, leftImage:'images/santahat.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:'Make it Snow', url:'games/makeSnow.js', hide:false, leftImage:'images/santahat.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'},
	{title:'Christmas Countdown', url:'games/countdown.js', hide:false, leftImage:'images/santahat.png', height:Ti.Platform.displayCaps.platformHeight/7.5, color:'#fff', selectedBackgroundColor:'red'}
	]
}

table.addEventListener('click', function(e){
	
	var win = Ti.UI.createWindow({url:e.rowData.url, backButtonTitle:'Done',
		tabBarHidden:true, fullscreen:true, barColor:'#03a6d7'});
	Titanium.UI.currentTab.open(win,{animated:true});
})

win.add(table);

win.addEventListener('focus', function(){
	win.navBarHidden=false;
	Titanium.UI.orientation = Titanium.UI.PORTRAIT;
})
