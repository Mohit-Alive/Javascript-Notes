# Javascript Summary

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
console.log(typeof  null);       // object

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
console.log (undefined == 0);    //false
console.log (undefined > 0);     //false
console.log (undefined < 0);     //false
```

## String
### String operations

* slice
* trim => removes spaces
* replace
* includes, join
* split  => Array

## Nums

``` javascript
const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
```

## Maths

``` javascript
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

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