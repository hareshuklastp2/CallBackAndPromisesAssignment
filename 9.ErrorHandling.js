let retreieveData=async (url)=>{
    try {
        let response=await fetch(url);
        let data=await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

let data=await retreieveData("https://jsonplaceholder.typicode.com/posts/123456789");
console.log(data);