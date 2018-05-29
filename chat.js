function init(){
    let buttonArray = [new Button('Hoi Mami',0,showWriting.bind(null,2000,mood)),new Button('Hallo Mueter',0, showWriting.bind(null,2000,mood)), new Button('Sali Mami',0,showWriting.bind(null,2000,mood))];
    setButtons(buttonArray);
}

/// Wie geht es dir? Moodcheck

function mood(){
    let buttonArray = [new Button('Ganz gut! :)',0,showWriting.bind(null,2000,moodHappy)), new Button('Nicht so gut :(',0,showWriting.bind(null,2000,moodUnhappy)), new Button('Solala',0,showWriting.bind(null,2000,moodSolala))];
    setButtons(buttonArray);
    addMessage('Hallo du! Wie geht es dir? :)','server');
}


function moodHappy(){
    let buttonArray = [new Button(':)',0, showWriting.bind(null,2000,festivalQuestion))];
    setButtons(buttonArray);
	addMessage('Das freut mich aber!','server');
}

function moodUnhappy(){
    let buttonArray = [new Button('Nein, das ist es nicht...',0, festivalQuestion)];
    addMessage('Ojeh :((','server');
	    showWriting(1000,function(){
	    	addMessage('Was ist los??','server');
	  			showWriting(1000,function(){
	  			setButtons(buttonArray);
	    		addMessage('Bist du krank??','server');
	    })
    })
}

function moodSolala(){
    let buttonArray = [new Button('Ganz gut! :)',0,showWriting.bind(null,2000,moodHappy)), new Button('Nicht so gut :(',0,showWriting.bind(null,2000,moodUnhappy))];
    setButtons(buttonArray);
    addMessage('Solala gibt’s nicht. Sag schon!','server');
}


// Festival frage - mamiii derfi?

function festivalQuestion(){
    let buttonArray = [new Button('Ich hab dir doch von diesem Festival erzählt...',0, mood)];
    setButtons(buttonArray);
    addMessage(':)','server');
}

// function momMonolog(){
//     let buttonArray = [new Button(':)',0,showWriting.bind(null,2000,testing)),new Button('dude',0,showWriting.bind(null,2000,testing))];
//     setButtons(buttonArray);
//     addMessage('Also nei','server');
//     showWriting(1000,function(){
//     	addMessage('Tubel','server');
//     showWriting(1000,function(){
//     	addMessage('manuuuuu','server');
//     })
//     })
// }