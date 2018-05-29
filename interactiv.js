var impact = 0;

function setButtons(arr){
    removeButtons();
    arr.forEach(function(item){
        let button = document.createElement('button');
        button.classList.add('chatbutton');
        button.innerText = item.text;
        button.addEventListener('click',function () {
            addMessage(item.text,'client');
            impact += item.impact;
        });
        button.addEventListener('click',item.callback);
        document.querySelector('.buttons').appendChild(button);
    })
}

function removeButtons(){
    document.querySelector('.buttons').innerHTML = '';
}

function addMessage(text,source){
    let message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message-' + source);
    message.innerText = text;
    document.querySelector('.messages').appendChild(message);
    scrollToBottom();
}

function showTyping(duration,callback){
    document.querySelector('.typing').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.typing').style.display = 'none';
        callback();
    },duration);
}

function showWriting(duration,callback){
    document.querySelector('.writing').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.writing').style.visibility = 'hidden';
        callback();
    },duration);
}

function scrollToBottom(){
    let element = document.querySelector('.messages');
    element.scrollTop = element.scrollHeight - element.clientHeight;
}