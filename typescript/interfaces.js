var Car = (function () {
    function Car() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }
    /**
    *   Запускает зажигание автомобиля, чтобы он мог двигаться.
    */
    Car.prototype.start = function () {
        this._isRunning = true;
    };
    /**
    *  Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    *
    *   @param {number} distance Расстояние, которое необходимо проехать
    *
    *   @returns {boolean} Была ли поездка успешна
    */
    Car.prototype.drive = function (distance) {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    };
    /**
    *   Получить расстояние от начала.
    *
    *   @returns {number} Расстояние от начала.
    */
    Car.prototype.getPosition = function () {
        return { height: 0, horizontalPosition: this._distanceFromStart };
    };
    return Car;
}());
var Helicopter = (function () {
    function Helicopter() {
        this.isEngineOn = false;
        this.height = 0;
        this.horizontalPosition = 0;
    }
    Helicopter.prototype.start = function () {
        this.isEngineOn = true;
    };
    Helicopter.prototype.setHeight = function (height) {
        if (this.isEngineOn) {
            this.height = height;
            console.log('the helicopter is in the air boss');
            return true;
        }
        else {
            console.log('something went wrong check all systems, espicially engine');
            return false;
        }
    };
    Helicopter.prototype.drive = function (distance) {
        if (this.height && this.isEngineOn) {
            this.horizontalPosition += distance;
            return true;
        }
        else {
            return false;
        }
    };
    Helicopter.prototype.getPosition = function () {
        return { height: this.height, horizontalPosition: this.horizontalPosition };
    };
    Helicopter.prototype.sitDown = function () {
        this.height = 0;
    };
    return Helicopter;
}());
var FlyingCar = (function () {
    function FlyingCar() {
        this.isEngineOn = false;
        this.height = 0;
        this.horizontalPosition = 0;
    }
    FlyingCar.prototype.start = function () {
        this.isEngineOn = true;
    };
    FlyingCar.prototype.setHeight = function (height) {
        if (this.isEngineOn) {
            this.height = height;
            console.log('the helicopter is in the air boss');
            return true;
        }
        else {
            console.log('something went wrong check all systems, espicially engine');
            return false;
        }
    };
    FlyingCar.prototype.drive = function (distance) {
        if (this.isEngineOn) {
            this.horizontalPosition += distance;
            return true;
        }
        else {
            return false;
        }
    };
    FlyingCar.prototype.getPosition = function () {
        return { height: this.height, horizontalPosition: this.horizontalPosition };
    };
    FlyingCar.prototype.sitDown = function () {
        this.height = 0;
    };
    return FlyingCar;
}());
