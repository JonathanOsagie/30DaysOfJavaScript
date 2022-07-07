//Declare an empty array;
function exerciseOneOne() {
    const array = [];

    console.log(array);
}

// Declare an array with more than 5 number of elements
// Find the length of your array
function exerciseOneTwo() { //this is also exercise One Three
    const array = Array(6).fill(5);
    console.log(array.length);
}


// Get the first item, the middle item and the last item of the array
function exercisesOneFour() {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const mid = array.length % 2 === 0 ? (array.length) / 2 : (array.length - 1) / 2;

    console.log("First, middle, last", array[0], array[mid], array[array.length - 1]);
}

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
function exerciseOneFive() {
    const mixedDataTypes = [1, "one", true, [1, 2, 3], {
        me: "history",
        you: "Halt"
    }, null];
    console.log(mixedDataTypes);
}

function exerciseOneSix() {
    const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    //1.7
    console.log(itCompanies);
    //1.8
    console.log(itCompanies.length);
    //1.9
    const mid = itCompanies.length % 2 === 0 ? (itCompanies.length) / 2 : (itCompanies.length - 1) / 2;
    console.log("First, middle, last", itCompanies[0], itCompanies[mid], itCompanies[itCompanies.length - 1]);
    //1.10
    for (i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i].toUpperCase());
    }
    //1.11
    for (i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i]);
    }
    //1.12
    let sent = "";
    for (i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i] === "Amazon") {
            sent += " and Amazon";
        } else {
            sent += itCompanies[i] + ",";
        }
    }
    console.log(sent + " are big It companies");
    //1.13
    const inArray = prompt("Enter company", "Apple");

    itCompanies.includes(inArray) ?
        console.log(inArray) : console.log("Company not found");

    //1.14
    const obj = {};
    for (i = 0; i < itCompanies.length; i++) {
        const currentValue = itCompanies[i];

        if (itCompanies[i].indexOf('o') !== itCompanies[i].lastIndexOf('o')) {
            obj[currentValue] = currentValue;
        }
    }
    console.log(obj);

    //1.15
    itCompanies.sort();
    //1.16
    itCompanies.reverse();
    //1.17

    console.log(itCompanies.slice(0, 3));
    //1.18

    console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length - 1));
    //1.19
    console.log(itCompanies.slice(mid, 1));
    //1.20
    itCompanies.shift();
    console.log(itCompanies, "1.20");
    //1.21
    itCompanies.splice(mid, 1);
    console.log(itCompanies);
    //1.22
    itCompanies.pop();
    console.log(itCompanies);
    //1.23
    const lond = itCompanies.length;
    for (i = 0; i < lond; i++) {
        itCompanies.pop();
    }
    console.log(itCompanies);
}

function exerciseTwoOne() {
    console.log(countries, webTechs);
}

function exerciseTwoTwo() {
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

    text = text.replace(".", "");
    text = text.replace(",", "");
    const words = text.split(" ");
    console.log(words);
    console.log(words.length);
}

function exerciseTwoThree() {
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    shoppingCart.unshift("Meat");

    shoppingCart.includes("Sugar") ?
        null : shoppingCart.push("Sugar");

    const allergy = false;

    if (allergy) {
        shoppingCart.slice(shoppingCart.indexOf("Honey"), 1);
    }

    shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
}

function exerciseTwoFour() {
    countries.includes("Ethiopia") ?
        console.log("ETHIOPIA", countrie[countries.indexOf("Ethiopia")].toUpperCase()) : countries.push("Ethiopia");
}

function exerciseTwoFive() {
    webTechs.includes("Sass") ?
        console.log("Sass is a CSS preprocess") : webTechs.push("Sass"), console.log(webTechs);
}

function exerciseTwoSix() {
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
    const backEnd = ['Node', 'Express', 'MongoDB'];

    const fullStack = frontEnd.concat(backEnd);

    console.log(fullStack);
}

function exerciseThreeOne(){
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    ages.sort();
    console.log(ages[0],ages[ages.length-1]);

    ages.length%2===0
    ? console.log(ages[(ages.length)/2]+ages[((ages.length)/2)+1]) :console.log(ages[(ages.length)/2]) ;

    let sum;

    for(i = 0; i<ages.length; i++)
    {
        sum += ages[i];
    }
    console.log(sum/ages.length);

    const average =ages[ages.length-1]-ages[0]; 
    console.log(average);

    const schmoll = Math.abs(ages[0]-average);
    const big = Math.abs(ages[ages.length-1]-average);

    console.log("schmol: ",schmoll , "Big: ", big );
}

function exerciseThreeTwo(){
    const slice = countries.slice(0,10);

    console.log(slice);

    slice.length%2===0
    ? console.log(slice[(slice.length)/2]+"," +slice[((slice.length)/2)+1]) :console.log(slice[(slice.length)/2]) ;


    countries.length%2===0
    ? console.log(countries.slice(0,countries.length/2), countries.slice(countries.length/2)) 
    :console.log(countries.slice(0,(countries.length/2)+1), countries.slice((countries.length/2)+1)) ;
}

console.log(exerciseThreeTwo());