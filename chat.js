let wait = 1500;


function init() {
    let buttonArray = [new Button('Hoi Mami', 0, showWriting.bind(null, wait, mood)),
        new Button('Hallo Mueter', 0, showWriting.bind(null, wait, mood)),
        new Button('Sali Mami', 0, showWriting.bind(null, wait, mood)),
        new Button('catVideo', 0, festivalAbout)
    ];
    setButtons(buttonArray);
}

/// Wie geht es dir? Moodcheck

function mood() {
    let buttonArray = [new Button('Ganz gut! :)', 0, showWriting.bind(null, wait, moodHappy)),
        new Button('Nicht so gut :(', 0, showWriting.bind(null, wait, moodUnhappy)),
        new Button('Solala', 0, showWriting.bind(null, wait, moodSolala))];
    setButtons(buttonArray);
    addMessage('Hallo du! Wie geht es dir? :)', 'server');
}


function moodHappy() {
    let buttonArray = [new Button(':)', 0, festivalQuestion)];
    setButtons(buttonArray);
    addMessage('Das freut mich aber!', 'server');
}

function moodUnhappy() {
    let buttonArray = [new Button('Nein, das ist es nicht...', 0, festivalQuestion)];
    addMessage('Ojeh :((', 'server');
    showWriting(wait, function () {
        addMessage('Was ist los??', 'server');
        showWriting(wait, function () {
            setButtons(buttonArray);
            addMessage('Bist du krank??', 'server');
        })
    })
}

function moodSolala() {
    let buttonArray = [new Button('Ganz gut! :)', 0, showWriting.bind(null, wait, moodHappy)),
        new Button('Nicht so gut :(', 0, showWriting.bind(null, wait, moodUnhappy))];
    setButtons(buttonArray);
    addMessage('Solala gibt’s nicht. Sag schon!', 'server');
}


// Festival frage - mamiii derfi?

function festivalQuestion() {
    let buttonArray = [new Button('Ich hab dir doch von diesem Festival erzählt...', 0, showWriting.bind(null, wait, festivalAnswer))];
    setButtons(buttonArray);
}


function festivalAnswer() {
    let buttonArray = [new Button('Tut mir leid.. Die Zeit vergeht viel zu schnell!', 1, showWriting.bind(null, wait, festivalAnswerNice)),
        new Button('Ich schreibe dir auch sonst immer!', 0, festivalAnswerNeutral),
        new Button('Jetzt spiel nicht die Dramaqueen.', -1, showWriting.bind(null, wait, festivalAnswerNegative))];
    
    
    addMessage('Achso, darum geht es also.', 'server');
    showWriting(wait, function () {
        addMessage('Ist ja klar, sonst schreibst du mir ja nie', 'server');
        showWriting(wait, function () {
            setButtons(buttonArray);
            addMessage('Bei mir wächst das Geld auch nicht auf den Bäumen!', 'server');
        })
    })
}


function festivalAnswerNice() {
    addMessage('Ich verstehe dich ja.. Aber es macht mich trotzdem traurig :(', 'server');
    showWriting(wait, function () {
        catVideo();
    })
}

function festivalAnswerNeutral() {
    let buttonArray = [new Button('An deinem Geburtstag zum Beispiel, weißt du nicht mehr?', 0, showWriting.bind(null, wait, festivalAnswerNeutral2))];
    setButtons(buttonArray);
}

function festivalAnswerNeutral2() {
    addMessage('Das war vor 3 Monaten', 'server');
    showWriting(wait, function () {
        catVideo();
    })
}

function festivalAnswerNegative() {
    addMessage('Ich bin doch keine Dramaqueen! Aber wenn ich meinem Kind scheinbar nicht mehr wichtig bin....', 'server');
    showWriting(wait, function () {
        catVideo();
    })
}

// catvideo

