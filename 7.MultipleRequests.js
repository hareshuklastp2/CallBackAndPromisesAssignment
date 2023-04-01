async function returnObj(){
    function retrieveData(url){
        return new Promise((resolve, reject)=>{
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          })});
    }
    let toDoVal=await retrieveData("https://jsonplaceholder.typicode.com/todos/1")
    let postVal=await retrieveData("https://jsonplaceholder.typicode.com/posts/1");
    let obj={
        toDo:toDoVal,
        post:postVal
    };
    console.log(obj);
    return obj
    }
    returnObj();
    