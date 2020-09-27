
//slider function
function slide() {
 var x = document.getElementById("likeDisney").value;
 if (x>80) {
document.getElementById("opinion").innerHTML="I love it!!";
}
else if (x>60) {
document.getElementById("opinion").innerHTML="I like it!";
}
else if (x>40) {
document.getElementById("opinion").innerHTML="It's ok!";
}

else if (x>20) {
document.getElementById("opinion").innerHTML="It could be better!";
}
else {
document.getElementById("opinion").innerHTML="Not so much!";
}
}
//changing image function
function mouseOverImage() {
    document.getElementById("pic").src = "images/donald_right.png";
}

function mouseOutImage() {
    document.getElementById("pic").src = "images/donald_left.png";
}

//dropdown selection function
function outputData() {
    var x = document.getElementById("name").value;
	document.getElementById("characterName").innerHTML = x;
	if (x=="Donald Duck") {
document.getElementById("disneyName").innerHTML="Donald Duck";	
document.getElementById("movie").innerHTML="Duck Tales";
document.getElementById("bestFriend").innerHTML="Mickey Mouse";
document.getElementById("archNemesis").innerHTML="Humphrey the Bear";
document.getElementById("sigOther").innerHTML="Daisy Duck";
document.getElementById("favouriteSaying").innerHTML="'Oh boy, oh boy, oh boy...'";
document.getElementById("character").src = "images/donald_right.png";
}
else if (x=="Minnie Mouse") {
document.getElementById("disneyName").innerHTML="Minnie Mouse";
document.getElementById("movie").innerHTML="Who Framed Roger Rabbit";
document.getElementById("bestFriend").innerHTML="Clarabelle Cow";
document.getElementById("archNemesis").innerHTML="Madeline Mouse";
document.getElementById("sigOther").innerHTML="Micky Mouse";
document.getElementById("favouriteSaying").innerHTML="'Aren't you sweet?'";
document.getElementById("character").src = "images/minnie.png";
}
else if (x=="Snow White") {
document.getElementById("disneyName").innerHTML="Snow White";
document.getElementById("movie").innerHTML="Snow White and the Seven Dwarfs";
document.getElementById("bestFriend").innerHTML="Huntsman";
document.getElementById("archNemesis").innerHTML="The Evil Queen";
document.getElementById("sigOther").innerHTML="Prince Florian";
document.getElementById("favouriteSaying").innerHTML="'There's no use in grumbling when the raindrops are tumbling'";
document.getElementById("character").src = "images/snowwhite.png";
}

else if (x=="Maleficient") {
document.getElementById("disneyName").innerHTML="Maleficient";
document.getElementById("movie").innerHTML="Sleeping Beauty";
document.getElementById("bestFriend").innerHTML="Crow";
document.getElementById("archNemesis").innerHTML="Princess Aurora";
document.getElementById("sigOther").innerHTML="None";
document.getElementById("favouriteSaying").innerHTML="'No power on earth can change it!'";
document.getElementById("character").src = "images/maleficient.png";
}
else if (x=="Pinocchio") {
document.getElementById("disneyName").innerHTML="Pinocchio";
document.getElementById("movie").innerHTML="Pinocchio";
document.getElementById("bestFriend").innerHTML="Jiminy Cricket";
document.getElementById("archNemesis").innerHTML="Honest John Foulfellow";
document.getElementById("sigOther").innerHTML="None";
document.getElementById("favouriteSaying").innerHTML="'I should've listened to you, Jiminy'";
document.getElementById("character").src = "images/pinocchio.png";
}
}




//navigation button function on mouseOver
function mouseOverNav() {
    document.getElementById("expandingMenu").style.display="flex";
}
//navigation button function on mouseOut
function mouseOutNav() {
    document.getElementById("expandingMenu").style.display="none";
}


//randomly select character
function myRandom() {
var x = Math.floor( Math.random() * 5 ) + 1;
document.getElementById("demo").value;
if (x==1) {
document.getElementById("disneyName").innerHTML="Donald Duck";	
document.getElementById("movie").innerHTML="Duck Tales";
document.getElementById("bestFriend").innerHTML="Mickey Mouse";
document.getElementById("archNemesis").innerHTML="Humphrey the Bear";
document.getElementById("sigOther").innerHTML="Daisy Duck";
document.getElementById("favouriteSaying").innerHTML="'Oh boy, oh boy, oh boy...'";
document.getElementById("character").src = "images/donald_right.png";
}
else if (x==2) {
document.getElementById("disneyName").innerHTML="Minnie Mouse";
document.getElementById("movie").innerHTML="Who Framed Roger Rabbit";
document.getElementById("bestFriend").innerHTML="Clarabelle Cow";
document.getElementById("archNemesis").innerHTML="Madeline Mouse";
document.getElementById("sigOther").innerHTML="Micky Mouse";
document.getElementById("favouriteSaying").innerHTML="'Aren't you sweet?'";
document.getElementById("character").src = "images/minnie.png";
}
else if (x==3) {
document.getElementById("disneyName").innerHTML="Snow White";
document.getElementById("movie").innerHTML="Snow White and the Seven Dwarfs";
document.getElementById("bestFriend").innerHTML="Huntsman";
document.getElementById("archNemesis").innerHTML="The Evil Queen";
document.getElementById("sigOther").innerHTML="Prince Florian";
document.getElementById("favouriteSaying").innerHTML="'There's no use in grumbling when the raindrops are tumbling'";
document.getElementById("character").src = "images/snowwhite.png";
}

else if (x==4) {
document.getElementById("disneyName").innerHTML="Maleficient";
document.getElementById("movie").innerHTML="Sleeping Beauty";
document.getElementById("bestFriend").innerHTML="Crow";
document.getElementById("archNemesis").innerHTML="Princess Aurora";
document.getElementById("sigOther").innerHTML="None";
document.getElementById("favouriteSaying").innerHTML="'No power on earth can change it!'";
document.getElementById("character").src = "images/maleficient.png";
}
else if (x==5) {
document.getElementById("disneyName").innerHTML="Pinocchio";
document.getElementById("movie").innerHTML="Pinocchio";
document.getElementById("bestFriend").innerHTML="Jiminy Cricket";
document.getElementById("archNemesis").innerHTML="Honest John Foulfellow";
document.getElementById("sigOther").innerHTML="None";
document.getElementById("favouriteSaying").innerHTML="'I should've listened to you, Jiminy'";
document.getElementById("character").src = "images/pinocchio.png";
}
}





