//PART 1
var data = this;
console.log(data);
// the value of the keyword this in the example would be windows because the variable of data was defined is not an object in the windows object.

function logThis(){
    return this;
}

logThis();
// The output of this function is the windows object because no object was defined;

var instructor = {
   firstName: 'Tim',
   sayHi: function(){
       console.log("Hello! " + this.firstName);
   }
}

instructor.sayHi()
//The function should return "Hello! Tim" because the parent object of the this keyword is the instructor above

var instructor = {
   firstName: 'Tim',
   info: {
       catOwner: true,
       boatOwner: true
   },
   displayInfo: function(){
       console.log("Cat owner? " + this.catOwner);
   }
}

//The output of this function would be "Cat owner? undefined", because the key "catOwner" is not a child element to the object of var instructor.


var instructor = {
   firstName: 'Tim',
   info: {
       catOwner: true,
       boatOwner: true,
       displayLocation: function(){
           return this.data.location;
       },
       data: {
           location: "Oakland"
       }
   },
}

instructor.info.displayLocation();
// The output of this function above is "Oakland", because the parent object of displayLocation() is the "info" key in the var instructor which has the key of "data".

var instructor = {
   firstName: 'Tim',
   info: {
       catOwner: true,
       boatOwner: true,
       displayLocation: function(){
           return this.location;
       },
       data: {
           location: "Oakland",
           logLocation: this.displayLocation
       }
   },
}

instructor.info.data.logLocation() 
// The output would be a TypeError because logLocation is not a function above.

//PART 2

 
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

//fix the following 
// Here, we are going to use the Call method to locate the our expected "this.name" which is Harry Porter. which goes below as;
obj.person.sayHi.call(obj);

//Two Examples Of Array-Like object?
//1. Dom Method.
//2. Calling Arguments.


//Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

function sumEvenArguments(){
    let sum = 0;
    let arr = [].slice.call(arguments);
    for(let i =0; i < arr.length; i++){
    if(arr[i] % 2 ===0){
    sum += arr[i];}}
    return sum };

    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2


      //Write a function called arrayFrom which converts an array-like-object into an array.
      function arrayFrom(arguments){
        return [].slice.apply(arguments)
    }

    //Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"
    function invokeMax(fn, max){
        let count = 0;
            return function(){
        count++;
        if(count > max){
        return "Maxed Out"}
        return fn.apply(this,arguments)}
        };


        //Guessing Game
        
    function guessingGame(amount) {
        var guesses = 0;
        var answer = Math.floor(Math.random() * 11);
        return function anotherFunction(guess) {
            guesses++;
            if (guesses < amount) {
                if (guess > answer) {
                    return "too high";
                } else if (guess < answer) { return "too low"; }
                 else if (guess === answer) {
                      return "you got it"}
                  }  else if(guesses === amount || guess === answer){
                      return "stop"}
    
                  }
                };




