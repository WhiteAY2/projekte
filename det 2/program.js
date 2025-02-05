//fibonacci()
function fibonacci(n){
    let arr = [0,1];
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}
console.log(fibonacci(50));
//book sort by specific author
let books = [
    {title: "The Alchemist", author: "Paulo Coelho"},
    {title: "The Hobbit", author: "J.R.R. Tolkien"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {title: "The Catcher in the Rye", author: "Paulo Coelho"},
]
function bookSort(books, author){
    let arr = [];
    for (let i = 0; i < books.length; i++){
        if (books[i].author === author){
            arr.push(books[i].title);
        }
    }
    return arr;
}
console.log(bookSort(books, "Paulo Coelho"));