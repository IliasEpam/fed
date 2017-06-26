interface FieldClass {
    readonly name: string;
    readonly height: number;
    readonly width: number;   
    init(width: number, height: number): void;
}
interface BallClass{
    readonly name: string;
    readonly height: number;
    readonly  width: number;
    init(field: string): void;
    chooseDirection(): void;
    makeMoove(): void;
    startMooving(): void;
    shouldIChangeDirection(top: number, left: number): boolean;
}
interface ApplicationClass{
    start(): void;
}
/*field class*/
class Field implements FieldClass{
    public name: string;
    public height: number;
    public width: number;

    constructor(id:string, width: number, height: number){
        this.name = id;
        this.init(width, height);
        this.width = width;
        this.height = height;
    }
    public init(width: number, height: number): void{
        let container = document.getElementById('field');
        let field = document.createElement('div');
        field.id = this.name;
        field.className = 'field';
        document.body.appendChild(field);
        document.getElementById('field').style.width = String(width) + 'px';
        document.getElementById('field').style.height = String(height) + 'px';

    }
}
/*ball class*/
class Ball implements BallClass{
    public height: number;
    public width: number;
    public name: string;
    private speed: number;
    private top: number;
    private left: number;
    private verticalDirection: number;
    private horizontalDirection: number;
    private fieldWidth: number;
    private fieldHeight: number;

    constructor(top: number, left: number, field: string, fieldWidth: number, fieldHeight: number){
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
    init(field: string): void{
        let container = document.getElementById(field);
        let ball = document.createElement('div');
        ball.id = this.name;
        ball.className = 'ball';
        ball.style.top = String(this.top) + "px";
        ball.style.left = String(this.left) + "px";
        container.appendChild(ball);
    }
    public chooseDirection(): void{
        if (this.top <= 7){
            this.verticalDirection = Math.random();
            this.horizontalDirection = Math.random() * 2 - 1;
        }
        else {
            this.verticalDirection = Math.random() * 1 - 1;
            this.horizontalDirection = Math.random() * 2 - 1;
        }
        if (this.left <= 7){
            this.horizontalDirection = Math.random();
            this.verticalDirection = Math.random() * 2 - 1;
        }
        else {
            this.horizontalDirection = Math.random() - 1;
            this.verticalDirection = Math.random() * 2 - 1;
        }
    }
    public shouldIChangeDirection(top: number, left: number): boolean{
        if ((top >= this.fieldHeight - this.height - 7 && this.verticalDirection > 0) || 
            (top <= 1 && this.verticalDirection < 0 ) || 
            (left <= 1 && this.horizontalDirection < 0) || 
            (left >= this.fieldWidth - this.width - 7 && this.horizontalDirection > 0)){
            return true;    
        }
        else{
            return false;
        }
    }
    public makeMoove(): void{
        if (this.shouldIChangeDirection(this.top, this.left)){
            this.chooseDirection();    
        }
        this.top += this.speed * this.verticalDirection;
        this.left += this.speed * this.horizontalDirection;
        let view = document.getElementById(this.name);
        view.style.top = String(this.top) + "px";
        view.style.left = String(this.left) + "px";
    }

    public startMooving(): void{
        setInterval(this.makeMoove.bind(this), 100);
    }
}
class Application implements ApplicationClass{
    private field: any;
    private ball: any;
    constructor(){
        this.field = new Field('field', 600, 400);
        this.ball = new Ball(100, 100, this.field.name, this.field.width, this.field.height);
    }
    public start():void{
        this.ball.startMooving();
    }
}
let game = new Application();
game.start();