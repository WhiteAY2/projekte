 //student average age
 let students = [
    {name: "John", age: 20},
    {name: "Jane", age: 25},
    {name: "Jim", age: 30},
    {name: "Jill", age: 35},
]
function averageAge(students){
    let total = 0;
    for (let i = 0; i < students.length; i++){
        total += students[i].age;
    }
    return total / students.length;
}
console.log(averageAge(students));
//object merge
let obj1 = {
    name: "John",
    age: 20,
}
let obj2 = {
    hobby: "programming",
    job: "developer",
}
function merge(obj1,obj2){
    return {...obj1, ...obj2};
}
console.log(merge(obj1, obj2));
//cart total
let cart = [
    {name: "apple", price: 2},
    {name: "banana", price: 3},
    {name: "orange", price: 4},
    {name: "kiwi", price: 5},
    {name: "grape", price: 6},
]
function totalCart(cart){
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        total += cart[i].price;
    }
    return total;
}
console.log(totalCart(cart));