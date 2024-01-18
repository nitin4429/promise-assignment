let books = [
    {
        title:"the rock",
        author:"Neelam",
        year:2010,
    },
    {
        title:"who am i ",
        author:"Rakesh",
        year:2001,
    },
    {
        title:"hello Brother",
        author:"Sallu Bhai",
        year:2013,
    }
]
function alpha(book,callback){
 let titles = book.map((titles) =>{
    console.log(titles.title);
 })
 callback(titles);
}
function logTitle(titles){
    // titles.sort();
    console.log(titles)
}
alpha(books,logTitle);