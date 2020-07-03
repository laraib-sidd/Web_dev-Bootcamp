// -------------ES8----------------
// Promise
movePlayer(100,'Left')
    .then(()=> movePlayer(400,'Left'))
    .then(()=> movePlayer(10,'Right'))
    .then(()=> movePlayer(300,'Left'))

// Apicall
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(res => console.log(res))

// Async Await
async function playerstart(){
    const firstMove = await movePlayer(100,'Left'); //Pause
    await movePlayer(400,'Left'); //Pause
    await movePlayer(10,'Right'); //Pause
}
// Apicall
async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data)
}