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