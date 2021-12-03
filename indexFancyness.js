function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function newMeme(){
    var int = Math.floor(Math.random() * 26)
    document.getElementById("ranMeme").src = "memes/" + Math.floor(Math.random() * 26);

    document.getElementById("test0").innerHTML = "lol it works";
}

function hateClick(){
    alert("you gay >:D")

    document.getElementById("fucked").innerHTML = "Get fucked";
}