var socketInfo = {};

// подключение
socket = new WebSocket('ws://localhost:8000/');		
socket.onopen = function (e){
	socketInfo.method = "connect";
	socket.send(JSON.stringify(socketInfo));	
	console.log('Соединение установлено с ws://localhost:8000');		
}

// если соедиение прервано
socket.onclose = function (e){
	console.log('Соединение прервано!');
}

// получение сообщения
socket.onmessage = function (e){
	if (typeof e.data === "string"){
		//var request = JSON.parse(e.data);
		
		console.log(request);
		
		// если функция, то вызываем соответствующую
		//if (request.function)
		//	Actions[request.function](request.args);
		
	};	
}

// функции
var Actions = {
		myId: function(id){
			localStorage.setItem("myId", id);
		},				
		log: function(str){
			console.log(str);
		},
         
 }			

// отправка на сервер (метод и аргументы) 
function send_server(method, args){
		socketInfo.method = method;
		socketInfo.args = args;
		socket.send(JSON.stringify(socketInfo));			
}	
		 