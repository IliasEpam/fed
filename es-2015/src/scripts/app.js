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
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }

    getGender() {
        return this.gender;
    }
    static MALE = 'male';
    static FEMALE = 'female';

}
/*Person.MALE = 'male';
Person.FEMALE = 'female';
*/
let petr = new Person('Petr', 'Petrov', 20, Person.MALE);
console.log(petr.getAge());
console.log(petr.getFirstName() + ' ' + petr.getLastName());
console.log(petr.getGender() === Person.MALE ? 'male' : 'female');




/*****arrow functions****/

let arrowFunc = (a, b) => a + b;
console.log('sum = ' + arrowFunc(2, 6));
let objFunc = () => ({});
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
    let nextIndex = 0;
    let iterator = {
        startChar: 0,
        endChar: arr.length - 1
    }
    iterator[Symbol.iterator] = function() {
        let current = this.startChar;
        let last = this.endChar;
        return {
            next() {
                if (current <= last) {
                    return {
                        done: false,
                        value: { char: arr[current++] }
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        }
    }

    return iterator;
}
let iterator = makeCharIterator('some');
console.log(iterator);
for (let info of iterator) {
    console.log(info);
}

let iterator2 = makeCharIterator('other');
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());