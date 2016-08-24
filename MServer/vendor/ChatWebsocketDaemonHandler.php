<?php


class ChatWebsocketDaemonHandler extends Daemon
{
    protected function onOpen($connectionId, $info) {
        //call when new client connect to server
    }

    protected function onClose($connectionId) {
        //call when existing client close connection
    }

    protected function onMessage($connectionId, $data, $type) {
        //call when new message from existing client

        $message = "user #{$connectionId}: $data";

        //send message to all client
        foreach ($this->clients as $clientId => $client) {
            $this->sendToClient($clientId, $message);
        }
    }
}