// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

if(!Ti.App.Properties.hasProperty('popscore')){
	Ti.App.Properties.setInt('popscore', 0);
}

Ti.include('utils.js');
Titanium.Facebook.appid = '192082434200773';
Titanium.Facebook.permissions = ['publish_stream', 'read_stream', "user_checkins", "publish_checkins"];
var fbbutton = Titanium.Facebook.createLoginButton();


//

// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#f99cc8',
    navBarHidden:true,
    url:'win1.js', 
    fullscreen:true,
    barColor:'#03a6d7'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'The Show',
    window:win1
});

//
// create controls tab and root window
//
Ti.include('win2.js');
// var win2 = Titanium.UI.createWindow({  
    // title:'Hairspray 2012',
 	// backgroundColor:'#f99cc8',
    // barColor:'#03a6d7',
    // url:'win2.js'
   // // rightNavButton:fb
// });

//win.open();
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'The Cast',
    window:win
});

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Hairspray Fun',
 	backgroundColor:'#f99cc8',
    barColor:'#03a6d7',
    url:'win3.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'game.png',
    title:'Fun',
    window:win3
});

//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({  
    title:'Hairspray Program',
    backgroundColor:'#f99cc8',
    barColor:'#03a6d7',
    url:'win4.js'
});
var tab4 = Titanium.UI.createTab({  
    icon:'sponsor.png',
    title:'Program',
    window:win4
});

//
// create controls tab and root window
//
var win5 = Titanium.UI.createWindow({  
    title:'Be Social!',
    backgroundColor:'#f99cc8',
    barColor:'#03a6d7',
    url:'win5.js',
    rightNavButton:fbbutton
});
var tab5 = Titanium.UI.createTab({  
    icon:'chat.png',
    title:'Social',
    window:win5
});


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);   
tabGroup.addTab(tab4);  
tabGroup.addTab(tab5);

// if(Ti.Platform.osname!='android'){
	// tabGroup.open({
	// transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
// });
// 
// } else {
// open tab group
tabGroup.open();

// var actView = Ti.UI.createView({
	// visible:false,
// });
// 
// var indView =Ti.UI.createView({
	// height:150,
	// width:150,
	// borderRadius:15,
	// opacity:0.7,
	// backgroundColor:'#fff'
// });
// 
// var actInd = Ti.UI.createActivityIndicator({
	// message:'Gathering the cast!'
// });
// actInd.show();
// actView.add(indView);
// actView.add(actInd);
// tabGroup.add(actView);
// 
// //win2.addEventListener('focus', function(){
	// actView.show();
//})
//}
