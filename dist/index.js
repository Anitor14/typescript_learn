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
    register() {
        return `${this.name} is now registered`;
    }
}
const anitor = new Person(1, "Anitor Abraham");
const beauty = new Person(2, "Beauty Awajinte");
// subclasses.
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Godswill", "Developer");
//Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
strArray.push();
// we have either 1.Public 2.Private 3.Protected.
