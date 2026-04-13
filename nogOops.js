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