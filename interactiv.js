let impact = 0;

function setButtons(arr, wait = 500){
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
			scrollToBottom();
        });
		document.querySelector('.buttons').style.display = 'flex';
		scrollToBottom();
    },wait);
}

function removeButtons(){
    document.querySelector('.buttons').innerHTML = '';
    document.querySelector('.buttons').style.display = 'none';
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
    document.querySelectorAll('iframe').forEach(function (elem) {
		elem.onload = scrollToBottom();
	});
}

function showWriting(duration,callback){
	scrollToBottom();
    document.querySelector('.typing-message').style.display = 'inline-block';
    setTimeout(function(){
        document.querySelector('.typing-message').style.display = 'none';
        callback();
        scrollToBottom();
    },duration);
	scrollToBottom();
}

function scrollToBottom(){
    let element = document.querySelector('.messages');
    element.scrollTop = element.scrollHeight - element.clientHeight;
}