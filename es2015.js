//1 
const person ={
    fullName : "Harry Potter",
    sayHi(){
        setTimeout(() => console.log("Your Name is " + this.fullName),1000)
    }
}

//2
let name = "Josie"
console.log(`When ${name} comes homes, so good`)

//3
const DO_NOT_CHANGE = 42;

//4
let arr = [1,2]
let [a,b] = arr;
arr = [b,a];

//5
let double = arr => arr.map(val => val*2);

//6
let obj = {
    numbers:{
        a:1,
        b:2
    }
}

let {numbers:{a,b}} = obj;

//7
const add = (a = 10, b =10) => a+b;

//8
//Array.from()
/*
The Array.from() method is used to creates a new array instance from a given array. In the case of a string, every alphabet of the string is converted to an element of the new array instance and in case of integer values, a new array instance simply takes the elements of the given array.
 */

 //Object.assign()
 //The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

 //Array.includes()
 /*The includes() method determines whether an array contains a specified element.
 This method returns true if the array contains the element, and false if not.
 */

 //String.startsWith
 /*
 The startsWith() method determines whether a string begins with the characters of a specified string.

This method returns true if the string begins with the characters, and false if not.
*/