let impact = 0;

function setButtons(arr){
    removeButtons();
    setTimeout(function(){
        arr.forEach(function(item){
            let button = document.createElement('button');
            button.classList.add('chatbutton');
            button.innerHTML = item.text;
            button.addEventListener('click',function () {
                addMessage(item.text,'client');
                impact += item.impact;
                removeButtons();
            });
            button.addEventListener('click',item.callback);
            document.querySelector('.buttons').appendChild(button);
        })
    },1000);
}

function removeButtons(){
    document.querySelector('.buttons').innerHTML = '';
	scrollToBottom();
}

function addMessage(text,source = 'server'){
    let message = document.createElement('li');
    message.setAttribute('itemscope','');
    message.setAttribute('itemprop','hasPart');
    message.setAttribute('itemtype','http://schema.org/Message');
    message.classList.add('message');
    message.classList.add('message-' + source);
    message.innerHTML = text;
    document.querySelector('.messages').appendChild(message);
    scrollToBottom();
}

function showTyping(duration,callback){
    document.querySelector('.writing').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.writing').style.visibility = 'hidden';
        callback();
    },duration);
}

function showWriting(duration,callback){
    document.querySelector('.typing-message').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.typing-message').style.display = 'none';
        callback();
    },duration);
}

function scrollToBottom(){
    let element = document.querySelector('.messages');
    element.scrollTop = element.scrollHeight - element.clientHeight;
}