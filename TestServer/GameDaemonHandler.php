<?php

require_once __DIR__ . '\Player.php'; 


class GameDaemonHandler extends Daemon 
{
	public $player;
	
	
	
    protected function onOpen($connectionId, $info) {
        //call when new client connect to server
		$this->player = new Player(1000);
	
		//$this->setPlayer($player1);
    }

    protected function onClose($connectionId) {
        //call when existing client close connection
    }

    protected function onMessage($connectionId, $data, $type) {
        //call when new message from existing client

        //$message = "user #{$connectionId}: $data";
		$json = json_decode($data);
		$method = strval($json->{'method'});
		$args = $json->{'args'};
			
			
//		$a = json_decode($data)
//		$message = $data;
		if ($method == 'set_item') {
			if ($args->item == '100001') {
				
				// 20 - цена этого цветочка:))
				$resMoney = $this->player->setPay(20);
				
				if ($resMoney)
				{
					$argsOut = array(
						'x' => $args->x,
						'y' => $args->y,
						'item' => $args->item,
						'money' => $resMoney
					); 
					$arrOut = array('function' => 'fnSetItem', 'args' => $argsOut);
					$message = json_encode($arrOut);
				} else
				{
					$message = json_encode(array('function' => 'log', 'args' => 'Недостаточно золота.'));
				}
			}
		} else {
			$message = $data;
			//$message = json_encode($connectionId);;
		}
		
        //send message to all client
        foreach ($this->clients as $clientId => $client) {
            $this->sendToClient($clientId, $message);
		   		   
        }
    }
}