
//Создаем instance игры на весь экран с использованием Canvas

var Game = new Phaser.Game(800, 600, Phaser.CANVAS, document.getElementById('game'));
	
	//Включаем поддержку RequestAnimationFrame
   // Game.raf = new Phaser.RequestAnimationFrame(Game);
   // Game.antialias = false;
   // Game.raf.start();


// рисует прямоугольник, где gr - объект Graphics
function drawRect(gr, x, y) {
	
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
var graphics; 

GameState.preload = function() {
	Game.load.image('palm', 'assets/palm.png');
	Game.load.spritesheet('grass', 'assets/grass.png', 32, 32);	
	
}
	
GameState.create = function() {
	for (x=0; x<20; x++)
		for (y=0; y<20; y++)
			Game.background = Game.add.sprite(x*32, y*32, 'grass', 6);
	// создаем объект графики для рисования
	graphics = Game.add.graphics(0, 0);
	
	drawRect(graphics, 0, 0);
	
}

GameState.render = function() {

}	

GameState.update = function() {
	graphics.clear();
	
	if(Game.input.activePointer.isDown) { 
	}
}	


Game.state.add('GameState', GameState, false);
Game.state.start('GameState');

