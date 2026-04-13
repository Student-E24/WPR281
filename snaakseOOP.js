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