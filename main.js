function preload() {

}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 500, 400);
    fill("red");
    stroke("red");
    ellipse(56, 46, 45, 45);
    fill("blue");
    stroke("blue");
    rect(45, 67, 20, 270);
    fill("red");
    stroke("red");
    ellipse(56, 350, 45, 45);
    fill("blue");
    stroke("blue");
    rect(75, 340, 350, 20);
    fill("red");
    stroke("red");
    ellipse(430, 350, 45, 45);
    fill("blue");
    stroke("blue");
    rect(420, 330, 20, -270);
    fill("red");
    stroke("red");
    ellipse(430, 46, 45, 45);
    fill("blue");
    stroke("blue");
    rect(409, 35, -335, 20);
}

function take_snapshot() {
    file_name = prompt("Please enter the file name you want to download", "")
    if(file_name == null) {
        alert("Prompt Cancelled");
    }

    else {
        save(file_name + ".jpg");
    }
}