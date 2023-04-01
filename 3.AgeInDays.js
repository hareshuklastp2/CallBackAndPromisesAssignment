let person={
    firstName:"Hare Krishna",
    lastName:"Shukla",
    age:23
}
let ageInDays=(person, logResult)=>{
    return logResult(person);
}
ageInDays(person, logResult);
function logResult(person){
    console.log(`The person's full name is ${person.firstName} ${person.lastName} and their age in days is ${person.age*365}.`);
}
