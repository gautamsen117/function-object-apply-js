function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
        return 'This is Leap year';
    }
    else{
        return 'This not Leap year';
    }
}

const year = isLeapYear(1952);
console.log(year);