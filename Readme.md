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