/* 
Write a function that takes input the total price of the products you bought and returns the net price calculated according to the discount table below.
*/

function discountCal(totalPrice){
    if(totalPrice > 5000){
        const discountPrice = totalPrice * (20 / 100);
        const netPrice = totalPrice - discountPrice;
        return netPrice;
    }
    else if(totalPrice >= 3000){
        const discountPrice = totalPrice * (15 / 100);
        const netPrice = totalPrice - discountPrice;
        return netPrice;
    }
    else if(totalPrice >= 1000){
        const discountPrice = totalPrice * (10 / 100);
        const netPrice = totalPrice - discountPrice;
        return netPrice;
    }
    else{
        return 'You could not any discount. Thank you!!';
    }
}

const price = discountCal(5000);
console.log(price);