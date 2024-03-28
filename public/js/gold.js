// var goldIm = new Image();
// goldIm.src="images/gold.png";
// var rockIm = new Image();
// rockIm.src="images/rock.png";
// var diamondIM = new Image();
// diamondIM.src="images/diamond.png";

var answerA = new Image();
answerA.src="images/JellyFish.png";
var answerB = new Image();
answerB.src="images/octopus.png";
var answerC = new Image();
answerC.src="images/SwordFish.png";
var answerD = new Image();
answerD.src="images/Tutle.png";
var answerE = new Image();
answerE.src="images/FishHurt.png";
var answerF = new Image();
answerF.src="images/Eel.png";
var answerG = new Image();
answerG.src="images/octopus2.png";


class gold {
    constructor(game, type, score) {
        this.game = game;
        this.init(type, score);
    }

    init(type, score) {
        this.type = type;
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
        this.alive = true;
        this.score = score;
        this.update();
    }

    update() {
        switch (this.type) {
            case 0:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerA;
                break;
            case 1:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerB;
                break;
            case 2:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerC;
                break;
            case 3:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerD;
                break;
            case 4:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerE;
                break;
            case 5:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerF;
                break;
            case 6:
                this.speed = this.game.getWidth() / 5;
                this.width = this.game.getWidth() * 3;
                this.height = this.game.getWidth() * 1.5;
                this.IM = answerG;
                break;
        }
    }

    randomXY() {
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
    }

    draw() {
        // this.game.rotate(0);
        this.game.context.drawImage(this.IM, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    size() {
        return Math.sqrt(this.width * this.width + this.height * this.height) / 2;
    }
}