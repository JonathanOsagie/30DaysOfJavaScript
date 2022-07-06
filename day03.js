const firstName = "Jonathan";
const lastName = "Osagie";
const country = "Austria";
const city = "Vienna";
const age = 23;
const isMarried = false;
const date = new Date();
const year = date.getFullYear();
const numOne = '10';
const numTwo = 10;
const pi = 3.14;

function exercisesOneOne() {
    console.log(typeof firstName, typeof age, typeof isMarried, typeof year);
}

function exercisesOneTwo() {
    console.log(numOne === numTwo);
}

function exercisesOneThree() {
    console.log(parseInt('9.8') === numTwo);
}

function exercisesOneFour() {
    4 ? console.log(true) : console.log(false);
    "4" ? console.log(true): console.log(false);
    true ? console.log(true) : console.log(false);
    0 ? console.log(true) : console.log(false);
    "" ? console.log(true): console.log(false);
    false ? console.log(true) : console.log(false);
}

function exercisesOneFive() {
    // 4 > 3 true
    // 4 >= 3 true
    // 4 < 3 false
    // 4 <= 3 false
    // 4 == 4 true
    // 4 === 4 true
    // 4 != 4 false
    // 4 !== 4 false
    // 4 != '4' false
    // 4 == '4' true
    // 4 === '4' false
    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != '4');
    console.log(4 == '4');
    console.log(4 === '4');
    console.log('python'.length != 'jargon'.length);
}

function exercisesOneSix(){
    // 4 > 3 && 10 < 12 true
    // 4 > 3 && 10 > 12 false
    // 4 > 3 || 10 < 12 true
    // 4 > 3 || 10 > 12 true
    // !(4 > 3) false
    // !(4 < 3) true
    // !(false) true
    // !(4 > 3 && 10 < 12) false
    // !(4 > 3 && 10 > 12) true
    // !(4 === '4') true
    // There is no 'on' in both dragon and python true

    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(4 > 3 || 10 > 12);
    console.log(!(4 > 3));
    console.log(!(4 < 3));
    console.log(!(false));
    console.log(!(4 > 3 && 10 < 12));
    console.log(!(4 > 3 && 10 > 12));
    console.log(!(4 === '4'));
    console.log('dragon'.includes('on') && 'python'.includes('on'));
}

function exercisesOneSeven(){
    console.log(year);
    console.log(date.getMonth() +1);
    console.log(date);
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getTime());
}

function exercisesTwoOne(){
    const a = prompt('Enter base');
    const b = prompt('Enter height');
    const area = 0.5 * a * b;
    console.log("The area of the triangle is " + area);
}

function exercisesTwoTwo(){
    const a = prompt('Enter side a');
    const b = prompt('Enter side b');
    const c = prompt('Enter side c');

    const perimeter = Number(a) + Number(b) + Number(c);
    console.log("The perimeter of the triangle is " + perimeter);
}

function exercisesTwoThree(){
    const a = prompt('Enter length');
    const b = prompt('Enter width');
    const area = a*b;
    console.log("The area of the rectangle is " + area);
    const perimeter = (Number(a) + Number(b)) * 2;
    console.log("The perimeter of the rectangle is " + perimeter);
}

function exercisesTwoFour(){
    const a = prompt('Enter radius');
    const area = a * pi * a;
    console.log("The area of the circle is " + area);
    const circumference  = 2 * pi * a;
    console.log("The circumference  of the circle is " + circumference);
}

function exercisesTwoFive(){
    const a = prompt('Enter x-intercept');
    const y = 2 * a -2;
    console.log("The slope is " + y);
}

function exercisesTwoSix(){
    const a = prompt('Enter x1');
    const b = prompt('Enter x2');
    const c = prompt('Enter y1');
    const d = prompt('Enter y2');

    const m = (d-c)/(b-a);
    console.log("The slope is " + m);
}

function exercisesTwoSeven(){
    //what?
}

function exercisesTwoEight(){
    const a = prompt('Enter x1');
    const y = a**2 +6*a+9;
    console.log(y); //-3
}

function exercisesTwoNine(){
    const a = prompt('Enter hours:','40');
    const b = prompt('Enter rate per hour:',"28");
    const area = a*b;
    console.log("Your weekly earning is " + area);
}

function exercisesTwoTen(){    
    prompt('Your Name','Jonathan')>7
    ? console.log("Your name is long.")
    : console.log("Your name is short.");
}

function exercisesTwoEleven(){  
    const a = prompt('Your first name','Jonathan');
    const b = prompt('Your last name',"Osagie");
    a.length>b.length
    ? console.log(`Your first name, ${a} is longer than your family name, ${b}`)
    : console.log(`Your last name, ${b} is longer than your first name, ${a}`);
}

function exercisesTwoTwelve(){
   const myAge = prompt('My age', '250');
   const yourAge = prompt('Your age', '25');

   myAge>yourAge
   ? console.log(`I am ${myAge-yourAge} older than you`)
   : console.log(`You are ${yourAge-myAge} older than me`);
}

function exercisesTwoThirteen(){
    const yourAge = prompt('Year of birth', '1999');
 
    Number(date.getFullYear()-yourAge)>18
    ? console.log(`You are ${Number(date.getFullYear()-yourAge)}. You are old enough to drive`)
    : console.log(`You are ${Number(date.getFullYear()-yourAge)}. You will be allowed to drive after ${18-Number(date.getFullYear()-yourAge)} years.`); 
}

function exercisesTwoFourteen(){
    const years = prompt('Enter the number of years you live:', '100')

    const secTillNow = date.getTime();

    date.setFullYear(date.getFullYear()-years);

    const secTillBDay = date.getTime();

    secTillBDay < 1970
    ?   console.log((secTillNow + Math.abs(secTillBDay))/1000)
    :   console.log((secTillNow - Math.abs(secTillBDay))/1000);
}

function exercisesTwoFifteen(){ //accidentally did exercise lvl 3 in this already
    const month = date.getMonth()<10 ? '0'+date.getMonth():date.getMonth();
    const day = date.getDay()<10 ? '0'+date.getDay():date.getDay();
    const hour = date.getHours()<10 ?'0'+date.getHours():date.getHours();
    const minute = date.getMinutes()<10 ?'0'+date.getMinutes:date.getMinutes();

    console.log(`${year}-${month}-${day} ${hour}:${minute}`);
    console.log(`${day}-${month}-${year} ${hour}:${minute}`);
    console.log(`${day}/${month}/${year} ${hour}:${minute}`);
}

console.log(exercisesTwoFourteen());