function catVideo() {
    let buttonArray = [new Button('Ach, die mit den süssen Katzen? Ich liebe die!', 1, showWriting.bind(null, wait, catVideoAnswerNice)),
        new Button('Du weißt doch, dass ich die blöde finde.', -1, showWriting.bind(null, wait, catVideoAnswerNegative)),
        new Button('Ich vergesse manchmal, zu Antworten. Sorry!', 0, showWriting.bind(null, wait, catVideoAnswerNeutral))];
    setButtons(buttonArray);
    addMessage('Du antwortest auch nie auf meine Videos.', 'server');
}

function catVideoAnswerNice() {
    addMessage('Nicht wahr??', 'server');
    showWriting(wait, function () {
        sendCatVideo();
    })
}

function catVideoAnswerNegative() {
    addMessage('Die sind doch super!', 'server');
    showWriting(wait, function () {
        sendCatVideo();
    })
}

function catVideoAnswerNeutral() {
    addMessage('Jetzt bist du ja online.', 'server');
    showWriting(wait, function () {
        sendCatVideo();
    })
}

function sendCatVideo() {
    let buttonArray = [new Button('Die ist wirklich zuckersüss.', 1, showWriting.bind(null, wait, sendCatVideoAnswerNice)),
        new Button('Ugh. Unnötig.', -1, showWriting.bind(null, wait, sendCatVideoAnswerNegative)),
        new Button('Haha, jaja.', 0, showWriting.bind(null, wait, sendCatVideoAnswerNeutral))];
    
    addMessage('Schau mal<br><br><div class="aspect-ratio"><iframe src="https://giphy.com/embed/3oriO0OEd9QIDdllqo" width="480" height="477" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>', 'server');
    showWriting(wait, function () {
        addMessage('Die ist doch megasüss!', 'server');
        setButtons(buttonArray);
    })
}


function sendCatVideoAnswerNice() {
    addMessage('Sag ich ja immer :)', 'server');
    showWriting(wait, function () {
        festivalAbout()
    })
}

function sendCatVideoAnswerNeutral() {
    addMessage('Was jaja? Katzen sind super.', 'server');
    showWriting(wait, function () {
        festivalAbout()
    })
}

function sendCatVideoAnswerNegative() {
    addMessage('Du bist so herzlos.', 'server');
    showWriting(wait, function () {
        festivalAbout()
    })
}


// Festival what? Festival ONE

function festivalAbout() {
    let buttonArray = [new Button('Es ist ein Musik-Festival. Ich kann da ganz viel lernen über Popkultur und Soziale Formen..', 1, showWriting.bind(null, wait, festivalAboutNice)),
        new Button('Tu doch nicht so. Du weißt, was ein Festival ist.', -1, showWriting.bind(null, wait, festivalAboutNegative)),
        new Button('Es kommen supercoole Bands, und alle meine Freunde gehen hin!', 0, showWriting.bind(null, wait, festivalAboutNeutral))];
    setButtons(buttonArray);
    addMessage('Also, worum geht es denn bei diesem Festival?', 'server');
}


function festivalAboutNice() {
    addMessage('Hmm.. Klingt gar nicht so schlecht :)', 'server');
    showWriting(wait, function () {
        festivalWhen()
    })
}

function festivalAboutNeutral() {
    let buttonArray = [new Button('Mami..', 0, showWriting.bind(null, wait, festivalAboutNeutral2))]
    addMessage('Wenn alle deine Freunde aus dem Fenster springen, tust du das auch?', 'server');
    setButtons(buttonArray)
}

function festivalAboutNeutral2() {
    addMessage('Kein "Mami..."! Du weisst doch, dass ich recht habe.', 'server');
    showWriting(wait, function () {
        festivalWhen()
    })
}


function festivalAboutNegative() {
    addMessage('Wow, bist du heute mit dem falschen Fuss aufgestanden?', 'server');
    showWriting(wait, function () {
        festivalNegativeAnswer()
    })
}


