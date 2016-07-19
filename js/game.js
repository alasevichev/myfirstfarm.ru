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

