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

const user: {
  id: number
  name: string
} = {
  id: 1,
  name: 'John',
}
