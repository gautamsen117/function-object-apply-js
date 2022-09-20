/* 
Write a function that will take a integer as a input and will return the factorial number for this input. ( using for and while loop )
*/
function factorial(n){
    let result = 1;
    let i = n;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const fact = factorial(7);
console.log(fact);

function factorial(n){
    let result = 1;
    for(let i = n; i >= 1; i--){
        result = result * i;
    }
    return result;
}

const facto = factorial(7);
console.log(facto);