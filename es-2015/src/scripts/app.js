'use strict'
import Animal from "./animal.js";

class Person extends Animal {
    constructor(firstName, lastName, age, gender) {
        super(age);
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    getFirstName() {
        return this.firstName + ' ';
    }
    getLastName() {
        return this.lastName;
    }
    getGender() {
        return this.gender;
    }

}
Person.MALE = 'male';
Person.FEMALE = 'female';

let petr = new Person('Petr', 'Petrov', 20, Person.MALE);
console.log(petr.getAge());
console.log(petr.getFirstName() + petr.getLastName());
console.log(petr.getGender() === Person.MALE ? 'male' : 'female');




/*****arrow functions****/

let arrowFunc = (a, b) => a + b;
console.log('sum = ' + arrowFunc(2, 6));
let objFunc = () => new Object();
console.log('new object: ' + objFunc());

class People {
    constructor(age) {
        this.age = age;
    }
    tommorowAge() {
        this.age += 5;
        setTimeout(() => {
            alert.call(this.yesterdayAge(), this.age);
        }, 1000)
    };
    yesterdayAge() {
        () => this;
    };
}
let man = new People(20);
man.tommorowAge();
console.log(man.yesterdayAge());

/**********iterator******** */

function makeCharIterator(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < arr.length ? { done: false, char: arr[nextIndex++] } : { done: true };
        }
    }
}
let iterator = makeCharIterator('some');
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());