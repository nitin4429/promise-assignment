const person = {
    first_name:"mithun",
    last_name:"s",
    age:20,
}
function ageINDays(personname,callback){
    let full_name = `${personname.first_name}${personname.last_name}`;
    let personage = personname.age*365;
     return callback(full_name,personage);
}
function callback(full_name,personage){
    console.log(`The person's fullname is ${full_name} and their age in days ${personage}`);
}
ageINDays(person,callback);



