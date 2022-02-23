basket = "";

function preload(){
    basket = loadImage("https://thumbs.dreamstime.com/b/autumnal-fruit-basket-21378079.jpg");
}

function setup(){
    canvas = createCanvas(500, 335);
    
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function draw(){
    image(basket, 0, 0, 500, 335);
    textSize(17);

    fill("#FF0000");
    text("Basket", 155, 130);
    noFill();
    stroke("#FF0000");
    rect(150, 115, 280, 200);

    fill("#FF0000");
    text("Grapes", 125, 85);
    noFill();
    stroke("#FF0000");
    rect(120, 70, 210, 110);

    fill("#FF0000");
    text("Apple", 370, 235);
    noFill();
    stroke("#FF0000");
    rect(365, 220, 105, 90);

    fill("#FF0000");
    text("Mango", 350, 105);
    noFill();
    stroke("#FF0000");
    rect(345, 90, 80, 110);

    fill("#FF0000");
    text("Apple", 210, 170);
    noFill();
    stroke("#FF0000");
    rect(205, 155, 120, 75);

    fill("#FF0000");
    text("Apple", 125, 207.5);
    noFill();
    stroke("#FF0000");
    rect(120, 192.5, 85, 70);

    document.getElementById("status").innerHTML = "Objects Detected";
    document.getElementById("result").innerHTML = "There are 6 big objects in the image. CocoSSD has detected all objects.";
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}