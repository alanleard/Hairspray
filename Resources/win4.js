var win = Ti.UI.currentWindow;

win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	showPagingControl:true,
	pagingControlHeight:20,
	pagingControlColor:'#000'
});

var info = [{image:1},
			{image:2},
			{image:3},
			{image:4},
			{image:5},
			{image:6},
			{image:7},
			{image:8},
			{image:9},
			{image:10},
			{image:11},
			{image:12},
			{image:13},
			{image:14},
			{image:15},
			{image:16}
];

var views =[];
for(var i = 0; i<16; i++){
	var scroll = Ti.UI.createScrollView({
		zoomScale:1.0,
		minZoomScale:1.0,
		maxZoomScale:3.0,
		contentHeight:'auto',
		contentWidth:'auto',
		height:'100%',
		width:'100%'
	});
	
	var view = Ti.UI.createImageView({
		image:'images/program/program'+info[i].image+'.jpeg',
		canScale:true,
		width:'100%',
		height:'100%'
	});
	scroll.add(view);
	
	views.push(scroll);
}

scrollable.views = views;
win.add(scrollable);
