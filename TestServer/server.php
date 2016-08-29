#!/usr/bin/env php
<?php

if (empty($argv[1]) || !in_array($argv[1], array('start', 'stop', 'restart'))) {
    die("need parameter (start|stop|restart)\r\n");
}

$config = array(
    'class' => 'GameDaemonHandler',
    'pid' => '/tmp/websocket_game_myfarm.pid',
    'websocket' => 'tcp://127.0.0.1:8000',
);



require_once __DIR__ . '\core\Server.php';
$WebsocketServer = new Server($config);

call_user_func(array($WebsocketServer, $argv[1]));