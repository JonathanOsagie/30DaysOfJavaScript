const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

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

console.log(exerciseOneFifteen(6));
