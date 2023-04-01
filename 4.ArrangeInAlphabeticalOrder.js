let list=[
    {
        title:"def",
        author:"abc",
        year:2009
    },
    {
        title:"ghi",
        author:"def",
        year:2014
    },
    {
        title:"jkl",
        author:"ghi",
        year:2012
    }
];


let sortAlphOrder=(list, logNewListInAlphabeticalOrder)=>{
    let newList=list.map((el)=>{
        return el.title;
    });
    return logNewListInAlphabeticalOrder(newList);
}
let logNewListInAlphabeticalOrder=(list)=>{
    console.log(list.sort());
}
sortAlphOrder(list, logNewListInAlphabeticalOrder);
