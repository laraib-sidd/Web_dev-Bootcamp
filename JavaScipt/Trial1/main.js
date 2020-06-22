var database =[
{
    username : "laraib",
    password : "secret"
},
{
    username : "shaquib",
    password : "secret2"
},
{
    username : "maa",
    password : "123"
}
];

var news_feed = [
    {
        username : "Bobby",
        timeline : "SO tired from all this learning"
    },
    {
        username : "Sally",
        timeline : "Javascript is soooo cooool."
    }
];

var username = prompt("What's your username?");
var password = prompt("What's your password?");


function is_user_valid(user, pass){
    for (var i = 0; i< database.length;i++){
    if (user === database[i].username &&
        pass === database[i].password){
            return true
    }
    return false
}
}

function sign_in(user, pass){
    if (is_user_valid(user,pass)){
        console.log(news_feed);
    }
    else{
        alert("Sorry, wrong username and password")
    }
}


sign_in(username,password)

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i = 0; i < todos.length; i++){
    console.log(todos[i])
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// var j = 0;
// do{
//     console.log(j);
//     j++;
// }

// todos.forEach(function{
//    console.log(i);
//})
