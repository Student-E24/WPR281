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