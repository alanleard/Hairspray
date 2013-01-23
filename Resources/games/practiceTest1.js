
var win = Titanium.UI.currentWindow;
win.backgroundColor = '#fff';
win.title = 'Lyrics Quiz!';
// create table view 

// create table view data object
var data = [

		{title:"__, oh, oh; Don't hold me back 'cause today all my dreams will come true.",header:'1. Fill in the lyric.'},
		{correct:false, title:'Oh'},
		{correct:true, title:'So'},
		{correct:false, title:'But'},
		{title:"I'm Amber! Brad! Tammy! Fender! Brenda! ______! Shelley! I.Q.! Lou Ann! ...And I'm...LINK!",header:'2. Fill in the lyric.'},
		{correct:false, title:'Match'},
		{correct:false, title:'Fetch'},
		{correct:true, title:'Sketch'},
		{title:"My heart was unprepared when he ______ me.",header:'3. Fill in the lyric.'},
		{correct:false, title:'nudged'},
		{correct:true, title:'tapped'},
		{correct:false, title:'bumped'},
		{title:"But that triple somersault was how I ________ 'Miss Baltimore Crabs'!",header:'4. Fill in the lyric.'},
		{correct:false, title:"got"},
		{correct:true, title:'clinched'},
		{correct:false, title:'won'},
		{title:"A prince is a ______ Babe, without a chick to call his own.",header:'5. Fill in the lyric.'},
		{correct:true, title:'pauper'},
		{correct:false, title:'king'},
		{correct:false, title:'loser'},
		{title:"So let go, __, go of the past now. Say hello to the light in your eyes.",header:'6. Fill in the lyric.'},
		{correct:false, title:'so'},
		{correct:true, title:'go'},
		{correct:false, title:'slow'},
		{title:"They're 'try'n to make dollar out 'a _______ cent'.",header:'7. Fill in the lyric.'},
		{correct:false, title:'twenty'},
		{correct:true, title:'fifteen'},
		{correct:false, title:'fifty'},
		{title:"Glenn Miller had _____, that Chubby Checker's a gas.",header:'8. Fill in the lyric.'},
		{correct:false, title:'glass'},
		{correct:false, title:'pass'},
		{correct:true, title:'class'},
		{title:"Seaweed, you're my black white knight, I've found my ____-____ soul.",header:'9. Fill in the lyric.'},
		{correct:true, title:'blue-eyed'},
		{correct:false, title:'pool-side'},
		{correct:false, title:'moon-eyed'},
		{title:"And so I'm gonna _____ and ______ it the best that I can today.",header:'10. Fill in the lyric.'},
		{end:'end', correct:false, title:'shake and bake'},
		{end:'end',correct:true, title:'shake and shimmy'},
		{end:'end',correct:false, title:'beat and jingle'}

		
		
];


var table = Titanium.UI.createTableView({
	backgroundColor:'#f99cc8',
	separatorColor:'transparent',
	bottom:0
});

var alertSwitch = Titanium.UI.createSwitch({
    value:true,
    right:10
    
});

var tableData = [];

var row1 = Ti.UI.createTableViewRow({
				height:'auto',
				left:0,
				right:0,
                touchEnabled:false
        });
var alerts = Ti.UI.createLabel({
            text:'Test Alerts are:',
            height:40,
            textAlign:'right',
			right:110,
            color:'#000',
            font:{fontWeight:'bold', fontSize:14}
        });
        

row1.add(alerts);
row1.add(alertSwitch);

tableData.push(row1);


var idx = 1;

for (i=0; i<data.length; i++) {

    if(data[i].header!=null)
    {
        var row = Ti.UI.createTableViewRow({
				header:data[i].header,
				height:'auto',
				left:0,
				right:0,
                touchEnabled:false
        });

        var question = Ti.UI.createLabel({
            text: data[i].title,
           	height:'auto',
			left: 20,
			right:5,
            color:'#000',
			row: idx++,
            font:{fontWeight:'bold', fontSize:14}
        });

        row.add(question);
    
        tableData.push(row);
    }
    else
    {
        var row = Ti.UI.createTableViewRow({
                touchEnabled:false
            
        });

        var question = Ti.UI.createLabel({
            text: data[i].title,
            left:65,
			row: idx++,
            color:'#000',
            font:{fontSize:13}
        });

        var test = Ti.UI.createImageView({
            image:'../images/test.png',
			left:20,
			width:40,
            row:idx++,
			correct:data[i].correct,
			text: data[i].title,
            clickName:'test',
            end:data[i].end

        });
        row.add(test);
        row.add(question);
    
        tableData.push(row);
        
    }
    

}

