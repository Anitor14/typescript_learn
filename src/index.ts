let id: number = 5

console.log("ID:" , id)


// Functions 
function addNum(x:number,y:number):number{
    return x + y
}

function log(message:string | number): void{
    console.log(message)
}
console.log(addNum(1,2));

// Interfaces 
interface userInterface {
    id:number
    name:string
    age?:number // pushing a question mark makes it optional.
} 

const user1: userInterface = {
    id:1,
    name: "John",
}

interface MathFunc {
    (x:number , y:number):number
}

const add: MathFunc =(x:number , y:number): number => x + y 
const sub: MathFunc =(x:number , y:number): number => x - y 

// You cannot use an interface with primitives or union

type Point = number | string
const p1: Point = 1

interface PersonInterface {
    id:number
    name:string
    register(): string
}

// Classes 
class Person implements PersonInterface {
    id:number
    name:string

    constructor( id:number, name:string) {
        this.id = id 
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}
 
const anitor = new Person( 1, "Anitor Abraham")
const beauty = new Person(2, "Beauty Awajinte")
// subclasses.
class Employee extends Person {
    position: string

    constructor(id:number , name:string , position:string) {
        super(id ,name)
        this.position = position
    }
}

const emp = new Employee(3,"Godswill" , "Developer")

//Generics 

function getArray<T>(items:T[]):T[] {
    return new Array().concat(items) 
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["brad", "john" ,"jill"])

strArray.push()


// we have either 1.Public 2.Private 3.Protected.

