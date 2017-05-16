(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(age) {
        _classCallCheck(this, Animal);

        this.age = age;
    }

    _createClass(Animal, [{
        key: 'getAge',
        value: function getAge() {
            return this.age;
        }
    }]);

    return Animal;
}();

exports.default = Animal;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animal = require('./animal.js');

var _animal2 = _interopRequireDefault(_animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Animal) {
    _inherits(Person, _Animal);

    function Person(firstName, lastName, age, gender) {
        _classCallCheck(this, Person);

        var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, age));

        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.gender = gender;
        return _this;
    }

    _createClass(Person, [{
        key: 'getFirstName',
        value: function getFirstName() {
            return this.firstName + ' ';
        }
    }, {
        key: 'getLastName',
        value: function getLastName() {
            return this.lastName;
        }
    }, {
        key: 'getGender',
        value: function getGender() {
            return this.gender;
        }
    }]);

    return Person;
}(_animal2.default);

Person.MALE = 'male';
Person.FEMALE = 'female';

var petr = new Person('Petr', 'Petrov', 20, Person.MALE);
console.log(petr.getAge());
console.log(petr.getFirstName() + petr.getLastName());
console.log(petr.getGender() === Person.MALE ? 'male' : 'female');

/*****arrow functions****/

var arrowFunc = function arrowFunc(a, b) {
    return a + b;
};
console.log('sum = ' + arrowFunc(2, 6));
var objFunc = function objFunc() {
    return new Object();
};
console.log('new object: ' + objFunc());

var People = function () {
    function People(age) {
        _classCallCheck(this, People);

        this.age = age;
    }

    _createClass(People, [{
        key: 'tommorowAge',
        value: function tommorowAge() {
            var _this2 = this;

            this.age += 5;
            setTimeout(function () {
                alert.call(_this2.yesterdayAge(), _this2.age);
            }, 1000);
        }
    }, {
        key: 'yesterdayAge',
        value: function yesterdayAge() {
            var _this3 = this;

            (function () {
                return _this3;
            });
        }
    }]);

    return People;
}();

var man = new People(20);
man.tommorowAge();
console.log(man.yesterdayAge());

/**********iterator******** */

function makeCharIterator(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    var nextIndex = 0;
    return {
        next: function next() {
            return nextIndex < arr.length ? { done: false, char: arr[nextIndex++] } : { done: true };
        }
    };
}
var iterator = makeCharIterator('some');
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

},{"./animal.js":1}]},{},[2])


//# sourceMappingURL=app.js.map
