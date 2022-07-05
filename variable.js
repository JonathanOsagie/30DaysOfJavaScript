const challenge = '30 Days Of JavaScript';
const company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

const companyList = company.split(',');

const because  = 'You cannot end a sentence with because because because is a conjunction';

const challengeWhite = ' 30 Days Of JavaScript ';

const python = challenge.replace('JavaScript', 'Python');

// console.log(because.indexOf('because'));
// console.log(because.search('because'));
//what is the difference between search and indexof?
let expres = /a/gi;

function findAPosition()
{
    let position = challenge.indexOf('a');

    for(i = 0; i<challenge.length; i++){

    }
    
}

let num = parseFloat('9.8');

function setNum()
{
    if(num != 10){
        num = 10;
    }
    return num;
}

function check(a,b)
{
    const pression = /on/;
    if( a.match(pression) != null && b.match(pression)!= null){
        return true;
    }
    else{
        return false;
    }
} 

const sentence = "I hope this course is not full of jargon. ";

//console.log(sentence.includes('jargon'));

const rando = Math.random() * 51;
const roundRando = Math.floor(rando) + 50;
//console.log(roundRando);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

//Access the 'JavaScript' string characters using a random number.

//console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8');

//console.log(because.substr(because.indexOf('because'),23));

// const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// console.log(because.match(/because/gi).length);

const cleanUp = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleaned = cleanUp;
let wordList;

cleaned = cleaned.replace(/%/g, '');
cleaned = cleaned.replace(/@/g, '');
cleaned = cleaned.replace(/\$/g, '');
cleaned = cleaned.replace(/#/g, '');
cleaned = cleaned.replace(/&/g, '');

console.log(cleaned);




