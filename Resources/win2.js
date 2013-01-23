//var win = Ti.UI.currentWindow;
var win = Titanium.UI.createWindow({  
    title:'Hairspray 2012',
 	backgroundColor:'#f99cc8',
    barColor:'#03a6d7',
    url:'win2.js'
   // rightNavButton:fb
});
win.backgroundColor = '#f99cc8';
var scrollView1 = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0,
	top:0,
	bottom:0,
	left:0,
	right:0,
	//height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	backgroundColor:'#f99cc8'
});
	
win.add(scrollView1);

var castInfo = [
	{name:'Bailey Fator',role:'TRACY TURNBLAD',image:'CascadePlayers146bw',page:1, pic:'images/showimages/tracy.jpg'},
{name:'Nathan Saunders',role:'CORNY COLLINS',image:'CascadePlayers115bw',page:1, pic:'images/showimages/corny.jpg'},
{name:'Matthew Goodman',role:'EDNA TURNBLAD',image:'CascadePlayers116bw',page:1, pic:'images/showimages/edna.jpg'},
{name:'Kim Acuna',role:'PENNY PINGLETON',image:'CascadePlayers087bw',page:1, pic:'images/showimages/penny.jpg'},
{name:'Kathryn Kirk',role:'VELMA VON TUSSLE',image:'CascadePlayers038bw',page:1, pic:'images/showimages/velma.jpg'},
{name:'Jennifer Marty',role:'AMBER VON TUSSLE',image:'CascadePlayers2008bw',page:1, pic:'images/showimages/amber.jpg'},
{name:'Senator Chase Buick',role:'LINK LARKIN',image:'CascadePlayers2057bw',page:1, pic:'images/showimages/link.jpg'},
{name:'Lloyd Brown',role:'SEAWEED STUBBS',image:'CascadePlayers2045bw',page:1, pic:'images/showimages/seaweed.jpg'},
{name:'Brittney Pearson',role:'LITTLE INEZ & DYNAMITE',image:'CascadePlayers196bw',page:1},
{name:'Obioma Officer',role:'MOTORMOUTH MAYBELLE ',image:'CascadePlayers081bw',page:2, pic:'images/showimages/motormouth.jpg'},
{name:'Bill Collins',role:'WILBUR TURNBLAD',image:'CascadePlayers040bw',page:2},
{name:'Lisa Collins',role:'PRUDY PINGLETON & MATRON',image:'CascadePlayers214bw',page:2},
{name:'Russell Piette',role:'MR. PINKY &  MR. SPRITZER',image:'CascadePlayers186bw',page:2},
{name:'Michelle  Marks',role:'TAMMY',image:'CascadePlayers2056bw',page:2},
{name:'Nick Powers',role:' BRAD',image:'CascadePlayers199bw',page:2},
{name:'madeline johnson',role:' FENDER',image:'CascadePlayers2028bw',page:2},
{name:'Olivia  Ramsour',role:'BRENDA',image:'CascadePlayers2041bw',page:2},
{name:'Sean Cox',role:' SKETCH',image:'CascadePlayers066bw',page:2},
{name:'Janelle Reynolds',role:' SHELLY',image:'CascadePlayers182bw',page:3},
{name:'Lane Simmons',role:'IQ',image:'CascadePlayers2044bw',page:3},
{name:'Kristen Lawrence',role:'LOUANNE',image:'CascadePlayers2053bw',page:3},
{name:'Carolyn Placide',role:'DUANNE & DYNAMITE',image:'CascadePlayers071bw',page:3},
{name:'Robert Milhouse II',role:' THAD',image:'CascadePlayers098bw',page:3},
{name:'Meghan Cumming',role:'COUNCIL MEMBER & DYNAMITE',image:'CascadePlayers095bw',page:3},
{name:'Jamie Severtson',role:'COUNCIL MEMBER',image:'CascadePlayers211bw',page:3},
{name:'Aimee Redden',role:'COUNCIL MEMBER',image:'CascadePlayers022bw',page:3},
{name:'Anna Shupe',role:'COUNCIL MEMBER',image:'CascadePlayers019bw',page:3},
{name:'Spencer MacDowell',role:'COUNCIL MEMBER',image:'CascadePlayers219bw',page:4},
{name:'Joven Longee',role:'COUNCIL MEMBER',image:'CascadePlayers2085bw',page:4},
{name:'Wade Riggs',role:'GYM TEACHER',image:'CascadePlayers007bw',page:4}
];

