

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

function exerciseOneOne() {
    for (i = 0; i <= 10; i++) {
        console.log(i);
    }
    console.log(",");

    let j = 0;
    while (j <= 10) {
        console.log(j);
        j++;
    }

    console.log(",");

    let k = 0;
    do {
        console.log(k);
        k++;
    } while (k <= 10);
}

function exerciseOneOTwo() {
    for (i = 10; i >= 0; i--) {
        console.log(i);
    }
    console.log(",");

    let j = 10;
    while (j >= 0) {
        console.log(j);
        j--;
    }

    console.log(",");

    let k = 10;
    do {
        console.log(k);
        k--;
    } while (k >= 0)
}

function exerciseOneThree() {
    const n = prompt("Enter Value", "5");

    for (i = 0; i <= n; i++) {
        console.log(i);
    }
}

function exerciseOneFour() {
    for (i = 1; i <= 7; i++) {
        console.log("#".repeat(i));
    }
}


function exerciseOneFive() {
    for (i = 0; i <= 10; i++) {
        console.log(i + " x " + i + "=" + i * i);
    }
}

function exerciseOneSix() {
    for (i = -1; i <= 10; i++) {
        if (i === -1) {
            console.log("i  i^2     i^3");
        } else {
            console.log(i + "   " + i * i + "     " + i * i * i);
        }
    }
}

