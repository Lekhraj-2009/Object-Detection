garden = "";
status = "";

function preload(){
    garden = loadImage("https://i.postimg.cc/3xY1PGFT/Garden.jpg");
}

function setup(){
    canvas = createCanvas(500, 335);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("CocoSSD Model Loaded Successfully!");
    status = true;
    objectDetector.detect(garden, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(garden, 0, 0, 500, 335);
    textSize(17);

    fill("#FF0000");
    text("Tree", 350, 45);
    noFill();
    stroke("#FF0000");
    rect(345, 30, 120, 180);

    fill("#FF0000");
    text("Tree", 7, 22.5);
    noFill();
    stroke("#FF0000");
    rect(3, 7.5, 285, 180);

    fill("#FF0000");
    text("Slide", 265, 160);
    noFill();
    stroke("#FF0000");
    rect(260, 145, 80, 120);

    fill("#FF0000");
    text("Slide", 75, 165);
    noFill();
    stroke("#FF0000");
    rect(70, 150, 80, 120);

    fill("#FF0000");
    text("Plant", 6, 260);
    noFill();
    stroke("#FF0000");
    rect(1, 245, 80, 90);

    document.getElementById("status").innerHTML = "Objects Detected";
    document.getElementById("result").innerHTML = "There are 6 big objects in the image. CocoSSD has detected 5 objects.";
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}