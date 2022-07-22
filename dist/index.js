"use strict";
let id = 5;
console.log("ID:", id);
// Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log(addNum(1, 2));
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const anitor = new Person(1, "Anitor Abraham");
const beauty = new Person(2, "Beauty Awajinte");
