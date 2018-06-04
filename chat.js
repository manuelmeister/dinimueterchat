var wait = 1500;

//from: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	var items = location.search.substr(1).split("&");
	for (var index = 0; index < items.length; index++) {
		tmp = items[index].split("=");
		if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
	}
	return result;
}
//from: https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function init() {
    if(window.location.search !== ''){
        var callback = findGetParameter('m');
        var i = findGetParameter('i');
        if(isNumber(i)){
            impact = i;
        }
        if(callback !== ''){
            removeButtons();
            window[callback]();
        }
    } else {
        var buttonArray = [new Button('Hoi Mami', 0, initialClick.bind(null, wait, mood)),
            new Button('Hallo Mueter', 0, initialClick.bind(null, wait, mood)),
            new Button('Sälü Mami', 0, initialClick.bind(null, wait, mood)),
        ];
        setButtons(buttonArray);
    }
}

/// Wie geht es dir? Moodcheck

function mood() {
    var buttonArray = [new Button('Ganz gut! :)', 0, showWriting.bind(null, wait, moodHappy)),
        new Button('Nicht so gut :(', 0, showWriting.bind(null, wait, moodUnhappy)),
        new Button('Solala', 0, showWriting.bind(null, wait, moodSolala))];
    setButtons(buttonArray);
    addMessage('Hallo du! Wie geht es dir? :)', 'server');
}


function moodHappy() {
    var buttonArray = [new Button(':)', 0, festivalQuestion)];
    setButtons(buttonArray);
    addMessage('Das freut mich aber!', 'server');
}

function moodUnhappy() {
    var buttonArray = [new Button('Nein, das ist es nicht...', 0, festivalQuestion)];
    addMessage('Ojeh :((', 'server');
    showWriting(wait, function moodUnhappy() {
        addMessage('Was ist los??', 'server');
        showWriting(wait, function moodUnhappy() {
            setButtons(buttonArray);
            addMessage('Bist du krank??', 'server');
        })
    })
}

function moodSolala() {
    var buttonArray = [new Button('Ganz gut! :)', 0, showWriting.bind(null, wait, moodHappy)),
        new Button('Nicht so gut :(', 0, showWriting.bind(null, wait, moodUnhappy))];
    setButtons(buttonArray);
    addMessage('Solala gibt’s nicht. Sag schon!', 'server');
}


// Festival frage - mamiii derfi?

function festivalQuestion() {
    var buttonArray = [new Button('Ich hab dir doch von diesem Festival erzählt...', 0, showWriting.bind(null, wait, festivalAnswer))];
    setButtons(buttonArray);
}


function festivalAnswer() {
    var buttonArray = [new Button('Tut mir leid.. Die Zeit vergeht viel zu schnell!', 1, showWriting.bind(null, wait, festivalAnswerNice)),
        new Button('Ich schreibe dir auch sonst immer!', 0, festivalAnswerNeutral),
        new Button('Jetzt spiel nicht die Dramaqueen.', -1, showWriting.bind(null, wait, festivalAnswerNegative))];
    
    
    addMessage('Achso, darum geht es also.', 'server');
    showWriting(wait, function festivalAnswer() {
        addMessage('Ist ja klar, sonst schreibst du mir ja nie', 'server');
        showWriting(wait, function festivalAnswer() {
            setButtons(buttonArray);
            addMessage('Bei mir wächst das Geld auch nicht auf den Bäumen!', 'server');
        })
    })
}


function festivalAnswerNice() {
    addMessage('Ich verstehe dich ja.. Aber es macht mich trotzdem traurig :(', 'server');
    showWriting(wait, function festivalAnswerNice() {
        catVideo();
    })
}

function festivalAnswerNeutral() {
    var buttonArray = [new Button('An deinem Geburtstag zum Beispiel, weißt du nicht mehr?', 0, showWriting.bind(null, wait, festivalAnswerNeutral2))];
    setButtons(buttonArray);
}

function festivalAnswerNeutral2() {
    addMessage('Das war vor 3 Monaten', 'server');
    showWriting(wait, function festivalAnswerNeutral2() {
        catVideo();
    })
}

function festivalAnswerNegative() {
    addMessage('Ich bin doch keine Dramaqueen! Aber wenn ich meinem Kind scheinbar nicht mehr wichtig bin....', 'server');
    showWriting(wait, function festivalAnswerNegative() {
        catVideo();
    })
}

// catvideo

