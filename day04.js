function exerciseOneThree(){
    const a = 4;
    const b = 3;

    if(a>b)
    {
        console.log(a + " is greater than " + b);
    }
    else{
        console.log(b + " is greater than " + a);
    }

    a>b ?  console.log(a + " is greater than " + b) :  console.log(b + " is greater than " + a);
}

function exercisesOneFour(){
    const a = prompt("Enter a number","2");

    if(a%2===0)
    {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

function exercisesTwoOne(){
    const points = prompt("Enter your score","80");

    switch(true)
    {
        case points >= 90 :
            console.log("A");
            break;
        case points >= 70 :
            console.log("B");
            break;
        case points >= 60 :
            console.log("C");
            break;
        case points >= 50 :
            console.log("D");
            break;
        default:
            console.log("F");
    }
}

function exercisesTwoTwo(){
    const month = prompt("Enter a Month","January");

    switch(true)
    {
        case "september, october, november".includes(month.toLowerCase()) :
            console.log("It is currently autumn");
            break;
        case "december, january, february".includes(month.toLowerCase()) :
            console.log("It is currently winter");
            break;
        case "march, april, may".includes(month.toLowerCase()) :
            console.log("It is currently spring");
            break;
        case "june, july, august".includes(month.toLowerCase()) :
            console.log("It is currently summer");
            break;
        default :
            console.log("The entered value is not a month!");
    }
}

function exercisesTwoThree(){
    const day = prompt("Enter a day","Saturday");

    switch(true)
    {
        case "saturday, sonday".includes(day.toLowerCase()) :
            console.log(`${day} is a weekend.`);
            break;
        case "monday, tuesday, wednesday, thirsday, friday".includes(day.toLowerCase()) :
            console.log(`${day} is a working day`);
        default :
            console.log("The entered value is not a day!");
    }
}

function exercisesThreeOne(){
    const month = prompt("Enter a month:", "January");

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

console.log(exercisesThreeOne());