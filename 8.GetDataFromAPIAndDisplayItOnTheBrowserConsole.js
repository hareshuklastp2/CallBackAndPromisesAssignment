async function retrieveData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await response.json();
    return data;
}
let data=await retrieveData();
console.log(data);