function catVideo() {
    var buttonArray = [new Button('Ach, die mit den süssen Katzen? Ich liebe die!', 1, showWriting.bind(null, wait, catVideoAnswerNice)),
        new Button('Du weißt doch, dass ich die blöde finde.', -1, showWriting.bind(null, wait, catVideoAnswerNegative)),
        new Button('Ich vergesse manchmal, zu Antworten. Sorry!', 0, showWriting.bind(null, wait, catVideoAnswerNeutral))];
    setButtons(buttonArray);
    addMessage('Du antwortest auch nie auf meine Videos.', 'server');
}

function catVideoAnswerNice() {
    addMessage('Nicht wahr??', 'server');
    showWriting(wait, function catVideoAnswerNice() {
        sendCatVideo();
    })
}

function catVideoAnswerNegative() {
    addMessage('Die sind doch super!', 'server');
    showWriting(wait, function catVideoAnswerNegative() {
        sendCatVideo();
    })
}

function catVideoAnswerNeutral() {
    addMessage('Jetzt bist du ja online.', 'server');
    showWriting(wait, function catVideoAnswerNeutral() {
        sendCatVideo();
    })
}

function sendCatVideo() {
    var buttonArray = [new Button('Die ist wirklich zuckersüss.', 1, showWriting.bind(null, wait, sendCatVideoAnswerNice)),
        new Button('Ugh. Unnötig.', -1, showWriting.bind(null, wait, sendCatVideoAnswerNegative)),
        new Button('Haha, jaja.', 0, showWriting.bind(null, wait, sendCatVideoAnswerNeutral))];
    
    addMessage('Schau mal<br><br><div class="aspect-ratio"><iframe src="https://giphy.com/embed/3oriO0OEd9QIDdllqo" width="480" height="477" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>', 'server');
    showWriting(wait, function sendCatVideo() {
        addMessage('Die ist doch megasüss!', 'server');
        setButtons(buttonArray);
    })
}


function sendCatVideoAnswerNice() {
    addMessage('Sag ich ja immer :)', 'server');
    showWriting(wait, function sendCatVideoAnswerNice() {
        festivalAbout()
    })
}

function sendCatVideoAnswerNeutral() {
    addMessage('Was jaja? Katzen sind super.', 'server');
    showWriting(wait, function sendCatVideoAnswerNeutral() {
        festivalAbout()
    })
}

function sendCatVideoAnswerNegative() {
    addMessage('Du bist so herzlos.', 'server');
    showWriting(wait, function sendCatVideoAnswerNegative() {
        festivalAbout()
    })
}


// Festival what? Festival ONE

function festivalAbout() {
    var buttonArray = [new Button('Es ist ein Musik-Festival. Ich kann da ganz viel lernen über Popkultur und Soziale Formen..', 1, showWriting.bind(null, wait, festivalAboutNice)),
        new Button('Tu doch nicht so. Du weißt, was ein Festival ist.', -1, showWriting.bind(null, wait, festivalAboutNegative)),
        new Button('Es kommen supercoole Bands, und alle meine Freunde gehen hin!', 0, showWriting.bind(null, wait, festivalAboutNeutral))];
    setButtons(buttonArray);
    addMessage('Also, worum geht es denn bei diesem Festival?', 'server');
}


function festivalAboutNice() {
    addMessage('Hmm.. Klingt gar nicht so schlecht :)', 'server');
    showWriting(wait, function festivalAboutNice() {
        festivalWhen()
    })
}

function festivalAboutNeutral() {
    var buttonArray = [new Button('Mami..', 0, showWriting.bind(null, wait, festivalAboutNeutral2))]
    addMessage('Wenn alle deine Freunde aus dem Fenster springen, tust du das auch?', 'server');
    setButtons(buttonArray)
}

function festivalAboutNeutral2() {
    addMessage('Kein "Mami..."! Du weisst doch, dass ich recht habe.', 'server');
    showWriting(wait, function festivalAboutNeutral2() {
        festivalWhen()
    })
}


function festivalAboutNegative() {
    addMessage('Wow, bist du heute mit dem falschen Fuss aufgestanden?', 'server');
    showWriting(wait, function festivalAboutNegative() {
        festivalNegativeAnswer()
    })
}


function festivalNegativeAnswer() {
    var buttonArray = [new Button('Sorry :( Hatte einen strengen Tag.', 1, showWriting.bind(null, wait, festivalAboutAnswerNice)),
        new Button('🙄', -1, showWriting.bind(null, wait, festivalAboutAnswerNegative))];
    setButtons(buttonArray);
    addMessage('Das finde ich nicht nett von dir :(', 'server');
}

