function move(params) {
    var what;
    switch(direction){
        case "forward" :
        what = "you enter a monster";
        break;
        case "back" :
        what = "you arrived home";
        break;
        case "right" :
        what = "you found a river";
        break;
        case "left" :
        what = "you run into a troll";
        break;
        default:
            what = "please a enter valid directions";
    }
    return what;
}