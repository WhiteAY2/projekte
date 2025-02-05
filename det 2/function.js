 //FUNCTIONS
 function add(a,b){
    return a + b;
}
console.log(add(2,3));
//find max string
function maxString(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > max.length){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxString(arr1));