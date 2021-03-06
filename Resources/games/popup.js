
var win = Ti.UI.currentWindow;
//win.navBarHidden=true;

var game = function(){
var score = 0;

var picnum = Math.floor(Math.random()*4)+1;
//alert(picnum);
var bgImage = Ti.UI.createView({
	backgroundImage:'../images/Default-Landscape.png',
	width:600,
	height:440,
	left:0,
	top:0
});
if(Ti.Platform.osname == 'ipad'){
	bgImage.width = 1400;
	bgImage.height=1000;
}
win.add(bgImage);
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
var scoreView = Ti.UI.createView({bottom:0, height:30, width:60, borderRadius: 8, backgroundColor:'transparent', touchEnabled:false});

var scoreLabel = Ti.UI.createLabel({
   text:addCommas(score),
   width:60,
   borderRadius: 8,
    color: '#fff',
    textAlign:'center',
    backgroundColor:'#000'
});
scoreView.add(scoreLabel);


var src = Ti.UI.createLabel({
	visible:false,
	backgroundColor:'red',
	height:30,
	width:60,
	color:'#fff',
	textAlign:'center',
	bottom:0,
	borderRadius:8,
	right:0
});
scoreView.add(src);
if(Ti.Platform.osname != 'android'){
	
	win.rightNavButton = scoreView;
	win.title = '60 seconds';
} else {
	
var timeLabel = Ti.UI.createLabel({
	text:'60 Seconds',
	bottom:0,
	right:0,
	color:'#fff',
	height:'auto',
	width:'auto',
	backgroundColor:'#000'
 });


//scoreView.add(timeLabel);
	win.add(scoreView)
}

	bgImage.animate({left:-(bgImage.width-Ti.Platform.displayCaps.platformWidth), curve:Ti.UI.ANIMATION_CURVE_LINEAR, duration:62000});
//}
var count = 60;
setTimeout(function(){
var time = setInterval(function(){
	
	if(count>0){
		count--;
		win.title = count+' seconds'; 
		//timeLabel.text = count+' seconds';
	} else {
		count = 60;
		win.title =  count+' seconds';
		clearInterval(time);
		clearInterval(pop);
		clearInterval(pop2);
		clearInterval(pop3);
		
			var confirm = Ti.UI.createAlertDialog({title:'Play Again?', message:'You can beat your score of '+addCommas(score)+'.\n The current high score is '+addCommas(Ti.App.Properties.getInt('popscore'))+'.\nDo you want to play again?', buttonNames:['Yes', 'No']});
			if(score>Ti.App.Properties.getInt('popscore')){
			confirm.title = 'High Score!';
			confirm.message='You just achieved a high score!  Your new high score is '+addCommas(score)+', the previous high score was '+addCommas(Ti.App.Properties.getInt('popscore'))+'.\n Do you want to play again?'
			Ti.App.Properties.setInt('popscore', score)
		}
		
			confirm.show();
			confirm.addEventListener('click', function(x){
				if(x.index=== 0){
					game();
				} else{
					win.close();
				}
			});
		}
	//});
//}	
}, 1000);
}, 1000);


function gManFactory(time, length, size, pts, img){

var amber = '../images/amber.png';
var tracy = '../images/gMan.png';
var clickColor = 'blue';

var gMan = Ti.UI.createImageView({
    height:size,
    width:size,
    visible:false
	});

var multiplier = pts;

var pop = setInterval(function(){
	
	if(Math.random()>0.5){

		gMan.image = tracy;
		gMan.point = -pts;
		clickColor = 'red';
	} else {
		gMan.image = amber;
		gMan.point = pts;
		clickColor = 'blue';
	}
	
	win.add(gMan);
    gMan.center={x:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformWidth-(size*2)))+(size*2)),y:(Math.floor(Math.random()*(Ti.Platform.displayCaps.platformHeight-(size*2)-84))+44)};

	gMan.show();
	var pIntval =setInterval(function(){
       if(multiplier >1){
             multiplier-=pts/10;
       }else{
       		multiplier = pts+10
       	}} ,(length/10));
    setTimeout(function(){gMan.hide();clearInterval(pIntval);},length);
}, time);

gMan.addEventListener('touchstart', function(e){
	if(clickColor == 'red'){
		Ti.Media.vibrate();
		src.backgroundColor = 'red';
	} else {
	src.backgroundColor = 'blue';
	
	}
	src.text = addCommas(gMan.point* multiplier);
	//src.center = gMan.center;
	src.show();
	setTimeout(function(){src.hide();},500);
	//Ti.API.info(gMan.point);
	score+=gMan.point* multiplier;
	scoreLabel.text=addCommas(Math.floor(score));
	gMan.hide();
});

return pop;

};
setTimeout(function(){
	
	pop = gManFactory(4500, 750, 30, 100);
}, Math.floor(Math.random()*5000));

setTimeout(function(){
	
	pop2 = gManFactory(3500, 1000, 40, 5);
}, Math.floor(Math.random()*1000));

pop3 = gManFactory(2500, 1500, 50, 10);


}
win.addEventListener('focus', function(){	
setTimeout(function(){
var start = Ti.UI.createAlertDialog({title:'Amber Knockout', message:"Knockout Amber, but don't hit Tracy!", buttonNames:['Start', 'Cancel']})
	start.show();
	start.addEventListener('click', function(e){
		if(e.index == 0){
			game();
		} else{
			win.close();
		}
	});

},200);

});