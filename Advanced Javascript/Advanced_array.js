const arr = [1,2,3,4];
const double = [];

const new_array = arr.forEach((num) => {
    doubel.push(num*2);
})

// map : It always returns an operation.
const map_arr = arr.map(num => {
    return num * 5;
})
const map_array = arr.map(num => num * 2);

// filter : It does a condition check.
const filter_arr = arr.filter(num => {
    return num > 5;
})

const filter_array = arr.filter(num => num > 5);

// reduce

const reduce_array = arr.reduce((accumulator, num) => {
    return accumulator + num
}, 0)

// Exercise
// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },

  ];

  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arr = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

  //Create an array using map that has all the usernames with a "? to each of the usernames
let map_arr = array.map(user => {
    let {username} = user;
    return username = username + "?";
})

  //Filter the array to only include users who are on team: red
let filter_map = array.filter(user =>{
    return user.team === "red";
})

  //Find out the total score of all users using reduce
let total_score = array.reduce((accumulator,user) =>{
    return accumulator + user.score;
},0)


  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })

// (1) Index of the array.active
// (2)
const new_arr = arrayNum.map((num)=>{
    return num *2;
})

  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
    user.items = user.items.map(item =>{
        return item + "!";
    });
    return user;
})