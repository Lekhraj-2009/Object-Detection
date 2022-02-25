street = "";
status = "";
objects = [];

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
    objects = results;
}

function draw(){
    image(street, 0, 0, 500, 335);
    
    if (status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Objects Detected";
            fill("#FF0000");
            textSize(17);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        document.getElementById("result").innerHTML = "There are 11 big objects in the image. CocoSSD has detected "+i+" objects.";
    }
}

function back(){
    setTimeout(function(){
        window.location = "index.html";
    }, 250);
}