function exerciseOneSeven() {
    for (i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function exerciseOneEight() {
    for (i = 0; i <= 100; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

function exerciseOneNine() {
    let divide = false;
    for (i = 0; i <= 100; i++) {
        for (j = 2; j < i; j++) {
            //console.log("j",j)
            if (i % j === 0) {
                divide=false;
                break;
            }else{
                divide=true;
            }
        }
        if(divide)
        {
            console.log(i);
        }
    }
}

function exerciseOneTen() {
    let summ;
    for (i = 0; i <= 100; i++) {
        summ += i;
    }
    console.log(summ);
}

function exerciseOneEleven() {
    let even;
    let odd;
    for (i = 0; i <= 100; i++) {
        if(i%2===0)
        {
            even += i;
        }
        else{
            odd += i;
        }
    }
    console.log(even, odd);
}

function exerciseOneTwelve() {
    let even;
    let odd;
    for (i = 0; i <= 100; i++) {
        if(i%2===0)
        {
            even += i;
        }
        else{
            odd += i;
        }
    }
    const array = [even, odd];
    console.log(array);
}

function exerciseOneThirteen(){
    for(i = 0; i<5;i++)
    {
        console.log(Math.random());
    }
}

function exerciseOneFourteen(){
    const array = [];
    
    for(i = 0; i<5;i++)
    {
        let j = Math.random();
        array.includes(j)
        ? null : array.push(j);
    }
}
function exerciseOneFifteen(length) { // also two one
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   console.log(result);
}

function exerciseTwoTwo(){
    let result = '#';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   console.log(result);
}

function exerciseTwoThree(){
    let firstValue = '';
    let secondValue = '';
    let thirdValue = '';
    const characters = '0123456789';
    for ( var i = 0; i < 6; i++ ) {
      //result += characters.charAt(Math.floor(Math.random() * characters.length));
      firstValue = Math.floor(Math.random()*255);
      secondValue = Math.floor(Math.random()*255);
      thirdValue = Math.floor(Math.random()*255);

   }
   console.log(`rgb(${firstValue},${secondValue},${thirdValue})`);
}

function exerciseTwoFour(){
    const array = [];

    for(i=0;i<countries.length;i++)
    {
        array.push(countries[i].toUpperCase);
    }
}

function exerciseTwoFive(){
    const array = [];

    for(i=0;i<countries.length;i++)
    {
        array.push(countries[i].length);
    }
}

function exerciseTwoSix(){
    const array = [];
    
    for(i=0;i<countries.length;i++)
    {
        const subArray = [];
        subArray.push(countries[i]);
        subArray.push(countries[i].slice(0,3).toUpperCase());
        subArray.push(countries[i].length);
        array.push(subArray);
    }
    console.log(array);

}

function exerciseTwoSeven(){
    const array = [];

    for(i=0;i<countries.length;i++)
    {
        if(countries[i].includes("land"))
        {
            array.push(countries[i]);
        }
  
    }
    if(array.length>0 )
    {
        console.log(array);
    }else
    {
        console.log("All these countries are without land");
    }
}

function exerciseTwoEight(){
    const array = [];

    for(i=0;i<countries.length;i++)
    {
        if(countries[i].lastIndexOf('ia') !== -1)
        {
            array.push(countries[i]);
        }
  
    }
    if(array.length>0 )
    {
        console.log(array);
    }else
    {
        console.log("These are countries ends without ia");
    }
}

function exerciseTwoNine(){
    let biggest = "";

    for(i=0;i<countries.length;i++)
    {
        if(biggest.length<countries[i].length)
        {
            biggest = countries[i];
        }
    }

    console.log(biggest);
}

function exerciseTwoTen(){
    const array = [];

    for(i=1;i<countries.length;i++)
    {
        if(countries[i].length===5)
        {
            array.push(countries[i]);
        }
    }

    console.log(array);
}

function exerciseTwoEleven(){
    let biggest = " a";

    for(i=1;i<webTechs.length;i++)
    {
        if(webTechs[i].length>webTechs[i-1].length)
        {
            biggest = webTechs[i];
        }
    }

    console.log(biggest);
}

function exerciseTwoTwelve(){
    const array = [];
    
    for(i=0;i<webTechs.length;i++)
    {
        const subArray = [];
        subArray.push(webTechs[i]);
        subArray.push(webTechs[i].length);
        array.push(subArray);
    }
    console.log(array);
}

function exerciseTwoThirteen(){
    let mern = "";

    for(i=0;i<mernStack.length;i++)
    {
        mern += mernStack[i].charAt(0);
    }
    console.log(mern);
}

function exerciseTwoFourteen(){
    for(const num of webTechs)
    {
        console.log(num);
    }
}

function exerciseTwoFifteen(){
    const array = [];
    const fruit =  ['banana', 'orange', 'mango', 'lemon'];

    for(i=1; i<=fruit.length;i++)
    {
        array.push(fruit[fruit.length-i]);
    }
    for(i=1; i<=array.length;i++)
    {
        fruit.pop();
    }
    for(i=0; i<array.length;i++)
    {
        fruit.push(array[i]);
    }
    console.log(fruit);
}

function exerciseTwoSixteen(){
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ];

      for(const num of fullStack)
      {
        for(const numTwo of num){
            console.log(numTwo);
        }
      }
}
function exerciseThreeOne(){
    const array = countries;
    console.log(array);
    array.sort();
    console.log(array, countries);
    //not sure if this satisfies 3.2
}


function exerciseThreeThree(){
    webTechs.sort();
    mernStack.sort();
}

function exerciseThreeFour(){
    const array = [];

    for(i=0;i<countries.length;i++)
    {
        if(countries[i].includes("land"))
        {
            array.push(countries[i]);
            countries.splice(i,1);
        }
    }
    console.log(array,countries)
}

function exerciseThreeFive(){
    let biggest = "";

    for(i=0;i<countries.length;i++)
    {
        if(biggest.length<countries[i].length)
        {
            biggest = countries[i];
        }
    }

    console.log(biggest);
}

function exerciseThreeSeven(){
    const array = [];

    for(i=1;i<countries.length;i++)
    {
        if(countries[i].length===4)
        {
            array.push(countries[i]);
        }
    }
    for(i = 0; i<array.length;i++)
    {
        countries.includes(array[i])
        ?countries.splice(i,1):null;
    }
    console.log(array);
}

function exerciseThreeEight(){
    const array = [];

    for(i=1;i<countries.length;i++)
    {
        // if(countries[i].includes(" ("))
        // {
        //     countries[i]=countries[i].replace(" ","-") //why doesnt it replace?   
        //     console.log(countries[i]);
        // }
        if(countries[i].includes(" "))
        {
            array.push(countries[i]);
        }
    }

    for(i = 0; i<array.length;i++)
    {
        countries.includes(array[i])
        ?countries.splice(i,1):null;
    }

    console.log(array);
}
console.log(exerciseThreeEight());


function exerciseThreeNine(){
    const array = countries.reverse();
    for(i = 0; i<countries.length; i++)
    {
        array[i] = array[i].toUpperCase();
    }
    console.log(array);
}

