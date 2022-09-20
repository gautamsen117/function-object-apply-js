// Write a function which will take 3 integers and return  the largest number. You need to do it in 2 ways - has return and no return.
// print the large number with no return
function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
findLargest(121, 34, 11);

function findLargeNumber(number1, number2, number3){
    if(number1 > number2 && number1 > number3){
        return number1;
    }
    else if(number2 > number1 && number2 > number3){
        return number2;
    }
    else{
        return number3;
    }
}
const largestNumber = findLargeNumber(13, 11, 10);
console.log(largestNumber);