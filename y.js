let name = ("hello javaScript");
console.log(name);

//variable declare 
let number = 10;
let string = "hello";
let boolean = true;
let nullValue = null;
let undefinedValue;
console.log(number, string, boolean, undefinedValue, nullValue);

//type conversion
let num = "10";
console.log(num);
console.log(typeof num);
console.log(Number(num));
console.log(typeof Number(num));
let string1 = 10;
console.log(string1);
console.log(typeof string1);
console.log(String(string1));
console.log(typeof String(string1));

//operators and expressions
//simple calculator
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
console.log(sum, sub, mul, div, mod);

//even or odd
function tekCift(num){
    if (num % 2 === 0){
        return "Cift";
    }
    else{
        return "Tek";
    }
}

//comparison operators
if (num1 > num2){
    console.log("The first number is greater than the second number");
}
else if (num1 < num2){
    console.log("The first number is less than the second number");
}
else{
    console.log("The first number is equal to the second number");
}   

//grade check
function grade(grade){
    if (grade > 90){
        return "A";
    } else if (grade >= 80 && grade <= 90){
        return "B";
    } else if (grade > 70 && grade < 80){
        return "C";
    } else if (grade > 60 && grade < 70){
        return "D";
    } else if (grade < 60){
        return "F";
    }
}
console.log(grade(55));

//FIZZBUZZ
for (let i = 1; i <= 100; i++){	    
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0){
        console.log("fizz");
    }
    else if (i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}
//passwor validation has 8 characters and includes number
let password ="anibengu0";
if (password.length >= 8 && password.includes("0")){
    console.log("Valid password");
}
else{
    console.log("Invalid password");
}
//function 
//greeting function
function hel(name){
    return "Hello " + name;
}
console.log(hel("Ani"));

//factorial function
function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));

//palindrome function
function palindrome(word){
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    if (word === reverse){
        return "Is palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(palindrome("madam")); 

// arrays
let arr = [1, 2, 3, 4, 4, 5, 6];
function sumArry(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArry(arr));
//find max number
function maxNum(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNum(arr));
//filter even numbers
function evenNum(arr){
    let even = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even.push(arr[i]);
        }
    }
    return even;
}	
console.log(evenNum(arr));
//object
//object properties
let person = {
    name: "Ani",
    age: 17,
    hobi: ["programming", "reading", "gaming"],
}
console.log(person.name, person.age, person.hobi);
//object methods
function greet(){
    return "Hello my name is " + this.name + " and im " + this.age + " years old!";
}  
console.log(greet.call(person));
//shopping cart
let cart = [
    {name: "apple", price: 2},
    {name: "banana", price: 3},
    {name: "orange", price: 4},
    {name: "kiwi", price: 5},
    {name: "grape", price: 6},
];
function totalCart(cart1){
    let total = 0;
    for (let i = 0; i < cart1.length; i++){
        total += cart1[i].price;
    }
    return total;
}
console.log(totalCart(cart));