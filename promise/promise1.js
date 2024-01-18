function doublearr(arr,callback){
    const doublearr = arr.map((num) =>{
        return callback(num);
    })
    return doublearr;
}
let originalarr = [1,2,3,4]
function callback(num){
    return num*2;
}
const doubledarr = doublearr(originalarr,callback);
console.log(doubledarr);