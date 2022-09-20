// declare a function
function greet(){
    console.log('Hello World !!');
}
// call a function
greet(); 


// parameter
function greet(name){
    console.log('Name:', name);
}
greet('Gautam Sen');
//
function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
sum(19, 1);
//
function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}
let number1 = 20;
let number2 = 10;
let result = add(number1, number2);
console.log('sum:', result);