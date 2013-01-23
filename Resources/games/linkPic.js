var win = Ti.UI.currentWindow;

var santa = null;
if(Ti.Platform.osname == 'ipad'){
	santa = Titanium.UI.createImageView({
	image:'../images/linkdo@2x.png',
	height:572,
	width:620,
	top:20
});
} else {
	santa = Titanium.UI.createImageView({
	image:'../images/linkdo.png',
	height:286,
	width:310,
	top:20
});
}
var bwidth = 150;
var cwidth = 75;
if(Ti.Platform.osname == 'ipad'){
	bwidth = 300;
	cwidth =200;
}
var button = Titanium.UI.createButton({
	bottom:5,
	width:bwidth,
	height:40,
	right:10,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Take Photo'
});

var cancel = Titanium.UI.createButton({
	bottom:5,
	left:10,
	height:40,
	width:cwidth,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Cancel'
});

var overlay = Titanium.UI.createView();
overlay.add(santa);
overlay.add(button);
overlay.add(cancel);



button.addEventListener('click',function()
{
	//Ti.Media.vibrate();
	Ti.Media.takePicture();
	
});

cancel.addEventListener('click',function()
{
	Titanium.Media.hideCamera();
	win.close();
	
});



var cameras = Ti.Media.availableCameras;
for (var c=0;c<cameras.length;c++)
{

	if (cameras[c]==Ti.Media.CAMERA_REAR)
		{
			var flipBtn = Titanium.UI.createButton({
				top:5,
				right:10,
				height:40,
				width:50,
				font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
				title:'Flip'
			});
			
			overlay.add(flipBtn);
			
			flipBtn.addEventListener('click', function(){
				if (Ti.Media.camera == 0){ //back camera 
				Ti.Media.switchCamera(1); 
			
				}
				else{
					Ti.Media.switchCamera(0);
				}
			});
	}
}




Titanium.Media.showCamera({

	success:function(event)
	{
		
		var santa2 = null;
		
		if(Ti.Platform.osname == 'ipad'){
			santa2 = Titanium.UI.createImageView({
			image:'../images/linkdo@2x.png',
			height:572,
			width:620,
			top:20
		});
		} else {
			santa2 = Titanium.UI.createImageView({
			image:'../images/linkdo.png',
			height:286,
			width:310,
			top:20
		});
		}

		var view = Ti.UI.createView({top:0, left:0, right:0, bottom:0});
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image:event.media,
			width:win.width,
			height:win.height
		});
		view.add(imageView);
		
		//var santaZoom = Ti.UI.createScrollView({minZoomScale:1.0, maxZoomScale:3.0, height:350, width:250});
		//santaZoom.add(santa);
		
		//view.add(santaZoom);
		
		santa2.addEventListener('touchmove', function(e){
			
				santa2.center = e.globalPoint;
			
		});
		
		view.add(santa2);
		win.add(view);
		
		// programatically hide the camera
		//Ti.Media.hideCamera();
		
		var save = Ti.UI.createButton({
			title:'Save',
			bottom:5,
			right:5,
			width:60,
			height:40
		});
		if(Ti.Platform.osname != 'android'){
			win.rightNavButton = save;
		}
		save.addEventListener('click', function(){
			Titanium.Media.saveToPhotoGallery(view.toImage());
			alert('Image saved to Gallery');
			win.close();
		});
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Sorry, you need a camera.');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay:overlay,
	showControls:false,	// don't show system controls
	mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
	autohide:true // tell the system not to auto-hide and we'll do it ourself
	});
	
