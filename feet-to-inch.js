/* 
Write a function that will take feet as the input parameter and will convert it into inch and will return the result in inch.
*/

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const result = feetToInch(2);
console.log(result);