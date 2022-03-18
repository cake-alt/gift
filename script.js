/* The cat is designed By https://codepen.io/abeatrize/pen/LJqYey
The Mad Libs game is inspired by https://codepen.io/bsk/pen/qORgrM

Bongo Cat originally created by @StrayRogue and @DitzyFlama */

(function hello() {
    const x = 5;
    const leftPaw = document.getElementById("leftPaw").classList;
    const rightPaw = document.getElementById("rightPaw").classList;
    const paws = document.getElementById("paws").classList;
    const circles = document.getElementById("circles").classList;
    const rpaws = document.getElementById("rpaws").classList;
    const rcircles = document.getElementById("rcircles").classList;
    //const retweet = document.getElementById("retweet").classList;
    const heart = document.getElementById("heart").classList;
    leftPaw.toggle("leftPaw");
    //rightPaw.toggle("rightPaw");
    paws.toggle("paws");
    circles.toggle("circles");
    rpaws.toggle("paws");
    rcircles.toggle("circles");
    leftPaw.toggle("leftPaw2");
    //rightPaw.toggle("rightPaw2");
    heart.toggle("red");
    // change number for speed
    setTimeout(hello, x * 50);
})();

// Mad Lib function:
var madLibs = function () {

    var storyDiv = document.getElementById("story");
    var device = document.getElementById("device").value;
    // var adjective = document.getElementById("adjective").value;
    var chess = document.getElementById("chess").value;
    var food = document.getElementById("food").value;
    var celebrity = document.getElementById("celebrity").value;
    var body = document.getElementById("body").value;
    var holiday = document.getElementById("holiday").value;
    // Once we create all of our variables, we change the HTML of our story <div> using innerHTML and adding a bunch of strings together, with punctuation and spaces. 
    storyDiv.innerHTML = "Shh! It's your secret birthday today. I want to wish you a very happy birthday. It seems like just yesterday we were watching Evangelion with the eva gang and giggling at the memes of our personality type. My " + device + " has a petname for you. She keeps calling you Enrich whenever you show up hehehe. She thinks you are the icing on the cake! " + "To my charming friend, I wish you live your life like a " + chess + " for a day, " + "have a lifetime supply of " + food + ", " + " go swimming with " + celebrity + " on the beach." + " You always have a special place in our " + body + ". We wish you a happy birthday, we wish you a happy birthday and a happy " + holiday + ".";
}

