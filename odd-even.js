// check odd and even number with no return
function oddEven(number){
    if(number % 2 == 0){
        console.log('This is even number')
    }
    else{
        console.log('This is odd number');
    }
}
oddEven(19) ;
oddEven(20); 
// check even and odd number with retrun

function checkEvenOdd(number){
    if(number % 2 == 0){
        return 'Its even';
    }
    else{
        return 'Its odd';
    }
}

let checkNumber = checkEvenOdd(25);
console.log(checkNumber);