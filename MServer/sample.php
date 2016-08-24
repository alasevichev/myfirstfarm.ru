#!/usr/bin/env php
<?php

if (empty($argv[1]) || !in_array($argv[1], array('start', 'stop', 'restart'))) {
    die("need parameter (start|stop|restart)\r\n");
}

$config = array(
    'class' => '..\..\ChatWebsocketDaemonHandler',
    'pid' => '/tmp/websocket_chat.pid',
    'websocket' => 'tcp://127.0.0.1:8000',
);

require_once __DIR__ . '\vendor\autoload.php';

$WebsocketServer = new morozovsk\websocket\Server($config);

call_user_func(array($WebsocketServer, $argv[1]));