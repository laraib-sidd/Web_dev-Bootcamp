// ----------ES9--------------
// Object spread operator
const animals ={
    tiger : 32,
    lion : 5,
    monkey: 2,
    bird: 43
}
const {tiger,lion,...rest} = animals;

// ----ES6-----
const arr = [1,2,3,4,5];
function sum(a, b, c, d, e){
    return a + b + c + d + e;
}
sum(...arr);
sum(arr);

// More
function objectSpread(p1, p2, p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

objectSpread(tiger, lion, rest);


// finally
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
)).then(arr => {
    console.log('1', arr[0])
    console.log('2', arr[1])
    console.log('3', arr[2])
    console.log('4', arr[3])
})
.catch(err => console.log('There might be some issue',err))
.finally(() => console.log('Done'))

// finally : It will run irrespective there is any error or not.

// await old
const getData = async function(){
    try{
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        const data = await fetch(url);
        const js = await data.json();
        return js
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
    }
    catch(err){
        console.log('Theres has been an error',err);
    }
}

// for await of
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]
const getData = async function(){
    const arrayofpromises = urls.map(url => fetch(url))
    for await (let req of arrayofpromises){
        const data = await req.json()
        console.log(data)
    }
}

// ---------------More Examples---------------
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}


const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here'))




const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json();
    console.log(data)
  }
}
//In this case, for-await takes each item from the array and waits for it to resolve.
//   You'll get the first response even if the second response isn't ready yet,
// but you'll always get the responses in the correct order.


