var CMap = function(game) {
    this.game = game;
    
	this.map = [];
	var n = 20, m = 20;
	for (var i = 0; i < m; i++){
		this.map[i] = [];
		for (var j = 0; j < n; j++){
			this.map[i][j] = 0;
	}}
	
	this.renderMap = function () {
		for (x=0; x<20; x++)
			for (y=0; y<20; y++)
				this.game.background = this.game.add.sprite(x*32, y*32, 'grass', 6-this.map[x][y]);
	}
	
}

var CPlayer = function() {
	this.money = 0; // деньги игрока
	
	this.setMoney = function (money) {
		this.money = money;	
		console.log(this.money); 		
	}
	
	this.getMoney = function () {
		return this.money;
	}
	
	this.toPay = function (m) {
		if (this.money - m >= 0) this.money-=m; 
			else return false;
			
		return this.money;
	}
}