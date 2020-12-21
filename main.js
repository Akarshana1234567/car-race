canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x=20;
car_y=20;
background_image="racing.jpg";
car_image="images.jpeg";
car1_image="images(1).jpeg";
car1_width=100;
car1_height=90;
car1_x=20;
car1_y=20;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
background_imageTag.src=background_image;
car_imageTag=new Image();
car_imageTag.onload=uploadcar;
car_imageTag.src=car_image;
car1_imageTag=new Image();
car1_imageTag.onload=uploadcar1;
car1_imageTag.src=car1_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imageTag,car_x,car_y,car_width,car_height);
}
function uploadcar1(){
    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");
}
}
window.addEventListener("keydown",t_keydown);
function t_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='65'){
    car1_up();
    console.log("a");
}
if(keyPressed=='87'){
    car1_down();
    console.log("w");
}
if(keyPressed=='81'){
    car_1_left();
    console.log("q");
}
if(keyPressed=='76'){
    car1_right();
    console.log("l");
}
}
function up(){
    if(car_y >=0){
        car_y=car_y-10;
        console.log("WHEN UP ARROW IS PRESSED IF X ="+car_x+"y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function down(){
    if(car_y <=500){
        car_y=car_y+10;
        console.log("WHEN DOWN ARROW IS PRESSED IF X ="+car_x+"y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function left(){
    if(car_x >=0){
        car_x=car_x-10;
        console.log("WHEN LEFT ARROW IS PRESSED IF X ="+car_x+"y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function right(){
    if(car_x <=700){
        car_x=car_x+10;
        console.log("WHEN RIGHT ARROW IS PRESSED IF X ="+car_x+"y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function car1_up(){
    if(car1_y >=0){
        car1_y=car1_y-10;
        console.log("WHEN UP ARROW IS PRESSED IF X ="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function car1_down(){
    if(car1_y <=500){
        car1_y=car1_y+10;
        console.log("WHEN DOWN ARROW IS PRESSED IF X ="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function car1_right(){
    if(car1_x <=700){
        car1_x=car1_x+10;
        console.log("WHEN RIGHT ARROW IS PRESSED IF X ="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function car_1_left(){
    if(car1_y >=0){
        car1_x=car1_x+10;
        console.log("WHEN LEFT ARROW IS PRESSED IF X ="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}