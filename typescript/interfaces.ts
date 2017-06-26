interface Drivable {   

    // Запускает зажигание автомобиля, чтобы он мог двигаться.
    start(): void;
    
    // Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    drive(distance: number): boolean;
    
    // Получить расстояние от начала.
    getPosition(): object;
}
interface Flyable {
    //Запускается двигатель
    start(): void;

    //Подняться на заданную высоту и пролететь до указанной позиции и остатья на высоте height
    setHeight(height: number): boolean;

    //Пролететь до указанной точки
    drive(distance: number): boolean;

    //Получить текущую позицию
    getPosition(): object;

    //выполнить посадку
    sitDown(): void

 }
class Car implements Drivable {
    private _isRunning: boolean;
    private _distanceFromStart: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    /**
    *   Запускает зажигание автомобиля, чтобы он мог двигаться.
    */
    public start() {
        this._isRunning = true;
    }

    /**
    *  Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    *
    *   @param {number} distance Расстояние, которое необходимо проехать
    *
    *   @returns {boolean} Была ли поездка успешна
    */
    public drive(distance: number): boolean {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    }

    /**
    *   Получить расстояние от начала.
    *
    *   @returns {number} Расстояние от начала.
    */
    public getPosition(): object {
        return {height: 0, horizontalPosition: this._distanceFromStart};
    }
}

class Helicopter implements Flyable{
    private isEngineOn: boolean;
    private height: number;
    private horizontalPosition: number;

    constructor() {
        this.isEngineOn = false;
        this.height = 0;
        this.horizontalPosition = 0;
    }
    public start(){
        this.isEngineOn = true;
    }

    public setHeight(height: number): boolean {
        if (this.isEngineOn){
            this.height = height;
            console.log('the helicopter is in the air boss');
            return true;
        }
        else {
            console.log('something went wrong check all systems, espicially engine');
            return false;
        }
    }
    
    public drive(distance: number): boolean{
        if (this.height && this.isEngineOn){
            this.horizontalPosition += distance;
            return true;
        }
        else {
            return false;
        }
    }

    public getPosition(): object{
        return {height: this.height, horizontalPosition: this.horizontalPosition}
    }

    public sitDown(): void{
        this.height = 0;
    }
}
class FlyingCar implements Drivable, Flyable { 
    private isEngineOn: boolean;
    private height: number;
    private horizontalPosition: number;

    constructor() {
        this.isEngineOn = false;
        this.height = 0;
        this.horizontalPosition = 0;
    }
    public start(){
        this.isEngineOn = true;
    }

    public setHeight(height: number): boolean {
        if (this.isEngineOn){
            this.height = height;
            console.log('the helicopter is in the air boss');
            return true;
        }
        else {
            console.log('something went wrong check all systems, espicially engine');
            return false;
        }
    }
    
    public drive(distance: number): boolean{
        if (this.isEngineOn){
            this.horizontalPosition += distance;
            return true;
        }
        else {
            return false;
        }
    }

    public getPosition(): object{
        return {height: this.height, horizontalPosition: this.horizontalPosition}
    }

    public sitDown(): void{
        this.height = 0;
    }
 }