# Javascript Summary

## Table of Content
1. [Basics](#variables)
2. [Arrays](#arrays)
3. [Objects](#objects)
4. [Functions](#functions)

## Variables
Prefer not to use var
because of issue in block scope and functional scope

## Data Types

* "use strict" &nbsp;&nbsp;&nbsp; Treats all JS code as newer version.

1. number => 2 to power 53
2. bigint
3. string => ""
4. boolean => true/false
5. null => standalone value
6. undefined => 
7. symbol => unique

``` javascript

console.log(typeof  undefined);   // undefined
console.log(typeof  null);        // object

```

## Comparisons

### Null

``` javascript
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true
```

### Undefined

``` javascript
console.log (undefined == 0);    // false
console.log (undefined > 0);     // false
console.log (undefined < 0);     // false
```

## Strings
### String operations

* slice
* trim => removes spaces
* replace
* includes, join
* split  => Array

## Nums

``` javascript
const hundreds = 1000000
console.log(hundreds.toLocaleString());         // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000
```

## Maths

``` javascript
console.log(Math);                               // Object [Math] {}
console.log(Math.abs(-4));                       // 4
console.log(Math.round(4.6));                    // 5
console.log(Math.ceil(4.2));                     // 5 
console.log(Math.floor(4.9));                    // 4
console.log(Math.min(4, 3, 6, 8));               // 3
console.log(Math.max(4, 3, 6, 8));               // 8

console.log(Math.random());                      // 0.9189116621592945
console.log((Math.random()*10) + 1);             // 6.7671766771352571
console.log(Math.floor(Math.random()*10) + 1);   // 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
```

## Dates
Date is of object Datatype

``` javascript
let myDate = new Date();
console.log(myDate.toString());         // Wed Jul 17 2024 12:14:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // 7/17/2024, 12:14:02 PM
console.log(myDate.toLocaleString());   // 7/17/2024, 12:14:02 PM
console.log(typeof myDate);             // object
```

## Arrays
### Array Methods

* push, pop
* shift, unshift
* includes, indexOf
* join
* slice, splice
* concat
* Array.from() - String to Array
* Array.of()

``` javascript
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

console.log(Array.from({name: "Mohit"}))  // [] Empty Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
```

## Objects

``` javascript
const mySym = Symbol("key1")
const JsUser = {
    name: "Mohit",
    full_name: "Mohit Kholiya",
    [mySym]: "mykey1",
    age: 20,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Object.keys(JsUser));      // [ 'name', 'full name', 'age', 'lastLoginDays' ]
console.log(Object.values(JsUser));    // [ 'Mohit', 'Mohit Kholiya', 20, [ 'Monday', 'Saturday' ] ]
console.log(Object.entries(JsUser));   // All entries [ [ 'name', 'Mohit' ], []..... ]

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {...obj1, ...obj2}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
```

## Functions

### Syntax
``` JS
function addTwoNumbers(number1, number2){
    return number1 + number2
}

console.log(addone(5))  // Don't show error
function addone(num){
    return num + 1
}

addTwo(5)               // Throw error
const addTwo = function(num){
    return num + 2
}
```

* addone => Function declarations are hoisted. This means you can call the function before its declaration without any error.
* addTwo => Only the variable declaration is hoisted, not the function assignment. Thus, calling the function before its definition results in an error.

### Arrow Functions

``` Js
const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )
```

### IIFE - Immediately Invoked Function Expressions

Functions that execute immediately after they are defined.
``` JS
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('MongoDb')
```