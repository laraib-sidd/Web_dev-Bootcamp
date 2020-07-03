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

// More
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]
Promise.all(urls.map(url => {
    fetch(url).then(resp => resp.json())
})).then(array =>{
    console.log('users',array[0])
    console.log('posts',array[1])
    console.log('albums',array[2])
}).catch('Oops');


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
// More
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function(){
    try{
    const [users,posts,albums] = await Promise.all(urls.map(url => {
        fetch(url).then(res => res.json())
    }))
    console.log('users',users)
    console.log('posts',posts)
    console.log('albums',albums)
    }
    catch{
        console.log('There had been some error')
    }
}


// -----------Exercise------------

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]