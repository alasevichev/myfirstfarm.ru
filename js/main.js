
$(document).ready(function () {
	$('#money').text(1000);
});
	
//Создаем instance игры на весь экран с использованием Canvas

var Game = new Phaser.Game(800, 600, Phaser.CANVAS, document.getElementById('game'));
	
	//Включаем поддержку RequestAnimationFrame
   // Game.raf = new Phaser.RequestAnimationFrame(Game);
   // Game.antialias = false;
   // Game.raf.start();


// рисует прямоугольник, где gr - объект Graphics
function drawRect(gr, x, y, color) {
	
	gr.lineStyle(1, color, 1);
 /*   gr.moveTo(0, 0);  
    gr.lineTo(32, 0);
	gr.lineTo(32, 32);
	gr.lineTo(0, 32);
	gr.lineTo(0, 0);*/
	gr.drawRect(x,y,32,32);
} 
   
/*   
   //проект будет включать в себя лишь одно игровое состояние
var GameState = {
	//инициализация параметров игры
	init: function() {
	 
	
	},

	//загрузка игровых ресурсов до запуска игры
	preload: function() {    
		this.load.image('palm', 'assets/palm.png');
		this.load.spritesheet('grass', 'assets/grass.png', 32, 32);
	},

	//исполняется один раз после того, как все ресурсы будут загружены
	create: function() {
		for (x=0; x<20; x++)
			for (y=0; y<20; y++)
				this.background = this.game.add.sprite(x*32, y*32, 'grass', 6);
	},

	//эта функция исполняется несколько раз в секунду
	update: function() {    
	} 

};	
  */ 
var GameState = new Phaser.State();
var map = new CMap(Game);
var player = new CPlayer;

var graphics; 


var selected=0;

GameState.preload = function() {
	Game.load.image('palm', 'assets/palm.png');
	Game.load.spritesheet('grass', 'assets/grass.png', 32, 32);	
	
	/* СТАРТОВЫЕ ПАРМЕТРЫ ИГРОКА */
	player.setMoney(1000);
	
	
}
	
GameState.create = function() {
	/*for (x=0; x<20; x++)
		for (y=0; y<20; y++)
			Game.background = Game.add.sprite(x*32, y*32, 'grass', 6);*/
	map.renderMap();
	// создаем объект графики для рисования
	graphics = Game.add.graphics(0, 0);
	
	drawRect(graphics, 0, 0);
	
	Game.input.onDown.add(pressMouse, Game);
}

GameState.render = function() {
	//map.renderMap();
}	


// функци
function pressMouse(pointer) {
	var x = Math.floor(pointer.x/32);
	var y = Math.floor(pointer.y/32);
	send_server('set_item', {x:x, y:y, item:'100001'});
}


GameState.update = function() {
	graphics.clear();
	if(Game.input.activePointer.isDown) { 
		 //console.log("Pointer down in", Math.floor(Game.input.x/32), "x",Math.floor(Game.input.y/32));
		 var x = Math.floor(Game.input.x/32)*32;
		 var y = Math.floor(Game.input.y/32)*32;
		 
		 //send_server('set_item', [x, y, '100001']);
		 //send_server('set_item', {x:x, y:y, item:'100001'});
		 
		 if (selected>0) {
			map.map[Math.floor(Game.input.x/32)][Math.floor(Game.input.y/32)] = 6 - selected;
			Game.background = Game.add.sprite(Math.floor(Game.input.x/32)*32, Math.floor(Game.input.y/32)*32, 'grass', 6-selected);
		 }
	}

	if (Game.input.activePointer.withinGame) {
		if (selected>0)drawRect(graphics, Math.floor(Game.input.x/32)*32, Math.floor(Game.input.y/32)*32, 0x00ff00);	
			else drawRect(graphics, Math.floor(Game.input.x/32)*32, Math.floor(Game.input.y/32)*32, 0xffffff);	
	}	

}	


Game.state.add('GameState', GameState, false);
Game.state.start('GameState');

