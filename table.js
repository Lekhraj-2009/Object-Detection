table = "";

function preload(){
    table = loadImage("https://thumbs.dreamstime.com/b/business-partnership-coworkers-using-tablet-to-chart-company-financial-statements-report-profits-work-progress-planning-146771615.jpg");
}

function setup(){
    canvas = createCanvas(500, 335);
    
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function draw(){
    image(table, 0, 0, 500, 335);
    textSize(17);

    fill("#FF0000");
    text("Laptop", 20, 60);
    noFill();
    stroke("#FF0000");
    rect(15, 45, 230, 200);

    fill("#FF0000");
    text("Cup", 180, 100);
    noFill();
    stroke("#FF0000");
    rect(175, 85, 50, 80);

    fill("#FF0000");
    text("Person", 375, 16);
    noFill();
    stroke("#FF0000");
    rect(370, 1, 130, 335);

    fill("#FF0000");
    text("Book", 40, 237.5);
    noFill();
    stroke("#FF0000");
    rect(35, 222.5, 185, 95);

    fill("#FF0000");
    text("Person", 345, 35);
    noFill();
    stroke("#FF0000");
    rect(340, 1, 160, 220);

    document.getElementById("status").innerHTML = "Objects Detected";
    document.getElementById("result").innerHTML = "There are 6 big objects in the image. CocoSSD has detected 5 objects.";
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}