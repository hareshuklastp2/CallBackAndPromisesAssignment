let greet=(name)=>{
    return new Promise(function(){
        console.log(`Hello, ${name}`);
    });
}
greet("Hare Krishna");