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