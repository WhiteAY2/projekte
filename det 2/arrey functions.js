let arr = [1,2,3,4,5,6,7,8,9,10];
    let max = 0;
    function maxNum(arr){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
    //reverese array
    let reverse = "";
    for (let i = arr.length - 1; i >= 0; i--){
        reverse += arr[i];
    }
    console.log(reverse);
    //FILTER
    let arr1 =["applee","banana","kiwi","orange","grape"];
    let amita = arr1.filter(function(fruit){
        return fruit.length > 5;
    });
    console.log(amita);
    //reduce()function?
    //map()function ?