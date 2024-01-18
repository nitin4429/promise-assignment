
 function manipulateString(string,callback){
    const strings = string.toUpperCase();
     return callback(strings);
 }
 function callback(string){
    console.log(`manipulated string is :${string}`)
 }

 manipulateString("hello",callback);