function festivalAboutAnswerNice() {
    addMessage('Schon ok, das verstehe ich.', 'server');
    showWriting(wait, function festivalAboutAnswerNice() {
        festivalWhen()
    })
}

function festivalAboutAnswerNegative() {
    addMessage(':(', 'server');
    showWriting(wait, function festivalAboutAnswerNegative() {
        festivalWhen()
    })
}


// Wann ist denn das Festival? Festival TWO

function festivalWhen() {
    var buttonArray = [new Button('Mitte Juli', 1, showWriting.bind(null, wait, festivalWhenNice)),
        new Button('Kann dir doch egal sein.', -1, showWriting.bind(null, wait, festivalWhenNegative))]
    setButtons(buttonArray);
    addMessage('Wann ist denn dieses Festival?', 'server');
    
}


function festivalWhenNice() {
    addMessage('Aber dann ist doch Tante Esthers Geburtstag!', 'server');
    showWriting(wait, function festivalWhenNice() {
        birthdayAttend()
    })
}

function festivalWhenNegative() {
    var buttonArray = [new Button('ok, ok. Es ist im Juli', 0, showWriting.bind(null, wait, festivalWhenNegative2))]
    addMessage('Warum bist du so frech zu mir? Du willst schliesslich etwas von mir..', 'server');
    setButtons(buttonArray)
    
}

function festivalWhenNegative2() {
    var buttonArray = [new Button('Mitte', 0, showWriting.bind(null, wait, festivalWhenNice))]
    addMessage('Wann im Juli? Lass dir doch nicht alles aus der Nase ziehen.', 'server');
    setButtons(buttonArray)
    
}


// Birthday
function birthdayAttend() {
	var buttonArray = [new Button('Na klar! Ich freue mich bereits auf das Grillfest :)', 1, showWriting.bind(null, wait, birthdayAttendNice)),
						new Button('Ich bin noch nicht ganz sicher..', 0, showWriting.bind(null, wait, birthdayAttendNeutral)),
						new Button('Warum sollte ich? Die mochte ich eh nie.', -1, showWriting.bind(null, wait, birthdayAttendNegative))]
	setButtons(buttonArray);
    addMessage('Da kommst du doch, oder?', 'server');
}


function birthdayAttendNice() {
    addMessage('Und ich freue mich so auf dich!', 'server');
    showWriting(wait, function birthdayAttendNice() {
    	addMessage('Ach ja! Ich wollte dich noch fragen..', 'server');
    	showWriting(wait, function birthdayAttendNice() {
        	birthdayKitchenAttend()
        })
    })
    
}

function birthdayAttendNeutral() {
    addMessage('Ich würde mich so freuen, wenn du kommen würdest!', 'server');
    showWriting(wait, function birthdayAttendNeutral() {
    	addMessage('Es gibt wieder ein Grillfest, und...', 'server');
    	showWriting(wait, function birthdayAttendNeutral() {
        	birthdayKitchenAttend()
        })
    })
    
}

function birthdayAttendNegative() {
    addMessage('Jetzt tu doch nicht so!', 'server');
    showWriting(wait, function birthdayAttendNegative() {
    	addMessage('Wir organisieren wie jedes Jahr ein Grillfest', 'server');
    	showWriting(wait, function birthdayAttendNegative() {
        	birthdayKitchenAttend()
        })
    })
    
}





/// Kitchen Help

function birthdayKitchenAttend() {
	var buttonArray = [new Button('Ich helfe gerne!', 1, showWriting.bind(null, wait, birthdayKitchenAttendNice)),
						new Button('Hmm.. Mal schauen, ob ich Zeit habe.', 0, showWriting.bind(null, wait, birthdayKitchenAttendNeutral)),
						new Button('Wenns UNBEDINGT sein muss.', -1, showWriting.bind(null, wait, birthdayKitchenAttendNegative))]
	setButtons(buttonArray);
    addMessage('Ich bräuchte noch Hilfe in der Küche...', 'server');
}




function birthdayKitchenAttendNice() {
    addMessage('Danke dir vielmals!', 'server');
    showWriting(wait, function birthdayKitchenAttendNice() {
    	addMessage('💐', 'server');
    	festivalBother()
    })
    
}

function birthdayKitchenAttendNeutral() {
    addMessage('Das wäre so toll!', 'server');
    festivalBother()
    
}

