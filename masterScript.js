let arr = [2, 8, 1, 4, 6];

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;
}

console.log(bubbleSort(arr));


let date = new Date

let dayOfWeek = date.getDay()

switch (dayOfWeek) {
    case 1:
        alert("Monday")
        break;
    case 2:
        alert("Tuesday")
        break;
    case 3:
        alert("Wednsday")
        break;
    case 4:
        alert("Thursday")
        break;
    case 5:
        alert("Friday")
        break;
    case 6:
        alert("Weekend")
        break;
    case 7:
        alert("Weekend")
        break;
    default:
        break;
}


let myFave = {
    title: "lasagna",
    servings: 2,
    ingrediens: ["Tamato", "Garlic", "Mince", "sauce", "love"]
}

console.log(myFave.title)
console.log("--------------------------------------------")
console.log(`serves: ${myFave.servings}`)
console.log("Ingrediens:")

for (let i = 0; i < myFave.ingrediens.length; i++) {
    console.log(`♥ ${myFave.ingrediens[i]}`)
}

let num = prompt("gooi 'n nommer")

if (num > 0) {
    alert("positive")
}
else if(num = 0)
{
    alert("ZERO")
}
else if(num < 0)
{
    alert("negatief")
}

let rye = 5;

for (let i = 1; i <= rye; i++) {
    let lyne = "";
    
    for (let j = 1; j <= i; j++) {
        lyne += "* ";
    }
    
    console.log(lyne);
}

for (let i = 1; i < 14; i++) {
    let row = "-"
    for (let j = 1; j < i; j++) {
        row += (i*j);
        row += j<i? "--":"-"
        
    }
    
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// lower triangle
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log(matrix[i][j])
    }
}

// each row
for (let element of matrix) {
    console.log(element)
}

// flatten
let myNewArray = matrix.flat()
console.log(myNewArray)

 //console.log("Fok yaa");

 //let firstName ="Mieg"
 //let lastName ="GrootVoëlBoer"
 
 //let fullName = firstName +" "+ lastName

 //console.log(fullName)


 //let middelName

 //console.log(middelName)

 //let secondMiddelName

 //console.log(secondMiddelName)

 //const pi = 22/7

 //console.log(pi)

//let currentDate = new Date()

 //console.log(currentDate.getFullYear())
  //console.log(currentDate.getMonth())
   //console.log(currentDate.getDay())
    //console.log(currentDate.getDate())
     //console.log(currentDate.getHours())
      //console.log(currentDate.getMinutes())
       //console.log(currentDate.getSeconds())
       //console.log(currentDate.getMilliseconds())


       //let name = prompt("enter ur name")
      // let age = prompt("hoe oud is jy jou naaier?")

       //if (age >= 18)
      //  {
        //    alert(`Hi ${name} you may send mieg all the money you won`)
       // }
        //else{
       //     alert("you are very to much young.")
        //}


        //let name = prompt("name?")
        //let age = age("age?")
        //let phoneNum = prompt("phone number bbg?")

        let name = "Ewald"
        let age = 37
        let phoneNum = "0828809179"

       let option = prompt
        (`
        1. show age
        2. show name    
        3. show phone number
        
        
        Kies asseblief een van hierbo`)

        switch (option) {
            case "1":
                alert(`${name}`)
                break;
            case "2":
                alert(age)
                break;
            case "3":
                alert(phoneNum)
                break;
            default:
                break;
        }

        let student ={
    name: "Johnathan",
    surname: "Rob",
    language: "English",
    age: "",
    get lang()
    {
        return this.language
    },
    set setAge(MyAge)
    {
        this.age = MyAge
    }
}
student.age = prompt("Gooi daai age")
console.log(student.lang)
console.log(student.age)

//array a1 = []
//array a2 = a1

//Constructor object

let person = Object()

//real syntax
let person2 = {}

//preffered method
let person3 =
    {
        //name(key) = lhs// value rhs
        numOfLegs : 2,
        height : "OesLank",
        persoonlikheid: "Befok",
        canHike : false
    }

    person3.monsterDrinksPerDay = prompt("how many monsters drink jy?")

    console.log(person3)

    for (let john in person3) {
        
        console.log(john + ": " + person3[john])
        
    }


    function constructPerson(fName, sName, age, height)
{
    this.FName = fName
    this.SName = sName
    this.Age = age
    this.Height = height
}

let firstname = prompt("Wat is jou naam?")
let surname = prompt("Wat is jou van?")
let ouderdom = prompt("Hoe oud is jy?")
let hoogte = prompt("Hoe hoog is jy?")

let personn = new constructPerson(firstname, surname, ouderdom, hoogte)

for(let key in personn)
{
    alert(key + ": " + personn[key])
}

let displayString =""
//Display Data
for(let key in personn)
{
    displayString += (key + ": " + personn[key]+ `/n`)
}

alert(displayString)

let libray =
    [
        {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
        },
        {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
        },
        {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
        }
    ]

    for (var i = 0; i < library.length; i++) {
        var book = libray [i]
         book.status ? "Already read" : "Not read yet";

             console.log(book.title + " by " + book.author + " - " + status);
    }

let student ={
    name: "Johnathan",
    surname: "Rob",
    language: "English",
    age: "",
   
}


let myKeys = Object.keys(student)

for(let key of myKeys)
{
    console.log(key)
}

let myEntries = Object.entries(student)

for(let key of myEntries)
{
    console.log(key)
}

for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var status = book.readingStatus ? "Already read" : "Not read yet";
  
    console.log(book.title + " by " + book.author + " - " + status);
}
