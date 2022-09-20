const car = {
    brand: 'Tesla',
    model: 3,
    weight: '980kg',
    seating: '5 Adults',
    start(){
        return 'Car is starting....!!';
    }
}
// dot notation
// console.log(car.brand);
// console.log(car.weight);
// console.log(car.start());

// brackets notation
console.log(car['brand']);
console.log(car['weight']);