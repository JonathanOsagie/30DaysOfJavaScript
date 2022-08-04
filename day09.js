const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','F'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const callBack = function(value){
    console.log("Current value: " + value);
};

// countries.forEach(callBack);
// names.forEach(callBack);
// numbers.forEach(callBack);

//1.6
const countriesUpper = countries.map( x => x.toUpperCase());
//1.7
const countriesLength = countries.map(x => x.length);
//1.8
const numberSquare = numbers.map(x => x*x);


//1.9 && 1.10 wut?

//1.11
const CountryLand = countries.filter( x => x.includes('land'));
//1.12
const countryLengthSix = countries.filter(x => x.length === 6);
//1.13
const countryLengthBiggerSix = countries.filter(x => x.length >= 6);
//1.14
const countryStartwithE = countries.filter(x => x.startsWith('E'));
//1.15
const prices = products.filter(x => (x.price > 0) );
//1.16
function getStringLists(array){
    const newArray = array.map(element => "" + element);
    return newArray;
}
//1.17
const sum = numbers.reduce( (x,y) => x+y );
//1.18
const concatenate = countries.reduce((x,y)=> x +","+y, "Estonia") +" are northern European countries";

//2.1
const totalPrice = products.map(x => x.price).filter(x => (x > 0)).reduce((y,z) => y+z,0);

//2.2 what?

//2.3
function categorizeCountries(category)
{
  const common = countries.filter((country) => country.includes(category));
  return common;
}

//2.4
// const letterArray = [];
// const obj = {};
// for(let i = 0; i < countries.length; i++){
//   const currentValue = countries[i][0];
//   if(typeof obj[currentValue] === 'undefined'){
//       obj[currentValue] = 0;
//       for(let x = 0; x <  countries.length; x++){
//           if(currentValue === countries[x][0])
//           {
//               obj[currentValue]++;
//           }
//       }
//   }
// }

// function countLetter(){
//   const letterArray = countries.map(x => x[0]);
//   const count = letterArray.map(x => obj = {letter : x, amount : 0});

//   return count;
// }

const letterArray = [];
for(let i = 0; i < countries.length; i++){
  const currentValue = countries[i][0];
  let obj = {letter : currentValue, amount: 0};
  console.log(obj.letter);
  if(!letterArray.includes(obj.letter)){
      letterArray.push(obj);
      for(let x = 0; x <  countries.length; x++){
          if(currentValue === countries[x][0])
          {
            //console.log(letterArray[x], x);
            //hier dannn amount erhöhen
          }
      }
  }
}

//console.log(letterArray);