var view1 = Ti.UI.createView({
	top:10,
	layout:'horizontal',
	height:1200,
	width:Ti.Platform.displayCaps.platformWidth
});
scrollView1.add(view1);
var clength = castInfo.length;

for(var i=0; i<clength; i++){

	var container = Ti.UI.createView({layout:'vertical', width:90, height:110, left:10, top:10, headshot:castInfo[i].image+'_thb.jpg',fullimage: castInfo[i].image+'.jpg',name:castInfo[i].name, role:castInfo[i].role});
	if(castInfo[i].pic!=null){
		container.castpic = castInfo[i].pic;
	}
	var pic = Ti.UI.createImageView({
		image:'images/headshots/'+container.headshot,
		height:90,
		width:60,
		touchEnabled:false,
		borderWidth:2, 
		borderColor:'#000',
		hiRes:true
	});
	if(Ti.Platform.osname == 'android'){
		// container.left = (Ti.Platform.displayCaps.platformWidth-360)/5;
		pic.borderColor='#fff';
	}
	container.add(pic);
	var name = Ti.UI.createLabel({
		text:container.name,
		color:'#000',
		font:{fontSize:10},
		top:4,
		height:15,
		width:90,
		textAlign:'center',
		touchEnabled:false,
		minimumFontSize:6
	});
	container.add(name);
	if(Ti.Platform.osname == 'ipad'){
		container.height = 230;
		container.width = 180;
		container.left = 5;
		container.right = 5;
		pic.height=180;
		name.height = 20;
		pic.width=120;
		name.width=120;
		name.font={fontSize:16};
		name.minimumFontSize=12;
		pic.image='images/headshots/'+castInfo[i].image+'_thb@2x.jpg';
		view1.height = 2000;
		}
	
	view1.add(container);

}


//scrollable.views = [scrollView1];
	view1.addEventListener('touchend', function(e){
		if(e.source.name){
			e.source.opacity = 0.5;
		setTimeout(function(){
			e.source.opacity = 1.0;
		}, 500);
		var flipWin = Ti.UI.createWindow({
			title:e.source.name,
			barColor:'#03a6d7',
			top:0,
			bottom:0,
			minimumFontSize:8,
			backButtonTitle:'Cast'
		});
		var mainImage = Ti.UI.createImageView({
			image:'images/headshots/'+e.source.fullimage
		});
		flipWin.add(mainImage);
		var bio = Ti.UI.createLabel({
	    	text:e.source.role,
	    	height:30,
	    	left:32,
	    	right:32,
	    	minimumFontSize:10,
	    	textAlign:'center',
	    	top:3,
	    	backgroundColor:'#f99cc8',
	    	borderRadius:15,
	    	backgroundPaddingLeft:10,
	    	backgroundPaddingRight:10,
	    	font:{fontSize:14}
	    });
	    var shadow = Ti.UI.createView({
	    	height:30,
	    	left:32,
	    	right:32,
	    	top:5,
	    	backgroundColor:'#000',
	    	borderRadius:15,
	    	opacity:0.7
	    });
		
	    if(e.source.castpic!=null){
	    var backImage = Ti.UI.createImageView({
			image:e.source.castpic,
			width:'100%',
			height:'100%',

			top:-Ti.Platform.displayCaps.platformHeight
		});
		flipWin.add(backImage);
	    bio.addEventListener('touchend', function(){
			if(backImage.top === 0){
				backImage.animate({top:-Ti.Platform.displayCaps.platformHeight, duration:500});
				backImage.top = -Ti.Platform.displayCaps.platformHeight ;
			} else {
	      		backImage.animate({top:0,duration:500});
				backImage.top = 0;
				backImage.addEventListener('touchend', function(){
					backImage.animate({top:-Ti.Platform.displayCaps.platformHeight, duration:500});
					backImage.top = -Ti.Platform.displayCaps.platformHeight ;
				});
      		}
    	});
    	
    	 mainImage.addEventListener('touchend', function(){
			if(backImage.top === 0){
				backImage.animate({top:-Ti.Platform.displayCaps.platformHeight, duration:500});
				backImage.top = -Ti.Platform.displayCaps.platformHeight ;
			} else {
	      		backImage.animate({top:0,duration:500});
				backImage.top = 0;
				backImage.addEventListener('touchend', function(){
					backImage.animate({top:-Ti.Platform.displayCaps.platformHeight, duration:500});
					backImage.top = -Ti.Platform.displayCaps.platformHeight ;
				});
      		}
    	});

		}
		flipWin.add(shadow);	    
	    flipWin.add(bio);
		
		tab2.open(flipWin,{animated:true, transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		}
	});
