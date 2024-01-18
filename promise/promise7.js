async function combinedata(){
    const [data1,data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) =>
            response.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => 
            response.json()
        ),
    ])

    const combine = {
        todos: data1,
        post: data2,
    }
    return combine;
}
combinedata().then((data) =>{ console.log(data)});