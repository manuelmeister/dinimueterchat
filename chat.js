function init(){
    let buttonArray = [new Button('test',0,testing),new Button('blub',0)];
    setButtons(buttonArray);
    addMessage('blub','server');
}

function testing(){
    let buttonArray = [new Button('figdi',0,showWriting.bind(null,2000,testing)),new Button('what',0,testing)];
    setButtons(buttonArray);
    addMessage('blub','server');
}