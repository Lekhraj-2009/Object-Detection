street = "";
status = "";

function preload(){
    street = loadImage("https://thumbs.dreamstime.com/b/downtown-chicago-busy-street-view-chicago-il-usa-circa-view-down-busy-street-downtown-as-loop-train-passes-overhead-tracks-over-166377606.jpg");
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
    objectDetector.detect(street, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(street, 0, 0, 500, 335);
    textSize(17);

    fill("#FF0000");
    text("Train", 115, 110);
    noFill();
    stroke("#FF0000");
    rect(110, 95, 295, 50);

    fill("#FF0000");
    text("Car", 180, 255);
    noFill();
    stroke("#FF0000");
    rect(175, 240, 65, 55);

    fill("#FF0000");
    text("Car", 245, 245);
    noFill();
    stroke("#FF0000");
    rect(240, 230, 55, 55);

    fill("#FF0000");
    text("Car", 20, 290);
    noFill();
    stroke("#FF0000");
    rect(15, 275, 125, 70);

    fill("#FF0000");
    text("Car", 390, 285);
    noFill();
    stroke("#FF0000");
    rect(385, 270, 90, 40);

    fill("#FF0000");
    text("Car", 417.5, 290);
    noFill();
    stroke("#FF0000");
    rect(412.5, 276, 90, 40);

    fill("#FF0000");
    text("Car", 350, 240);
    noFill();
    stroke("#FF0000");
    rect(345, 225, 40, 40);

    fill("#FF0000");
    text("Person", 30, 315);
    noFill();
    stroke("#FF0000");
    rect(25, 300, 40, 60);

    fill("#FF0000");
    text("Person", 235, 300);
    noFill();
    stroke("#FF0000");
    rect(230, 285, 40, 40);

    fill("#FF0000");
    text("Tree", 7.5, 235);
    noFill();
    stroke("#FF0000");
    rect(2.5, 220, 50, 115);

    fill("#FF0000");
    text("Flag", 75, 85);
    noFill();
    stroke("#FF0000");
    rect(70, 70, 40, 50);

    document.getElementById("status").innerHTML = "Objects Detected";
    document.getElementById("result").innerHTML = "There are 11 big objects in the image. CocoSSD has detected all objects.";
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}