"use strict";
// BASIC TYPES
let id = 5;
let company = 'Colby Pearce';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'yes', true];
// Tuple
let person = [1, 'Colby', false];
// Tuple Array
let employee;
employee = [
    [1, 'Colby'],
    [2, 'Natalie'],
    [3, 'Crosby'],
];
//Union
//variable to hold more than one type
let productId;
productId = 22;
// Enum
// named constants either number or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type assertion 
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
// good idea to give your params a type
// also give a type to the return value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 5));
// Void
function log(message) {
    console.log(message);
}
log("Colby");
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const colby = new Person(1, "Colby Pearce");
const natalie = new Person(2, "Natalie Pearce");
//This would be called a subclass since it Extends the Person class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Tommy", 'Developer');
console.log(emp);
// since we have extendced the Person class from the Employee class we can also call register()
console.log(emp.register());
// Generics- used to build reusable components
// Can use placeholders for whatever datatypes you want
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Joe']);
strArray.push('hello');
console.log(numArray);
