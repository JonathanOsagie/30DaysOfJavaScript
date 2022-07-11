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

const weight = (mass = 2, gravity = 2) => mass * gravity;
// console.log(weight());

const convertCelsiusToFahrenheit = (c = 0) => (c * 9/5) + 32;
// console.log(convertCelsiusToFahrenheit(5))

function exerciseOneThirteen(weight = 100, height = 1.85){
    const bmi = weight / (height * height);

    switch(true){
        case bmi<18.5:
            console.log("Underweight");
            break;
        case bmi<25:
            console.log("Normalweight");
            break;
        case bmi<30:
            console.log("Overweight");
            break;
        case bmi>=30:
            console.log("Obese");
            break;
        default:
            console("Could you not?");
    }
}

function exercisesOneFourteen(choice){
    const month = choice;

    switch(true)
    {
        case "january, march, mai, july, august, oktober, dezember".includes(month.toLowerCase()) :
            console.log(`${month} has 31 days`);
            break;
        case "april, june, september, november".includes(month.toLowerCase()) :
            console.log(`${month} has 30 days`);
            break;
        case "february".includes(month.toLowerCase()) :
            const year = prompt("Enter a year:","2023");
            year%4===0 ? console.log(`${month} has 29 days`) : console.log(`${month} has 28 days`);
            break;
        default :
            console.log("The entered value is not a month!");
    }
}

function findMax(){
    let biggest = arguments[0];
    for(i=0; i<arguments.length;i++)
    {
        if(arguments[i]>biggest)
        {
            biggest = arguments[i];
        }
    }
    console.log(biggest);
}

console.log(findMax(-3, -5, -1));