let manipulateString=(str, logString)=>{
    return logString(str);
}

manipulateString("hello, world!", logString);
function logString(str){
    console.log(str.toUpperCase());
}