function birthdayKitchenAttendNegative() {
    addMessage('Es wäre schön, wenn du etwas mehr zeigen würdest, dass dir etwas an deiner Familie liegt.', 'server');
    showWriting(wait, function birthdayKitchenAttendNegative() {
    	addMessage('Aber es liegt an dir...', 'server');
        festivalBother()
    })
    
}



// Festival BOTHER THE MOTHER


function festivalBother() {
	var buttonArray = [new Button('Also, wegen diesem Festival...', 0, showWriting.bind(null, wait, festivalBotherNice)),
						new Button('Was ist jetzt mit dem Geld fürs Festival?', -1, showWriting.bind(null, wait, festivalBotherNegative))]
	setButtons(buttonArray);
}


function festivalBotherNice() {
    addMessage('Ach ja...', 'server');
    cashMoney()
}

function festivalBotherNegative() {
	var buttonArray = [new Button('Das stimmt doch jetzt nicht so...', 0,  festivalBotherNegative)]
    addMessage('Dir gehts auch immer nur um das eine!', 'server');
    showWriting(wait, function festivalBotherNegative() {
    	addMessage('Ich habe das Gefühl, du schätzt mich als Mutter nicht', 'server');
        showWriting(wait, function festivalBotherNegative() {
    		addMessage('Nur als Brieftasche...', 'server');
        	setButtons(buttonArray)
    	})
    })
    
}



// cash Money DOLLABILLZ


function cashMoney() {
	var buttonArray = [new Button('250.-, fürs Ticket und Zugbillet', 1, showWriting.bind(null, wait, cashMoneyNice)),
	new Button('So viel wie möglich, ich will ja auch leben..', -1, showWriting.bind(null, wait, cashMoneyNegative))]
   
    showWriting(wait, function festivalBotherNegative() {
    	addMessage('Wie viel brauchst du denn?', 'server');
    	setButtons(buttonArray);
  	});
   
}


function cashMoneyNice() {
	var buttonArray = [new Button('Wow, danke dir! :)', 0, decision)]
   	addMessage('Hmm.. Aber leben musst du dort ja auch noch, oder?', 'server');
    showWriting(wait, function cashMoneyNice() {
    	addMessage('Dann wären es sicher 350, mit Essen und so.', 'server');
    	setButtons(buttonArray);
  	});
   
}


function cashMoneyNegative() {
	var buttonArray = [new Button('Ja, vielleicht...', 0, decision)]
   	addMessage('Dann beginne doch, dein eigenes Geld zu verdienen!', 'server');
    showWriting(wait, function cashMoneyNegative() {
    	addMessage('Ich denke 300.- müssten reichen, oder?', 'server');
    	setButtons(buttonArray);
  	});
   
}

// ENDINGS


function decision() {
	if(impact > 2){
		endGood()
	} else if(impact < 0){
		endBad()
	} else {
		endNeutral()
	}
}


function endGood() {
	showWriting(wait, function endGood() {
	    addMessage('Also... ', 'server');
	    showWriting(wait, function endGood() {
	        addMessage('Du machst so viel für mich in letzter Zeit, ich finde, du hast dir ein kleines "Goodie" verdient :)', 'server');
	        showWriting(wait, function endGood() {
	            addMessage('Ich wünsche dir ganz viel Spass am Festival mein Schatz!', 'server');
				showWriting(wait, function endGood() {
					showWin();
				})
	        })
	    })
	})
}

function showWin() {
    document.querySelector('.winscreen').style.display = 'flex';
    document.querySelector('#canvas').style.display = 'block';
}

function endNeutral() {
    showWriting(wait, function endNeutral() {
	    addMessage('Also... ', 'server');
	    showWriting(wait, function endNeutral() {
	        addMessage('Von mir aus kannst du das Geld haben.', 'server');
	        showWriting(wait, function endNeutral() {
	            addMessage('Aber du wirst dafür arbeiten müssen!', 'server');
	            showWriting(wait, function endNeutral() {
	            	addMessage('Du kommst nächste Woche jeden Abend vorbei und hilfst mir im Garten. Dann haben wir einen Deal.', 'server');
	            	showWriting(wait, function endNeutral() {
                        showWin();
					})
	        	})
	        })
	    })
	})
}

function endBad() {
    showWriting(wait, function endBad() {
	    addMessage('Also... ', 'server');
	    showWriting(wait, function endBad() {
	        addMessage('Du warst so unhöflich mit mir in letzter Zeit.', 'server');
	        showWriting(wait, function endBad() {
	            addMessage('Von mir bekommst du keinen Rappen! Sieh doch selbst zu, wie du zu deinem Geld kommst.', 'server');
	        })
	    })
	})
}
