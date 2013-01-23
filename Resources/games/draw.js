Titanium.Paint = Ti.Paint = require('ti.paint');
var close = Ti.UI.createButton({title:'Done', width:50, height:30, top:2,left:2});
var win1 = Ti.UI.currentWindow;

var win = Ti.UI.createView();

var painter = Ti.Paint.createPaintView({
    top:2, right:2, bottom:2, left:2,
    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
    strokeColor:'#000',
    // strokeAlpha:0, 
    strokeWidth:6,
    eraseMode:false
});
win.add(painter);
win1.add(win);

//Create a Control View to contain all the controls so they can be hidden easily
//win.add(close);
win.leftNavButton = close;
close.addEventListener('click', function(){
	var confirm = Ti.UI.createAlertDialog({title:'Are you sure?', message:'Did you get your autograph?  Be sure to save before leaving.', buttonNames:['Leave', 'Cancel'], cancel:1});
	confirm.show();
	confirm.addEventListener('click', function(e){
		if(e.index === 0){
			win.close();
		}
	});

	
});

var save = Ti.UI.createButton({
  bottom:3,
 
  height:35, 
  width:45, 
  title: 'Save'
});
win.add(save);

var clear = Ti.UI.createButton({
  bottom:3,
  left:10, 
  height:35, 
  width:100, 
  title: 'Gallery'
});
win.add(clear);

var take = Ti.UI.createButton({
  bottom:3,
  right:10,
  height:35, 
  width:100, 
  title: 'Take Photo'
});
win.add(take);


//Allow user to select background image to draw on (Reference from KitchenSink photo_gallery_bgimage.js)
var f = Ti.App.Properties.getString("filename");
var bgImage = null;
if (f != null)
{
  bgImage = Titanium.Filesystem.getFile(f);
  win.backgroundImage = bgImage.nativePath;
  
}
take.addEventListener('click', function(){

Titanium.Media.showCamera({

	success:function(event)
	{
    var image = event.media;
      
      // create new file name and remove old
      var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";
      Ti.App.Properties.setString("filename", filename);
      if (bgImage != null)
      {
        bgImage.deleteFile();
      }
      bgImage = Titanium.Filesystem.getFile(filename);
      bgImage.write(image);
           painter.clear(); 
      win.backgroundImage = null;
      win.backgroundImage = bgImage.nativePath;
      },
    cancel:function()
    {
  
    },
    error:function(error)
    {
    }
  });
});

clear.addEventListener('click',function()
{   
  Titanium.Media.openPhotoGallery(
  { 
    success:function(event)
    {
      var image = event.media;
      
      // create new file name and remove old
      var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";
      Ti.App.Properties.setString("filename", filename);
      if (bgImage != null)
      {
        bgImage.deleteFile();
      }
      bgImage = Titanium.Filesystem.getFile(filename);
      bgImage.write(image);
        painter.clear();
      win.backgroundImage = null;
      win.backgroundImage = bgImage.nativePath;
    },
    cancel:function()
    {
  
    },
    error:function(error)
    {
    }
  });
});


//Save Image to users Photo Gallery
save.addEventListener('click',function(){

var actInd = Ti.UI.createActivityIndicator({
	
});

if(Ti.Platform.osname !='android'){
	win.add(actInd);
	
} 

actInd.show();

     var  saveimage = win.toImage();

      Titanium.Media.saveToPhotoGallery(saveimage,{
        success: function(e) {
        	actInd.hide();
        
          var alert1 = Titanium.UI.createAlertDialog({
            title:'Autograph Saved',
            message:'Your current autographed photo has been saved to your Photo Gallery.'
          })
          alert1.show();    
  
        },
        error: function(e) {
        	actInd.hide();
			win.remove(hideView);
          Titanium.UI.createAlertDialog({
            title:'Error saving',
            message:e.error
          }).show();
        }
      });

  });
  

win.addEventListener('focus', function(){	
var start = Ti.UI.createAlertDialog({title:'Autograph', message:'Grab a picture, then get an autograph!', buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){
        } else{
			win.close();
		}
});
});