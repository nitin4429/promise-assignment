async function fetch(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos1");
    let output = await data.json();
    console.log(output);
}
fetch();