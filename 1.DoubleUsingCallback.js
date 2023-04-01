let arr=[3,2,6,5,7];
let doubleEachElement=(arr, callBack)=>{
    return callBack(arr);
};
let callBack=(arr)=>{
    return arr.map(e=>2*e);
}

let doubleArr=doubleEachElement(arr, callBack);
console.log(doubleArr);