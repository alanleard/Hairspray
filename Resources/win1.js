var win = Ti.UI.currentWindow;

var curtainTop = Ti.UI.createView({
	backgroundImage:'images/curtain-top.png',
	height:86,
	//width:320,
	top:0,
	zIndex:100
});

var curtainMain = Ti.UI.createView({
	backgroundImage:'images/curtain-main.png',
	//backgroundColor:'red',
	bottom:-20,
	height:Ti.Platform.displayCaps.platformHeight-70,
	top:0,
	left:0,
	right:0,
	zIndex:50
});
var sign = Titanium.UI.createImageView({
	image:'images/sign.png',
	top:-150,
	height:180,
	width:200,
	anchorPoint:{x:0.5,y:0},
	zIndex:75
});

win.add(curtainMain);
win.add(sign);
win.add(curtainTop);
var scrollable = Ti.UI.createScrollableView({
	top:0,
	bottom:0,
	left:0,
	right:0,
	showPagingControl:true,
	pagingControlHeight:10
});

var view1 = Ti.UI.createView({layout:'vertical'});
var header = Ti.UI.createImageView({
	image:"images/header.png",
	width:282,
	height:100,
	top:88
});
view1.add(header);

var act1Header = Ti.UI.createLabel({
	text:"Act 1",
	top:0,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'}
});
view1.add(act1Header);
var act1 = Ti.UI.createLabel({
	text:"Good Morning Baltimore\nThe Nicest Kids in Town\nMama, I’m a Big Girl Now\nI Can Hear the Bells\n(The Legend of) Miss Baltimore Crabs\nThe Madison\nThe Nicest Kids in Town (Reprise)\nIt Takes Two\nVelma’s Revenge\nWelcome to the 60’s\nRun and Tell That!\nBig, Blonde, and Beautiful",
	top:5,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:13}
});
view1.add(act1);

var view2 = Ti.UI.createView({layout:'vertical'});
var header2 = Ti.UI.createImageView({
	image:"images/header.png",
	width:282,
	height:100,
	top:88
});
view2.add(header2);
var act2Header = Ti.UI.createLabel({
	text:"Act 2",
	top:0,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'}
});
view2.add(act2Header);
var act2 = Ti.UI.createLabel({
	text:"The Big Dollhouse\nGood Morning Baltimore (Reprise)\n(You’re) Timeless to Me\nWithout Love\nI Know Where I’ve Been\n(It’s) Hairspray\nCooties\nYou Can’t Stop the Beat",
	top:5,
	height:'auto',
	color:'#000',
	textAlign:'center',
	font:{fontSize:13}
});
view2.add(act2);
var view3 = Ti.UI.createView();
var directorImage = Ti.UI.createImageView({
	image:'images/jana.jpg',
	top:88,
	left:10,
	width:85,
	height:113,
	borderColor:'#000',
	borderWidth:2
});
view3.add(directorImage);

var directorTitle = Ti.UI.createLabel({
	text:"Director's Notes",
	font:{fontSize:20},
	left:95,
	top:130,
	color:'#cc0000',
	height:'auto',
	right:10,
	textAlign:'center',
	font:{fontSize:24, fontWeight:'bold'},
	shadowColor:'#000',
	shadowOffset:{x:1,y:1}
});
view3.add(directorTitle);
var directorsNotes = Ti.UI.createLabel({
	text:"Welcome to the '60s! This Baltimore musical will make you tap your feet and your heart skip a beat as you are transported to a period in time when rules were bending and society was changing.  This show, performed by an amazing local cast and live orchestra, will excite you with its terrific music, energetic dancing, and a story that will melt your heart. As a lover of musicals, this show has been the most exciting for me as a director with all of the creative freedom of sets, character exploration, musical portrayal, and humor it provides. The confidence of these characters is admirable, and the hope for change is inspiring. I love every number in this show and I'm sure you will too. The energy required for this show by it's cast and musicians is overwhelming. Each character has had to build up their endurance to keep up with one another and create consistency in their delivery. Hairspray is for all who have a humorous heart, enjoy a good beat, and can't resist a lovable soul. I hope you can find yourself getting swept away by these performers who have worked tirelessly to produce a show where black and white unite to create nothing but colorful love.  Because WITHOUT LOVE, what else do we have? Oh, and yes...that is a man playing the part of Edna Turnblad. It's a classic role in casting, and I would hate to break that Broadway tradition. Plus, it's always a great laugh to see a man in heels!\n\n~~~\n\nJana has happily returned to her hometown of Redding after living and studying for several years in Los Angeles, where she received her BA in Recording Arts from Loyola Marymount University.  She has stayed active in entertainment as a singer, dancer, actress, director and a certified professional Bun Raku puppeteer.  She has performed in commercials, short films, and local and regional theatre productions.  Her performance resume includes productions such as Guys & Dolls, Sound of Music, Calamity Jane, Joseph and the Amazing Technicolor Dreamcoat, Grease, Bye Bye Birdie, Once on This Island, Swing, Nuncrackers, Steppin Out, Exposed, Rocky Horror Picture Show, Life x's 3, & Cascade Christmas.  Her most recent role as a Director for the Cascade Theatre include last season's production of A Cascade Christmas & The Sound of Music.  Her teaching credentials include drama instruction & choreography  for Kids Unlimited, KU Dance Plus, KU2 and Ventura County's Expanding Horizons After School Programs. She also has been the Education Manager for the Cascade Theatre for the past 8 years, exposing over 20,000 students to the theatrical experiences that the North State has to offer.  Jana and her husband Alan own and operate Vintner's Cellar Custom Winery in downtown Redding. Currently, they are enjoying their new roles as parents as they celebrate the birth of their new son, Avan.",
	top:0,
	left:10,
	right:10,
	height:'auto',
	color:'#000',
	font:{fontSize:16}
});

