<?php


function websocket_onopen($keyINsock){
	echo "\r\n";
	echo "WEBSOCKET_ONOPEN[$keyINsock]";
	echo "\r\n";
}


/*function websocket_onmessage($keyINsock, $str){
	echo "\r\n";
	echo "WEBSOCKET_ONMESSAGE[$keyINsock] $str \r\n";
	echo "\r\n";
	websock_send($keyINsock, $str); //эхо
}*/


function websocket_onmessage($keyINsock, $str){
	//global $Users;	

	$json = json_decode($str);
	$method = strval($json->{'method'});
	$args = $json->{'args'};

	if (!isset($args)) $args = $keyINsock;
	$arrOut = json_encode(array('function' => 'log', 'args' => 'say:'.$args));
	websock_send($keyINsock, $arrOut); 
	//if (!empty($method)) $Users->$method($keyINsock, $args);
}


function websocket_onclose($keyINsock){
	echo "\r\n";
	echo "WEBSOCKET_ONCLOSE[$keyINsock]";
	echo "\r\n";
}



function websocket_while(){
	global $STDIN,$sock,$SESS;
	if(!isset($STDIN)){
		$STDIN = fopen('php://stdin', 'r');
	}
	stream_set_blocking ($STDIN, TRUE );
	$STDINline = trim(fgets($STDIN));
		
	if(!empty($STDINline) && is_array($SESS) && count($SESS)>0){
		foreach($SESS as $k => $v){
			if($SESS[$k]['websock']){
				websock_send($k, $STDINline);
			}
		}
	}
	
	//echo '.';
}


