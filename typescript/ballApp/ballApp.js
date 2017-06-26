/*field class*/
var Field = (function () {
    function Field(id, width, height) {
        this.name = id;
        this.init(width, height);
        this.width = width;
        this.height = height;
    }
    Field.prototype.init = function (width, height) {
        var container = document.getElementById('field');
        var field = document.createElement('div');
        field.id = this.name;
        field.className = 'field';
        document.body.appendChild(field);
        document.getElementById('field').style.width = String(width) + 'px';
        document.getElementById('field').style.height = String(height) + 'px';
    };
    return Field;
}());
/*ball class*/
var Ball = (function () {
    function Ball(top, left, field, fieldWidth, fieldHeight) {
        this.height = 40;
        this.width = 40;
        this.speed = 4; //px per interval
        this.name = 'ball' + Math.random().toFixed(3);
        this.top = top;
        this.left = left;
        this.fieldWidth = fieldWidth;
        this.fieldHeight = fieldHeight;
        this.verticalDirection = 0;
        this.horizontalDirection = 1;
        this.init(field);
    }
    Ball.prototype.init = function (field) {
        var container = document.getElementById(field);
        var ball = document.createElement('div');
        ball.id = this.name;
        ball.className = 'ball';
        ball.style.top = String(this.top) + "px";
        ball.style.left = String(this.left) + "px";
        container.appendChild(ball);
    };
    Ball.prototype.chooseDirection = function () {
        if (this.top <= 7) {
            this.verticalDirection = Math.random();
            this.horizontalDirection = Math.random() * 2 - 1;
        }
        else {
            this.verticalDirection = Math.random() * 1 - 1;
            this.horizontalDirection = Math.random() * 2 - 1;
        }
        if (this.left <= 7) {
            this.horizontalDirection = Math.random();
            this.verticalDirection = Math.random() * 2 - 1;
        }
        else {
            this.horizontalDirection = Math.random() - 1;
            this.verticalDirection = Math.random() * 2 - 1;
        }
    };
    Ball.prototype.shouldIChangeDirection = function (top, left) {
        if ((top >= this.fieldHeight - this.height - 7 && this.verticalDirection > 0) ||
            (top <= 1 && this.verticalDirection < 0) ||
            (left <= 1 && this.horizontalDirection < 0) ||
            (left >= this.fieldWidth - this.width - 7 && this.horizontalDirection > 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    Ball.prototype.makeMoove = function () {
        if (this.shouldIChangeDirection(this.top, this.left)) {
            this.chooseDirection();
        }
        this.top += this.speed * this.verticalDirection;
        this.left += this.speed * this.horizontalDirection;
        var view = document.getElementById(this.name);
        view.style.top = String(this.top) + "px";
        view.style.left = String(this.left) + "px";
    };
    Ball.prototype.startMooving = function () {
        setInterval(this.makeMoove.bind(this), 100);
    };
    return Ball;
}());
var Application = (function () {
    function Application() {
        this.field = new Field('field', 600, 400);
        this.ball = new Ball(100, 100, this.field.name, this.field.width, this.field.height);
    }
    Application.prototype.start = function () {
        this.ball.startMooving();
    };
    return Application;
}());
var game = new Application();
game.start();