var scroll = Ti.UI.createScrollView({
	top:205,
	contentHeight:'auto',
	contentWidth:'auto',
	bottom:0
});
scroll.add(directorsNotes);

view3.add(scroll);
if(Ti.Platform.osname == 'ipad'){
	act1.font={fontSize:22};
	act2.font={fontSize:22};
	act1.top=20;
	act2.top=20;
	header.image="images/header@2x.png";
	header2.image="images/header@2x.png";
	header.width=464;
	header.height=200;
	header2.width=464;
	header2.height=200;
	act1Header.font={fontSize:32, fontWeight:'bold'};
	act2Header.font={fontSize:32, fontWeight:'bold'};
	directorsNotes.font={fontSize:20};
	directorTitle.font={fontSize:28, fontWeight:'bold'};
}



var creditTitle = Ti.UI.createLabel({
	text:'Credits',
	top:10, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}, color:'#000'});
	
var credits = Ti.UI.createLabel({
	//backgroundImage:'images/special.png',
	top:50,
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth-10,
	font:{fontSize:14},
	textAlign:'center',
	minFontSize:8,
	color:'#000',
	text:'~Director~\nJana Pulcini-Leard \n\n~Costume Designer~\nMolly Barber\n\n~Vocal Directors~\nCleveland Boney & Trish Harris\n\n~Orchestra Director~\nCleveland Boney\n\n~Choreographers~\nAshley Adishian, Kristi Webber & Michelle Marks \n\n~Dance Captain~\nMichelle Marks\n\n~Costume Assistant~\nMarti Leard, Olivia & Anna Shupe, Obioma Officer, Carolyn Placade\n\n~Costume Contributors~\nShasta College, Shasta High School & Riverfront Playhouse \n\n~Production Assistant~\nLyn Regan\n\n~Lighting Design & Operator~\nBrandon Stewart\n\n~Technical Director~\nTodd Tracy\n\n~Stage Manager~\nDean Williams\n\n~Assistant Stage Managers~\n\n\n~Print Design~\nIn House Marketing & Impact Publications\n\n~Commercial Production~\nKRCR, Channel 7\n\n~Custom Backdrop Artist~\nDavid Fraser\n\n~Make-Up Designers ~\nMichelle Marks & Meghan Cumming\n\n~Custom Wig Designer & Hairstylist~\nMichael Allen & Paige Allen\n\n~Set Design & Construction~\nKevin Kelly, David Fraser, Matt Goodman & Best Choice Home Improvement  \n\n~Advertising Coordinator~\nRobin Jacques\n\n~Poster Distribution Coordinator~\nKim Acuna\n\n~Craft Services Manager~\nJennifer Marty\n\n~Props & Furniture~\nWestside Performing Arts Company, WE Multimedia, Shasta College\n\n~Prop Coordinators~\nLyn Regan, Tina Arons & Jana Pulcini-Leard\n\n~Production Photographer~\nMichael Burke\n\n~Videographer~\nWade Riggs & Bobette Ellis\n\n~Audition Team~\nJana Pulcini-Leard, Alan Leard, Michelle Marks, Kristi Webber, Trish Harris, Tina Marty, Peggy Baker, Tina Arons, Lyn Regan, Julie De-Prada, \n\n~Set Construction Space provided by~\nRiverfront Playhouse\n\n~Rehearsal Space provided by~\nCascade Theatre, Celebration Studios, Front & Center Dance Studio & Westside Performing Arts Company\n\n~Storage Space provided by~\nStewart X-Ray & Ward Gandy'
});



