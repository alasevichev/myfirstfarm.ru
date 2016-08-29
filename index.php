<?
use Ratchet\Resource\ConnectionInterface;
?>

<!DOCTYPE html>
<html lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
<title>Проба: Моя первая ферма</title>

<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script> 
<!-- <script src="js/phaser.min.js"></script>  -->



</head>

<body>
<div id="wrapper">
<header>
	<h1>Моя первая ферма</h1>
	<span>- пробная браузерная игра</span>
</header>

<div class="content">
	<div class="bar">
		<p class="myquote">Игра тестовая (прототип), пробная и не играбельная. Все, что можно, так это по тыкаться, ну и посоветовать что-нибудь дельное автору. :)</p>
	</div>
	<div class="leftblock">
		<p><img src="assets/money.png" width="20px" style="float:left;"/><span id="money" style="line-height:1;"></span></p>
		<p>Меню:</p>
		<div class="item" id="landing_1" style="background:url(assets/grass.png) 64px" title="цветок"></div>
	</div>
	<div id="game">
	</div>
</div>




</div>
</body>
</html>

<script src="js/phaser.min.js"></script>
<script type="text/javascript" src="js/game.js"></script> 
<script type="text/javascript" src="js/main.js"></script> 
<script type="text/javascript" src="js/network.js"></script> 

<script>
	$(document).on('click', '.item', function() {
		selected = selected==1?0:1;
		
		$(this).toggleClass('select', '');
	
	});


	$(document).ready(function () {
		
	
	
	});
</script>