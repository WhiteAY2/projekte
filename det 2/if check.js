function evenOdd(num){
    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
    console.log(evenOdd(7));
    //
    function pozitivETC(num){
        if (num === 0){
            return "zero";
        }
        else if (num < 0){
            return "negative";
        }
        else if (num >= 1) {
            return "positive";
        }
    }
    console.log(pozitivETC(0));
    //leep year 
    function leepyear(year){
        if (year % 4 === 0 ){
            return"leep year";
            if (year % 100 === 0){
                return "leep year";
                if (year % 400 === 0){
                    return "leep year";
                }
                else{
                    return "not leep year";
                }
            }
            else {
                return "not leep year";
            }
        }
        else{
            return "not leep year";
        }
    }
    console.log(leepyear(2021))
    // 
    function vote(age){
        if (age >= 18){
            return "you can vote";
        }
        else {
            return "you can't vote";
        }
    }
    console.log(vote(19));