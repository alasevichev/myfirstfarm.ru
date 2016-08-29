<?php
/*
	Класс: Player
	Все об игроке
*/

class Player 
{
	private $gold; 	// игровая валюта (золото) игрока
	
	function __construct($gold) 
	{
		$this->setGold($gold);
	}
	
	// установить значение золота
	public function setGold($gold)
	{
		if ($gold>0) $this->gold = $gold;
	}
	
	// получить значение золота
	public function getGold() 
	{
		return $this->gold;
	}
	
	// сделать платеж
	public function setPay($cost)
	{
		return $this->gold-$cost>=0?($this->gold -= $cost):FALSE;
	}
}




?>