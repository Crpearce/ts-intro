// BASIC TYPES
let id: number = 5
let company: string = 'Colby Pearce'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 'yes', true]

// Tuple
let person: [number, string, boolean] = [1, 'Colby', false]

// Tuple Array
let employee: [number, string][]
employee = [
  [1, 'Colby'],
  [2, 'Natalie'],
  [3, 'Crosby'],
]

//Union
//variable to hold more than one type
let productId: string | number
productId = 22

// Enum
// named constants either number or string
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

// Objects
type User = {
    id: number,
    name:string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type assertion 
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
// good idea to give your params a type
// also give a type to the return value
function addNum(x: number,y: number): number {
    return x + y
}
console.log(addNum(3,5))

// Void
function log(message: string | number) : void {
    console.log(message)
}
log("Colby")

// Interface
// can be used in very similar way as custom type
// use when describing an object
interface UserInterface{
    id: number,
    name:string
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

interface PersonInterface{
    id: number
    name:string
    register(): string
}

// Classes
class Person implements PersonInterface{
    id: number 
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return  `${this.name} is now registered`
    }
}

const colby = new Person (1, "Colby Pearce")
const natalie = new Person(2, "Natalie Pearce")



