 function greeting(value){
    return new Promise((resolve) =>{
        let  greet = `Hello ${value}`
        resolve(greet);
    })
    }
    greeting("mithun")
    .then((message) =>{ console.log(message) })

