// refrence type

let obj1 = {value: 10};
let obj2 = obj1;
let obj3 = {value : 10};

// context vs scope

this.alert('hello');
// this refers to what object you are inside of.
const obj = {
    a: () => console.log(this),
}

// instantiation
class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}.`);
    }
}

class Wizard extends Player{
    constructor(name,type){
    super(name,type)
    }
    play(){
        console.log(`WEEEEEEEEEEEEEEE I am a ${this.type}`);
    }
}

const wiz1 = new Wizard("Sham","Badass");
const wiz2 = new Wizard("Shaun","Goodass");

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


  //Create an array using map that has all the usernames with a "? to each of the usernames


  //Filter the array to only include users who are on team: red


  //Find out the total score of all users using reduce

  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })

  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
