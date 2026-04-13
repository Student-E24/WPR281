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

let person = new constructPerson(firstname, surname, ouderdom, hoogte)

for(let key in person)
{
    alert(key + ": " + person[key])
}

let displayString =""
//Display Data
for(let key in person)
{
    displayString += (key + ": " + person[key]+ `/n`)
}

alert(displayString)