var creditScroll = Ti.UI.createScrollView({
	top:85,
	contentHeight:'auto',
	contentWidth:'auto',
	left:0,
	right:0,
	bottom:0,
	minZoomScale:1.0,
	maxZoomScale:3.0,
	zoomScale:1.0
});
creditScroll.add(creditTitle);
creditScroll.add(credits);
if(Ti.Platform.osname == 'ipad'){
	credits.backgroundImage = 'images/credits@2x.png';
	creditScroll.zoomScale = 1.0;
}

var thankTitle = Ti.UI.createLabel({
	text:'Special Thanks to:',
	color:'#000',
	top:10, textAlign:'center',height:'auto', font:{fontSize:24, fontWeight:'bold'}});

var thanks = Ti.UI.createLabel({
	//backgroundImage:'images/special.png',
	top:50,
	height:'auto',
	width:Ti.Platform.displayCaps.platformWidth-10,
	font:{fontSize:14},
	textAlign:'center',
	minFontSize:8,
	color:'#000',
	text:'Gary Desmond & Armando Mejorado\n\nPaige Allen & The Humor Shop\n\nJason & Peggy Baker with Celebration Studio\n\nRecord Searchlight\n\nAfter 5 Magazine\n\nViva Downtown\n\nLisa Collins\n\nLinda Bott KCNR\n\nRobert Soffian & Shasta College\n\nDan Kupsky & Riverfront Playhouse\n\nValerie Ing-Miller & Jefferson Public Radio\n\nKLXR'
});
if(Ti.Platform.osname == 'ipad'){
	
	//thanks.backgroundImage='images/special@2x.png';
	//thanks.width = 500;
	//thanks.height = 1202;
}

if(Ti.Platform.osname == 'android'){
	credits.top= 125;
creditTitle.top = 85;
thanks.top = 85;
thanks.top = 125;}

var thanksScroll = Ti.UI.createScrollView({
	top:85,
	contentHeight:'auto',
	contentWidth:'auto',
	bottom:0,
	left:0,
	right:0,
	minZoomScale:1.0,
	maxZoomScale:3.0,
	
});
thanksScroll.add(thankTitle);
thanksScroll.add(thanks);

var bios = [
{	name:'ASHLEY ADISHIAN, \nChoregrapher',
	text:'Ashley started dancing at age 4 with Redding Dance Centre where she studied ballet, tap & jazz. Additionally, she was a member of Company Dancers and a company member of The Dance Project.  Ashley graduated from Azusa Pacific University with a Bachelors in Political Science and a Masters in Public Administration from USC. Since returning to Redding, she has taken over management of her family’s business,   Soleus Dance & Fitness Wear and works as a Field Representative for Assemblyman Jim Nielsen.'
},
{	name:'MICHELLE MARKS, \nChoregrapher & Dance Captain',
	text:'Michell began dancing at five years old, and by the age of ten, Michelle’s love of ice skating became her competitive and artistic focus. She also was a  cheer/dance instructor & choreographer for summer camps. After graduating from CSU Sacramento, Michelle became a professional cheerleader for the NFL’s Oakland Raiders. She spent four seasons as a Raiderette, and was awarded Dancer of the Year as a rookie. After moving to Redding four years ago, Michelle had the opportunity to be a dancer in theCascade Christmas in 2010.'
},
{	name:'KRISTI WEBBER, \nChoreographer',
	text:"Kristi grew up dancing at a number of local studios in the Redding area. After graduation, she opened Front and Center Dance Studio and her non-profit dance team Spotlight Company Dancers. She has choreographed for many shows, including Summer Theatre Academy, A Grand Night for Singing, You're a Good Man, Charlie Brown , Happy Days The Musical, Club Dead and Masquerade Murders. She also choreographs for Anderson High School’s dance team and has been a dancer in A Cascade Christmas for 7 years."
},
{	name:'CLEVELAND BONEY, \nVocal & Pit Director',
	text:"Cleveland has been a pianist for more than 30 years, with 11 years of classical training.He also taught piano technique  & music theory. He played, orchestrated and co-wrote the music for four jazz CD projects. He is currently working on four orchestral suites, one of which was considered for the National Composer's Forum Workshop Competition. He has been the Minister of Music for churches nationwide, and has played for several community gospel choirs, one of which won the Stellar Award for best new choir in 2002."
},
{	name:'TRISH HARRIS, \nVocal Director',
	text:'Trish is proud to say she is a Redding native. She graduated from Shasta High School and Shasta College before going to the HARTT School of Music in Hartford, CT to pursue her studies in vocal performance. Trish is currently the Artistic and Music Director for the Westside Performing Arts Company, has been the music director for A Cascade Christmas for six years, and is a full time private voice instructor and professional theatre performer. Trish most recently played the lead role of Maria in The Dance Project’s The Sound of Music.'
},
{	name:'MOLLY BARBER, \nCostume Designer',
	text:"Molly attended Oregon State University's Apparel Design program and graduated Cum Laude in June 2010 with two bachelor's degrees in Merchandising Management and Apparel Design. She also took home the Senior Fashion Show award for Overall Best Senior Collection.Her husband's job brought her to Redding after graduation, and she was chosen to do the costumes for the Cascade Theatre's A Cascade Christmas . Ultimately, she would love to design costumes for the Oregon Shakespeare Festival in Ashland."
}];

