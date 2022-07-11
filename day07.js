function fullName(firstName,lastName){ //1.1 1.2
    const fullName = firstName +" "+ lastName;
    return fullName;
}
//console.log(fullName("Jonathan","Osagie"));

function addNumbers(first = 10, second = 20){
    const sum = first+second;
    return sum;
}
// console.log(addNumbers());

function areaOfRectangle(length = 2, width = 2){
    const area = 2* length * width;
    return area;
}
// console.log(areaOfRectangle());

function perimeterOfRectangle(length = 2, width = 2){
    const area = 2* (length + width);
    return area;
}
// console.log(perimeterOfRectangle());

function volumeOfRectPrism(length = 2, width = 2, height = 2){
    const volume = length * width * height;
    return volume;
}
// console.log(volumeOfRectPrism());

function areaOfCircle(radius = 3){
    const area = Math.PI * radius * radius;
    return area;
}
// console.log(areaOfCircle());

function circumOfCircle(radius = 3){
    const circumference  = Math.PI * radius * 2;
    return circumference ;
}
// console.log(circumOfCircle());

function density(mass = 10, volume= 5){
    return mass / volume;
}
// console.log(density());

function speed(distanceInMeter = 10, timeTakenInSec=5){
    return distanceInMeter / timeTakenInSec;
}
// console.log(speed);