let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers);  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
};

let userTwo = userOne;

let userThree = {
    name: "Asabeneh"
};

console.log(typeof userThree.name == typeof userOne.name);  // true