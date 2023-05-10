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
// Objects
const user = {
    id: 1,
    name: 'John',
};
