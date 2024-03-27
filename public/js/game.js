var listQuestion = []

window.initDataProp = function (parentData) {
    // get data and using
    listQuestion = parentData;
}
let game_W = 20;
let game_H = 20;
let XXX = 0, YYY = 0, Xh = 0, Yh = 0;
let MaxLeng = 0;
let speedReturn = 0
let R = 0, r = 0;
let drag = false;
let d = false;
let ok = false;
let angle = 90;
let ChAngle = -1;
let idxQuestion = 0;
let errorAnswer = 0;
let endGame = 0;
index = -1;
level = -1;
time = 60;
timeH = 0;
vlH = 0;
var bg = new Image();
bg.src = "images/background.png";
var hook = new Image();
hook.src = "images/hook.png";
var targetIM = new Image();
targetIM.src = "images/target.png";
var dolarIM = new Image();
dolarIM.src = "images/dolar.png";
var levelIM = new Image();
levelIM.src = "images/level.png";
var clockIM = new Image();
clockIM.src = "images/clock.png";


let N = -10;

class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.score = 0;
        this.init();
    }

    init() {
        setTimeout(() => {
            this.canvas = document.createElement("canvas");
            this.context = this.canvas.getContext("2d");
            document.body.appendChild(this.canvas);
            this.canvas.width = document.documentElement.clientWidth;
            this.canvas.height = document.documentElement.clientHeight;
            game_W = this.canvas.width;
            game_H = this.canvas.height;
            this.render();
            this.newGold();
            this.initGold();
            this.loop();
            this.listenKeyboard();
            this.listenMouse();
        }, 3000)

    }

    newGold() {
        ok = false;
        index = -1;
        Xh = XXX;
        Yh = YYY;
        r = R;
        drag = false;
        timeH = -1;
        vlH = 0;
        level++;
        this.initGold();
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            this.solve();
        })
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            this.solve();
        })
    }

    removeEvent() {
        document.removeEventListener("keydown", key => {
            this.solve();
        })
        document.removeEventListener("mousedown", evt => {
            this.solve();
        })
    }

    solve() {
        if (!drag) {
            drag = true;
            d = true;
            speedReturn = this.getWidth() / 2;
            index = -1;
        }
    }

    loop() {
        if (!endGame) {
            this.update();
            this.draw();
            // nếu hết thời gian -> kết thúc
            // nếu sai quá số lượng câu -> kết thúc
            // nếu là câu cuối cùng -> kết thúc
            if (time > 0)
                setTimeout(() => this.loop(), 10);
            if (time <= 0 || this.checkExit()) {
                this.removeEvent();
                if (errorAnswer >= Math.floor(listQuestion.length * 3 / 10)) {
                    this.saveScore(0);
                    window.alert("Thử lại lần sau nhé!" + "\n" + "Điểm của bạn là: " + this.score);

                } else {
                    this.saveScore(1);
                    window.alert("Đã vượt qua!" + "\n" + "Điểm của bạn là: " + this.score);
                }
                // Lưu điểm số về file
                endGame = 1;
            }
        }

    }

    update() {
        this.render();
        time -= 0.01;
        Xh = XXX + r * Math.cos(this.toRadian(angle));
        Yh = YYY + r * Math.sin(this.toRadian(angle));
        if (!drag) {
            angle += ChAngle;
            if (angle >= 165 || angle <= 15)
                ChAngle = -ChAngle;
        } else {
            if (r < MaxLeng && d && !ok)
                r += this.getWidth() / 5;
            else {
                d = false;
                r -= speedReturn / 2.5;
            }
            if (r < R) {
                r = R;
                drag = false;
                ok = false;
                index = -1;
                for (let i = 0; i < N; i++)
                    if (this.gg[i].alive && this.range(Xh, Yh, this.gg[i].x, this.gg[i].y) <= 2 * this.getWidth()) {
                        // lấy câu trả lời
                        // so sánh với đáp án
                        if (this.gg[i].score === 0) {
                            //    câu sai
                            // lưu số lượng câu sai
                            errorAnswer++;
                        }
                        // chuyển sang câu tiếp theo
                        idxQuestion++;
                        N = listQuestion[idxQuestion]?.listAnswers.length
                        this.gg[i].alive = false;
                        this.score += this.gg[i].score;
                        timeH = time - 0.7;
                        vlH = this.gg[i].score;
                        this.newGold();
                    }
            }
        }
        if (drag && index == -1) {
            for (let i = 0; i < N; i++)
                if (this.gg[i].alive && this.range(Xh, Yh, this.gg[i].x, this.gg[i].y) <= this.gg[i].size()) {
                    ok = true;
                    index = i;
                    break;
                }
        }
        if (index != -1) {
            this.gg[index].x = Xh;
            this.gg[index].y = Yh + this.gg[index].height / 3;
            speedReturn = this.gg[index].speed;
        }
    }

    render() {
        if (game_W != document.documentElement.clientWidth || game_H != document.documentElement.clientHeight) {
            XXX = game_W / 2;
            YYY = game_H * 0.18;
            R = this.getWidth() * 2;
            if (!drag)
                r = R;
            MaxLeng = this.range(XXX, YYY, game_W - 2 * this.getWidth(), game_H - 2 * this.getWidth());
            if (N < 0) {
                N = listQuestion[idxQuestion]?.listAnswers.length
            }
        }
    }

    draw() {
        this.clearScreen();
        for (let i = 0; i < N; i++)
            if (this.gg[i].alive) {
                this.gg[i].update();
                this.gg[i].draw();
            }

        this.context.beginPath();
        this.context.strokeStyle = "#FF0000";
        this.context.lineWidth = Math.floor(this.getWidth() / 10);
        this.context.moveTo(XXX, YYY);
        this.context.lineTo(Xh, Yh);

        this.context.stroke();
        this.context.beginPath();
        this.context.arc(XXX, YYY, 3, 0, 2 * Math.PI);
        this.context.stroke();

        this.context.save();
        this.context.translate(Xh, Yh);
        this.context.rotate(this.toRadian(angle - 90));
        this.context.drawImage(hook, -this.getWidth() / 4, -this.getWidth() / 8, this.getWidth() / 2, this.getWidth() / 2);
        this.context.restore();

        this.drawText();
    }

    drawText() {
        this.context.drawImage(dolarIM, this.getWidth() / 2, this.getWidth() / 2, this.getWidth(), this.getWidth());
        this.context.fillStyle = "red";

        this.context.font = this.getWidth() + 'px Stencil';
        this.context.fillText(this.score, this.getWidth() * 1.5, this.getWidth() * 1.35);

        this.context.drawImage(levelIM, game_W - 3 * this.getWidth(), this.getWidth() / 2, this.getWidth(), this.getWidth());
        this.context.fillStyle = "#FFFFCC";
        this.context.font = this.getWidth() + 'px Stencil';
        this.context.fillText(level + 1, game_W - 2 * this.getWidth(), this.getWidth() * 1.35);

        this.context.drawImage(clockIM, game_W - 3 * this.getWidth(), this.getWidth() / 2 + this.getWidth(), this.getWidth(), this.getWidth());
        this.context.fillStyle = "#FF00FF";
        this.context.font = this.getWidth() + 'px Stencil';
        this.context.fillText(Math.floor(time), game_W - 2 * this.getWidth(), this.getWidth() * 2.35);

        if (Math.abs(timeH - time) <= 0.7) {
            this.context.fillStyle = "red";
            if (vlH < 0)
                this.context.fillText("-" + (vlH * (-1)), XXX, YYY * 0.8);
            else this.context.fillText("+" + vlH, XXX, YYY * 0.8);
        }
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.drawImage(bg, (bg.width - game_W * (bg.height / game_H)) / 2, 0, game_W * (bg.height / game_H), bg.height, 0, 0, game_W, game_H);
    }

    checkExit() {
        let check = false;
        // kiểm tra xem số lượng câu
        if (idxQuestion + 1 === listQuestion.length) check = true
        // kiểm tra xem quá số lượng câu sai chưa
        if (errorAnswer >= Math.floor(listQuestion.length * 3 / 10)) check = true
        return check;
    }

    initGold() {
        this.gg = [];
        // lấy ra câu hỏi cần dùng
        const answers = listQuestion[idxQuestion]?.listAnswers;
        for (let i = 0; i < N; i++) {
            // đẩy vào từng đáp án
            if (answers[i].id === listQuestion[idxQuestion]?.answer?.id)
                this.gg[i] = new gold(this, i, 10);
            else
                this.gg[i] = new gold(this, i, 0);
        }
        while (true) {
            let check = true;
            for (let i = 0; i < N - 1; i++)
                for (let j = i + 1; j < N; j++)
                    while (this.range(this.gg[i].x, this.gg[i].y, this.gg[j].x, this.gg[j].y) < 2 * this.getWidth()) {
                        check = false;
                        this.gg[j].randomXY();
                    }
            if (check)
                break;
        }
    }

    getWidth() {
        var area = document.documentElement.clientWidth * document.documentElement.clientHeight;
        return Math.sqrt(area / 300);
    }

    toRadian(angle) {
        return (angle / 180) * Math.PI;
    }

    range(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    saveScore(status) {
        window.parent.postMessage({
            score: this.score,
            status: status
        }, "*");
    }
}

new game();