// add table view to the window
table.data = tableData;
win.add(table);


var correct = 0;
var wrong = 0;
var total = 0;
var score = 0;

table.addEventListener('click', function(e)
{
    e.source.touchEnabled = false;
    if (e.source.clickName == 'test'){
	if(e.source.correct != 0){
		 e.source.image = '../images/testSelectCorrect.png';
         total = total+1;
         correct = correct+1;
         score = Math.round((correct/total)*100);
         if(e.source.end != 'end'){
         if(alertSwitch.value==1){
		 var correctDialog = Titanium.UI.createAlertDialog({
                        title: "Correct!",
                        message: e.source.text+'\nCurrent Score: '+score+'%',
                        buttonNames: ['Continue']
                    });
  
                    correctDialog.show();
            }
            }
            else{
            var finalDialog = Titanium.UI.createAlertDialog({
                        title: "Correct!",
                        message: e.source.text+'\nCurrent Score: '+score+'%',
                        buttonNames: ['Continue']
                    });

                    finalDialog.show();

            if(total>=idx)
            { 
            var lastDialog = Titanium.UI.createAlertDialog({   
                        buttonNames: ['End', 'Email Results']
                    });
                        if (score > 69){
                        lastDialog.title=  "Congratulations, you passed!";
                        lastDialog.message= 'Final Score: '+score+'%';
                        }
                        else{
                        lastDialog.title= "You didn't pass.";
                        lastDialog.message= 'Final Score: '+score+'%';
                        }
                     
    			
                    lastDialog.addEventListener('click',function(e) {
                        if(e.index==0)
                            {
                             win.close();  
                            }
                            else 
                            {
                                   
                                    var emailDialog = Titanium.UI.createEmailDialog();
                                        emailDialog.html = true;
                                        emailDialog.subject = 'CalTeen Driver '+win.title+" Results";
                                    if (score > 69)
                                    {
                                        emailDialog.messageBody = 'Congratulations on passing '+win.title+'.  <br>Your score was '+score+'%';
                                    }
                                    else
                                    {
                                        emailDialog.messageBody = 'You failed '+win.title+'.  <br>Your score was '+score+'%';
                                    }
                            
                                    emailDialog.open();

                            }
                    });
    				
                    lastDialog.show();
                }
                                
                else
                {
                    alert('Please complete all questions.');
                }

            
            }
	}
		
	else
	{
			e.source.image = '../images/testSelect.png';
            total = total+1;
            wrong = wrong+1;
            score = Math.round((correct/total)*100);
			
            if(alertSwitch.value==1){
			var wrongDialog = Titanium.UI.createAlertDialog({
                        title: "Incorrect",
                        message: "Sorry, that's not the right answer.\nScore: "+score+'%',
                        buttonNames: ['Try Again']
                    });
                    
			wrongDialog.show();
            }
            else{
            if(e.source.end =='end'){
            var lastDialog2 = Titanium.UI.createAlertDialog({   
                        buttonNames: ['Try Again', 'Email Results']
                    });
  
                        lastDialog2.title=  "Final Question";
                        lastDialog2.message= 'That was your last question.  Do you want to try again or email your results? \n\nCurrent Score: '+score+'%';

            if(total>=idx)
            { 
                    lastDialog2.addEventListener('click',function(e) {
                        if(e.index==1){
                            
                            var emailDialog = Titanium.UI.createEmailDialog();
                                emailDialog.html = true;
                                emailDialog.subject = 'CalTeen Driver '+win.title+" Results";
                                    if (score > 69){
                                        emailDialog.messageBody = 'Congratulations on passing '+win.title+'.  <br>Your score was '+score+'%';
                                    }
                                    else{emailDialog.messageBody = 'You failed '+win.title+'.  <br>Your score was '+score+'%';}
                            

                            emailDialog.open();
                           
                            }
                    });
    				
                    lastDialog2.show();
                }
                                
                else
                {
                    alert('Please complete all questions.');
                }
            }
            
            }
           
	}
}
});

