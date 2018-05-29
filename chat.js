let wait = 500;


function init(){
    let buttonArray = [new Button('Hoi Mami',0,showWriting.bind(null,wait,mood)),
    new Button('Hallo Mueter',0, showWriting.bind(null,wait,mood)), 
    new Button('Sali Mami',0,showWriting.bind(null,wait,mood)),
    new Button('Festivalquestion',0,festivalQuestion)
    ];
    setButtons(buttonArray);
}

/// Wie geht es dir? Moodcheck

function mood(){
    let buttonArray = [new Button('Ganz gut! :)',0,showWriting.bind(null,wait,moodHappy)), new Button('Nicht so gut :(',0,showWriting.bind(null,wait,moodUnhappy)), new Button('Solala',0,showWriting.bind(null,wait,moodSolala))];
    setButtons(buttonArray);
    addMessage('Hallo du! Wie geht es dir? :)','server');
}


function moodHappy(){
    let buttonArray = [new Button(':)',0, festivalQuestion)];
    setButtons(buttonArray);
	addMessage('Das freut mich aber!','server');
}

function moodUnhappy(){
    let buttonArray = [new Button('Nein, das ist es nicht...',0, festivalQuestion)];
    addMessage('Ojeh :((','server');
	    showWriting(wait,function(){
	    	addMessage('Was ist los??','server');
	  			showWriting(wait,function(){
	  			setButtons(buttonArray);
	    		addMessage('Bist du krank??','server');
	    })
    })
}

function moodSolala(){
    let buttonArray = [new Button('Ganz gut! :)',0,showWriting.bind(null,wait,moodHappy)), 
    new Button('Nicht so gut :(',0,showWriting.bind(null,wait,moodUnhappy))];
    setButtons(buttonArray);
    addMessage('Solala gibt’s nicht. Sag schon!','server');
}


// Festival frage - mamiii derfi?

function festivalQuestion(){
    let buttonArray = [new Button('Ich hab dir doch von diesem Festival erzählt...',0, showWriting.bind(null,wait,festivalAnswer))];
    setButtons(buttonArray);
}


function festivalAnswer(){
    let buttonArray = [new Button('Tut mir leid.. Die Zeit vergeht viel zu schnell!',1, showWriting.bind(null,wait,festivalAnswerNice)),
    new Button('Ich schreibe dir auch sonst immer!',0, festivalAnswerNeutral),
    new Button('Jetzt spiel nicht die Dramaqueen.',-1, showWriting.bind(null,wait,festivalAnswerNegative))];
    

    addMessage('Achso, darum geht es also.','server');
    showWriting(wait, function() {
    	addMessage('Ist ja klar, sonst schreibst du mir ja nie','server');
  			showWriting(wait,function() {
  				setButtons(buttonArray);
    			addMessage('Bei mir wächst das Geld auch nicht auf den Bäumen!','server');
	    })
    })
}


function festivalAnswerNice(){
    addMessage('Ich verstehe dich ja.. Aber es macht mich trotzdem traurig :(','server');
	    showWriting(wait,function(){
	  			catVideo();
	    })
}

function festivalAnswerNeutral(){
    let buttonArray = [new Button('An deinem Geburtstag zum Beispiel, weißt du nicht mehr?',0, showWriting.bind(null,wait,festivalAnswerNeutral2))];
    setButtons(buttonArray);
}

function festivalAnswerNeutral2(){
    addMessage('Das war vor 3 Monaten','server');
	    showWriting(wait,function(){
	  			catVideo();
	    })
}

function festivalAnswerNegative(){
    addMessage('Ich bin doch keine Dramaqueen! Aber wenn ich meinem Kind scheinbar nicht mehr wichtig bin....','server');
	    showWriting(wait,function(){
	  			catVideo();
	    })
}

// catvideo

function catVideo(){
    let buttonArray = [new Button('Ach, die mit den süssen Katzen? Ich liebe die!',1,showWriting.bind(null,wait,catVideoAnswerNice)), 
	    new Button('Du weißt doch, dass ich die blöde finde.',-1,showWriting.bind(null,wait,catVideoAnswerNegative)),
	    new Button('Ich vergesse manchmal, zu Antworten. Sorry!',0,showWriting.bind(null,wait,catVideoAnswerNeutral))];
    setButtons(buttonArray);
    addMessage('Du antwortest auch nie auf meine Videos.','server');
}

function catVideoAnswerNice(){
    addMessage('Nicht wahr??','server');
	    showWriting(wait,function(){
	  			sendCatVideo();
	    })
}

function catVideoAnswerNegative(){
    addMessage('Die sind doch super!','server');
	    showWriting(wait,function(){
	  			sendCatVideo();
	    })
}

function catVideoAnswerNeutral(){
    addMessage('Jetzt bist du ja online.','server');
	    showWriting(wait,function(){
	  			sendCatVideo();
	    })
}

function sendCatVideo(){
    let buttonArray = [new Button('Die ist wirklich zuckersüss.',1,showWriting.bind(null,wait,sendCatVideo('nice'))), 
	    new Button('Ugh. Unnötig.',-1,showWriting.bind(null,wait,sendCatVideo('negative'))),
	    new Button('Haha, jaja.',0,showWriting.bind(null,wait,sendCatVideo('neutral')))];
    setButtons(buttonArray);
    addMessage('Schau mal','server');
	    showWriting(wait,function(){
	    	addMessage('Die ist doch megasüss!','server');
	  		setButtons(buttonArray);
    })
}


function sendCatVideo(input){
	var answer = input
	switch(input) {
	    case 'nice':
	        addMessage('Eben doch.','server');
	        break;
	    case 'neutral':
	        addMessage('neutral.','server');
	        break;
	    case 'negative':
	        addMessage('negative','server');
	        break;
	}

}





function festivalAbout(){

}







