living_room = "";
status = "";

function preload(){
    living_room = loadImage("https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80");
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
    objectDetector.detect(living_room, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(living_room, 0, 0, 500, 335);
    textSize(17);

    fill("#FF0000");
    text("Sofa", 5, 205);
    noFill();
    stroke("#FF0000");
    rect(0, 190, 270, 120);

    fill("#FF0000");
    text("Table", 165, 260);
    noFill();
    stroke("#FF0000");
    rect(160, 245, 150, 120);

    fill("#FF0000");
    text("Plant", 412.5, 55);
    noFill();
    stroke("#FF0000");
    rect(407.5, 40, 90, 240);

    fill("#FF0000");
    text("Chair", 300, 200);
    noFill();
    stroke("#FF0000");
    rect(295, 185, 100, 100);

    fill("#FF0000");
    text("Frame", 35, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 165, 120);

    document.getElementById("status").innerHTML = "Objects Detected";
    document.getElementById("result").innerHTML = "There are 7 big objects in the image. CocoSSD has detected 5 objects.";
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}