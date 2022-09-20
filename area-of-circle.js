// Write a function that will take a radius of a circle and will return the area of circle.[Hint: Area of Circle = πr²].
// Input: 5, 7, 3
// Output: 78.54, 153.94, 28.27
// print 5 area
function areaOfCircle(r){
    const pi = 3.1416;
    const area = pi * r * r;
    return area;
}
const firstArea = areaOfCircle(5);
console.log(firstArea);

// print 7 area
function areaOfCircle(r){
    const pi = 3.1416;
    const area = pi * r * r;
    return area.toFixed(2);
}

const secondArea = areaOfCircle(7);
console.log(secondArea);

//print 3 area
function areaOfCircle(r){
    const pi = 3.1416;
    const area = pi * r * r;
    return area.toFixed(2);
}

const thirdArea = areaOfCircle(3);
console.log(thirdArea);