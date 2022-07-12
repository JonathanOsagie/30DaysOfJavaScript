function fullName(firstName, lastName) { //1.1 1.2
    const fullName = firstName + " " + lastName;
    return fullName;
}
//console.log(fullName("Jonathan","Osagie"));

function addNumbers(first = 10, second = 20) {
    const sum = first + second;
    return sum;
}
// console.log(addNumbers());

function areaOfRectangle(length = 2, width = 2) {
    const area = 2 * length * width;
    return area;
}
// console.log(areaOfRectangle());

function perimeterOfRectangle(length = 2, width = 2) {
    const area = 2 * (length + width);
    return area;
}
// console.log(perimeterOfRectangle());

function volumeOfRectPrism(length = 2, width = 2, height = 2) {
    const volume = length * width * height;
    return volume;
}
// console.log(volumeOfRectPrism());

function areaOfCircle(radius = 3) {
    const area = Math.PI * radius * radius;
    return area;
}
// console.log(areaOfCircle());

function circumOfCircle(radius = 3) {
    const circumference = Math.PI * radius * 2;
    return circumference;
}
// console.log(circumOfCircle());

function density(mass = 10, volume = 5) {
    return mass / volume;
}
// console.log(density());

function speed(distanceInMeter = 10, timeTakenInSec = 5) {
    return distanceInMeter / timeTakenInSec;
}
// console.log(speed);

const weight = (mass = 2, gravity = 2) => mass * gravity;
// console.log(weight());

const convertCelsiusToFahrenheit = (c = 0) => (c * 9 / 5) + 32;
// console.log(convertCelsiusToFahrenheit(5))

function exerciseOneThirteen(weight = 100, height = 1.85) {
    const bmi = weight / (height * height);

    switch (true) {
        case bmi < 18.5:
            console.log("Underweight");
            break;
        case bmi < 25:
            console.log("Normalweight");
            break;
        case bmi < 30:
            console.log("Overweight");
            break;
        case bmi >= 30:
            console.log("Obese");
            break;
        default:
            console("Could you not?");
    }
}

function exercisesOneFourteen(choice) {
    const month = choice;

    switch (true) {
        case "january, march, mai, july, august, oktober, dezember".includes(month.toLowerCase()):
            console.log(`${month} has 31 days`);
            break;
        case "april, june, september, november".includes(month.toLowerCase()):
            console.log(`${month} has 30 days`);
            break;
        case "february".includes(month.toLowerCase()):
            const year = prompt("Enter a year:", "2023");
            year % 4 === 0 ? console.log(`${month} has 29 days`) : console.log(`${month} has 28 days`);
            break;
        default:
            console.log("The entered value is not a month!");
    }
}

function findMax() {
    let biggest = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > biggest) {
            biggest = arguments[i];
        }
    }
    console.log(biggest);
}

function exerciseTwoTwo(a = 1, b = 4, c = 4) {
    const first = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    const second = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
    first === second ?
        console.log(first) : console.log(first, second);
}

function printArray(array) {
    console.log(Array.isArray(array));
    if (Array.isArray(array)) {
        for (i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else {
        console.log("Please enter an array");
    }
}
const a = [];


const swapValues = (x, y) => {
    // const value = x;
    // x = y;
    // y = value;
    // console.log(x,y)
    [x, y] = [y, x]
}


function reverseArray(array) {
    const out = [];
    while (array.length) {
        out.push(array.pop());
    }

    return out;
}


function capitalizeArray(array) {
    console.log(Array.isArray(array));
    if (Array.isArray(array)) {
        const out = [];
        for (i = 0; i < array.length; i++) {
           out.push(array[i].toUpperCase());
        }
    
        return out;
    } else {
        console.log("Please enter an array");
    }
}

function addItem(item) {
    const array = [];

    return array.push(item);
}

function removeItem(item){
    const array = ["h","i","t","j"]

    array.splice(array.indexOf(item),1);
    console.log(array);
}

function sumOfNumber(a=5,b=0){
    a>b
    ?null
    :[a,b]=[b,a];
    let sum = 0;
    for(i=0;i<=(a-b);i++)
    {
        sum += b + i;
    }
    console.log(sum);
}

const sumOf = (a=5,b=5) => {
    a>b
    ?null
    :[a,b]=[b,a];
    let sum = 0;
    for(i=0;i<=(a-b);i++)
    {
        sum += b + i;
    }
    console.log(sum);
}

console.log(sumOf())

function sumOfEven(a=5,b=0){
    a>b
    ?null
    :[a,b]=[b,a];
    let sum = 0;
    for(i=0;i<=(a-b);i++)
    {
        if((b+i)%2===0)
        {
            sum += b + i;
        }
    }
    console.log(sum);
}

function sumOfOdd(a=5,b=0){
    a>b
    ?null
    :[a,b]=[b,a];
    let sum = 0;
    for(i=0;i<=(a-b);i++)
    {
        if((b+i)%2!==0)
        {
            sum += b + i;
        }
    }
    console.log(sum);
}

// evensAndOdds 

function exerciseTeoFourteen(){
    let sum = 0;
    for(const num of arguments)
    {
        sum += num;
    }
    console.log(sum);
}
