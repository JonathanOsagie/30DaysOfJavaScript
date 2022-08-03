function exerciseLevel1(){
    const dog = {};

    console.log(dog);
    dog.name = "steve";
    dog.legs = 4;
    dog.age = 12;
    dog.color = "black";
    dog.bark = function() { 
        return "woof woof";
    };
    console.log(dog, dog.bark());
    dog.breed = "poodle";
    dog.getDogInfo = `Name: ${dog.name}, Age: ${dog.age}, Legs: ${dog.legs}, Color: ${dog.color}, Breed: ${dog.breed}, Bark: ${dog.bark()}`;
    console.log(dog.getDogInfo);
}

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  //console.log(Object.values(users));

function exerciseTwoTwo(object){
    const usersObjectArray = Object.values(object);

    let countLoggedIn = 0;
    let countGreaterPoints = 0;
    for(i= 0; i<usersObjectArray.length; i++)
    {
        if(usersObjectArray[i].isLoggedIn){
            ++countLoggedIn;
        }
        if(usersObjectArray[i].points>= 50){
            ++countGreaterPoints;
        }

    }
    console.log(countLoggedIn,countGreaterPoints,usersObjectArray);
}

function exerciseTwoThree(){
    const usersArray = Object.entries(users)
    for(i = 0;i< usersArray.length; i++)
    {
        if(usersArray[i][1].skills.includes("MongoDB","Express","React","Node")){
            console.log(usersArray[i][0]);
        }
    }
}

function exerciseTwoFour(){
    const newUsersObject = {...users};
    newUsersObject.Jonathan = {
        email: 'jonathan@jonathan.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
        age: 23,
        isLoggedIn: true,
        points: 40
      };
    console.log(newUsersObject);
}

const user = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

function genereateId() {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for(i = 0; i<user.length; i++){
        if(user[i]._id === result)
        {
            genereateId();
        }
    }
    return result;

}

let setName ="";
let setEmail = "";
const date = new Date();
const year = date.getFullYear();

function generateUserName(name){
    let checkName = false;
    for(let i = 0; i<user.length; i++){
        if(user[i].username === name)
        {
            checkName = true;
        }
    }
    if(checkName)
    {
        generateUserName(prompt("Please choose a different name!","Karl"));
    }else{
        setName = name;
    }
    return setName;
}

function generateUserMail(mail){
    let checkEmail = false;
    for(let i = 0; i<user.length; i++){
        if(user[i].email === mail)
        {
            checkEmail = true;
        }
    }
    if(checkEmail)
    {
        generateUserName(prompt("Please choose a different e-mail!","asab@asab.com"));
    }else{
        setEmail = mail;
    }
    return setName;
}

function generateDate(){ //accidentally did exercise lvl 3 in this already
    const month = date.getMonth()<10 ? '0'+date.getMonth():date.getMonth();
    const day = date.getDay()<10 ? '0'+date.getDay():date.getDay();
    const hour = date.getHours()<10 ?'0'+date.getHours():date.getHours();
    const minute = date.getMinutes()<10 ?'0'+date.getMinutes():date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
}

function signUp(){
    const id = genereateId();
    const userName = generateUserName(prompt("Username","Thomas"));    
    const eMail = generateUserMail(prompt("E-Mail","Thomas"));
    const password = prompt("Password","123456");
    const created =generateDate();

    user.push({_id: id, username: userName, email: eMail, password: password, createdAt: created, isLoggedIn: false});

    console.log(user);
}

function signIn(name, password){
    for(i = 0; i<user.length; i++)
    {
        if(user[i].username === name && user[i].password === password)
        {
            user[i].isLoggedIn = true;
        }
    }
}

function rateProduct(productName){
    const id = genereateId();
    const rating = prompt("Please leave a rating","5");
    switch(true){
        case products[0].name === productName:
            products[0].ratings.push({userId: id, rate : rating});
            break;
        case products[1].name === productName:
            products[1].ratings.push({userId: id, rate : rating});
            break; 
        case products[2].name === productName:
            products[2].ratings.push({userId: id, rate : rating});
            break;
        default:
            console.log("Please choose an existing product");  
    }
}

function averageRating(productName){
    let avg = 0;
    let ratingArray = [];
    for(i = 0; i<products.length; i++)
    {
        if(products[i].name === productName)
        {
            ratingArray = products[i].ratings;
        }
    }

    for(i = 0; i<ratingArray.length; i++)
    {
        avg += ratingArray[i].rate;
    }

    return avg/ratingArray.length;
}

function likeProduct(name, productName){
    let currentUser;
    for(i = 0; i<user.length; i++)
    {
        if(user[i].username === name)
        {
            currentUser = user[i]._id;
        }
    }
    for(i = 0; i<products.length; i++)
    {
        if(products[i].name === productName)
        {
            if(products[i].likes.includes(currentUser))
            {
                products[i].likes.splice(products[i].likes.indexOf(currentUser),1);
            }else{
                products[i].likes.push(currentUser);
            }
        }
    }
}

//console.log(signUp());
