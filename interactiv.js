let impact = 0;

let idleTimeLeft = 0;

let onlineCheck = setInterval(function () {
	if (idleTimeLeft > 5) {
		idleTimeLeft -= 5;
	} else {
		idleTimeLeft = 0;
		let update = new Date();
		let hours = update.getHours();
		if (hours < 10) {
			hours = '0' + hours;
		}
		let minutes = update.getMinutes();
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		document.querySelector('.lastonline').innerText = 'Zuletzt online: ' + hours + ':' + minutes;
	}
}, 5000);

function initialClick(duration, callback){
	scrollToBottom();
	document.querySelector('.welcome').style.display = 'none';
	showWriting(duration, callback);
}

function setButtons(arr, wait = 500) {
	removeButtons();
	setTimeout(function () {
		arr.forEach(function (item) {
			let button = document.createElement('button');
			button.classList.add('chatbutton');
			button.classList.add('button');
			button.innerHTML = item.text;
			button.addEventListener('click', function () {
				addMessage(item.text, 'client');
				impact += item.impact;
				removeButtons();
			});
			button.addEventListener('click', item.callback);
			document.querySelector('.buttons').appendChild(button);
			scrollToBottom();
		});
		document.querySelector('.buttons').style.display = 'flex';
		scrollToBottom();
	}, wait);
}

function removeButtons() {
	document.querySelector('.buttons').innerHTML = '';
	document.querySelector('.buttons').style.display = 'none';
	scrollToBottom();
}

function addMessage(text, source = 'server') {
	if (source === 'server') {
		idleTimeLeft = 20;
	}
	let message = document.createElement('li');
	message.setAttribute('itemscope', '');
	message.setAttribute('itemprop', 'hasPart');
	message.setAttribute('itemtype', 'http://schema.org/Message');
	message.classList.add('message');
	message.classList.add('message-' + source);
	message.innerHTML = text;
	document.querySelector('.messages').appendChild(message);
	scrollToBottom();
	document.querySelectorAll('iframe').forEach(function (elem) {
		elem.onload = scrollToBottom();
	});
}

function showWriting(duration, callback) {
	scrollToBottom();
	if (document.querySelector('.lastonline').innerText === 'online') {
		showTyping(duration, callback);
	} else {
		scrollToBottom();
		setTimeout(function () {
			scrollToBottom();
			document.querySelector('.lastonline').innerText = 'online';
			setTimeout(function () {
				showTyping(duration, callback);
			}, 500);
		}, 1000);
	}
}

function showTyping(duration, callback) {
	idleTimeLeft = 20;
	document.querySelector('.typing-message').style.display = 'inline-block';
	document.querySelector('.lastonline').innerText = 'schreibt…';
	setTimeout(function () {
		document.querySelector('.typing-message').style.display = 'none';
		document.querySelector('.lastonline').innerText = 'online';
		callback();
		scrollToBottom();
		document.querySelector('.topbar').href = '/about.html?m=' + callback.name + '&i=' + impact;
	}, duration);
	scrollToBottom();
}

function scrollToBottom() {
	let element = document.querySelector('.messages');
	element.scrollTop = element.scrollHeight - element.clientHeight;
}