var bioScroll = Ti.UI.createScrollView({top:85, bottom:0, left:0, right:0,contentHeight:'auto',
	contentWidth:'auto', });
var bioView = Ti.UI.createView({layout:'vertical', height:'auto'});
var staffLabel = Ti.UI.createLabel({text:'Staff Bios', top:10, textAlign:'center', color:'#000', height:'auto', font:{fontSize:24, fontWeight:'bold'}});

bioView.add(staffLabel);

if(Ti.Platform.osname == 'android'){
	credits.top= 125;
creditTitle.top = 85;
thankTitle.top = 85;
thanks.top = 125;
bioView.top = 85;}

for (var i = 0; i<bios.length; i++){
	
	var nameLabel = Ti.UI.createLabel({text:bios[i].name, top:20,bottom:5, left:10, right:10, height:'auto', color:'#000', font:{fontSize:16, fontWeight:'bold'}});
	var bioLabel = Ti.UI.createLabel({text: bios[i].text, top:5, bottom:10, left:10, right:10, height:'auto', color:'#000', font:{fontSize:14}});
	bioView.add(nameLabel);
	bioView.add(bioLabel);
}

bioScroll.add(bioView);
scrollable.views = [view1, view2, view3, bioScroll, thanksScroll, creditScroll];

win.add(scrollable);

var c = Titanium.UI.createAnimation();
c.top = -150;
c.duration = 1000;
if(Ti.Platform.osname != 'android'){
c.curve = Ti.UI.iOS.ANIMATION_CURVE_EASE_IN;
}
var d = Titanium.UI.createAnimation();
d.top = 80;
d.duration = 1000;
if(Ti.Platform.osname != 'android'){
d.curve = Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT;
}
//
// TOP LEFT
//

if(Ti.Platform.osname == 'ipad'){
	c.top = -360;
	sign.top=-360;
	sign.image = 'images/sign@2x.png';
	sign.height = 360;
	sign.width = 400;
}

var count = 5;
d.addEventListener('complete', function(){
	sign.top=80;
});

c.addEventListener('complete', function(){
	sign.top=-150;
	if(Ti.Platform.osname == 'ipad'){
	sign.top=-360;
	}
});

win.addEventListener('open', function(){
	setTimeout(function(){
		sign.animate(d);
	}, 1000);
});

win.addEventListener('touchend', function(){
	if(curtainMain.bottom == -20){
		
		curtainMain.animate({ bottom:(Ti.Platform.displayCaps.platformHeight*2), duration:1500});
		sign.animate(c);
		
		setTimeout(function(){curtainMain.bottom = (Ti.Platform.displayCaps.platformHeight*2);}, 1500);
		
		
	} else {
		var curtainAnimation = Titanium.UI.createAnimation();
			curtainAnimation.duration = 1000;
			if(Ti.Platform.osname != 'android'){
			curtainAnimation.curve = Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT;
			}
			curtainAnimation.bottom = -20;
			curtainAnimation.top = 0;
		curtainMain.animate(curtainAnimation);
		
		setTimeout(function(){curtainMain.bottom = -20; curtainMain.top = 0;},1000);
		
		curtainAnimation.addEventListener('complete', function(){
			sign.animate(d);
		});
	}
	
});