function festivalNegativeAnswer() {
    let buttonArray = [new Button('Sorry :( Hatte einen strengen Tag.', 1, showWriting.bind(null, wait, festivalAboutAnswerNice)),
        new Button('🙄', -1, showWriting.bind(null, wait, festivalAboutAnswerNegative))];
    setButtons(buttonArray);
    addMessage('Das finde ich nicht nett von dir :(', 'server');
}

function festivalAboutAnswerNice() {
    addMessage('Schon ok, das verstehe ich.', 'server');
    showWriting(wait, function () {
        festivalWhen()
    })
}

function festivalAboutAnswerNegative() {
    addMessage(':(', 'server');
    showWriting(wait, function () {
        festivalWhen()
    })
}


// Wann ist denn das Festival? Festival TWO

function festivalWhen() {
    let buttonArray = [new Button('Mitte Juli', 1, showWriting.bind(null, wait, festivalWhenNice)),
        new Button('Kann dir doch egal sein.', -1, showWriting.bind(null, wait, festivalWhenNegative))]
    setButtons(buttonArray);
    addMessage('Wann ist denn dieses Festival?', 'server');
    
}


function festivalWhenNice() {
    addMessage('Aber dann ist doch Tante Esthers Geburtstag!'+impact, 'server');
    showWriting(wait, function () {
        birthdayAttend()
    })
}

function festivalWhenNegative() {
    let buttonArray = [new Button('ok, ok. Es ist im Juli', 0, showWriting.bind(null, wait, festivalWhenNegative2))]
    addMessage('Warum bist du so frech zu mir? Du willst schliesslich etwas von mir..', 'server');
    setButtons(buttonArray)
    
}

function festivalWhenNegative2() {
    let buttonArray = [new Button('Mitte', 0, showWriting.bind(null, wait, festivalWhenNice))]
    addMessage('Wann im Juli? Lass dir doch nicht alles aus der Nase ziehen.', 'server');
    setButtons(buttonArray)
    
}


// Birthday
function birthdayAttend() {
	let buttonArray = [new Button('Na klar! Ich freue mich bereits auf das Grillfest :)', 1, showWriting.bind(null, wait, birthdayAttendNice)),
						new Button('Ich bin noch nicht ganz sicher..', 0, showWriting.bind(null, wait, birthdayAttendNeutral)),
						new Button('Warum sollte ich? Die mochte ich eh nie.', -1, showWriting.bind(null, wait, birthdayAttendNegative))]
	setButtons();
    addMessage('Da kommst du doch, oder?', 'server');
}

function birthdayAttendNice() {
    addMessage('Aber dann ist doch Tante Esthers Geburtstag!', 'server');
    showWriting(wait, function () {
        festivalWhen()
    })
}

function birthdayAttendNeutral() {
    let buttonArray = [new Button('ok, ok. Es ist im Juli', 0, showWriting.bind(null, wait, festivalWhenNegative2))]
    addMessage('Warum bist du so frech zu mir? Du willst schliesslich etwas von mir..', 'server');
    setButtons(buttonArray)
    
}

function birthdayAttendNegative() {
    let buttonArray = [new Button('Mitte', 0, showWriting.bind(null, wait, festivalAboutNeutral2))]
    addMessage('Wann im Juli? Lass dir doch nicht alles aus der Nase ziehen.', 'server');
    setButtons(buttonArray)
    
}







// ENDINGS


function endGood() {
    addMessage('Also... ', 'server');
    showWriting(wait, function () {
        addMessage('Die ist doch megasüss!', 'server');
        showWriting(wait, function () {
            addMessage('Die ist doch megasüss!', 'server');
        })
    })
}

function endNeutral() {
    addMessage('Also... ', 'server');
    showWriting(wait, function () {
        addMessage('Die ist doch megasüss!', 'server');
        showWriting(wait, function () {
            addMessage('Die ist doch megasüss!', 'server');
        })
    })
}

function endBad() {
    addMessage('Also... ', 'server');
    showWriting(wait, function () {
        addMessage('Die ist doch megasüss!', 'server');
        showWriting(wait, function () {
            addMessage('Die ist doch megasüss!', 'server');
        })
    })
}
