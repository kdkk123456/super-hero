canvas=new fabric.Canvas("myCanvas")
bw=30
bh=30
px=30
py=30
playerimage=""
blocimage=""
function updateplayer() {
    fabric.Image.fromURL("player.png",function (Img) {
        playerimage=Img;
        playerimage.scaleToWidth(100);
        playerimage.scaleToHeight(100);
        playerimage.set({
            top:py,left:px
        });
        canvas.add(playerimage);
    });
}
function updateblock(block) {
    fabric.Image.fromURL(block,function (Img) {
        blocimage=Img;
        blocimage.scaleToWidth(bw);
        blocimage.scaleToHeight(bh);
        blocimage.set({
            top:py,left:px
        });
        canvas.add(blocimage);
    });
}
window.addEventListener("keydown",kd)
function kd(e) {
    x=e.keyCode
    console.log(x)
    if (x==38){
        console.log ("up is press")
        up();
    }
    if (x==37){
        console.log ("left is pressed")
        left()
    }
    if (x==39){
        console.log ("right is pressed")
        right()
    }
    if (x==40){
        console.log("down is pressed")
        down()
    }
    if (x==67){
        updateblock("cloud.jpg");
        console.log("c is pressed");
    }
    if (x==68){
        updateblock("dark_green.png");
        console.log ("d is pressed");
    }
    if (x==71){
        updateblock('ground.png');
        console.log ("g is pressed");
    }
    if (x==76){
        updateblock("light_green.png");
        console.log ("l; is pressed");
    }
    if (x==84){
        updateblock("trunk.jpg");
        console.log ("t is pressed");
    }
    if (x==82){
        updateblock("roof.jpg");
        console.log ("r is pressed");
    }
    if (x==78){
        updateblock("unique.png");
        console.log ("n is pressed");
    }
    if (x==89){
        updateblock("yellow_wall.png");
        console.log ("y is pressed");
    }
    if (e.shiftKey==true && x==80){
        bw=bw+10
        bh=bh+10
        document.getElementById("width").innerHTML=bw
        document.getElementById("height").innerHTML=bh
    }
    if (e.shiftKey==true && x==77){
        bw=bw-10
        bh=bh-10
        document.getElementById("width").innerHTML=bw
        document.getElementById("height").innerHTML=bh
    }
}
function up() {
    if (py>=30){
        py=py-bh
        canvas.remove(playerimage)
        updateplayer()
    }
}
function down() {
    if (py<=500) {
        py=py+bh
        canvas.remove(playerimage)
        updateplayer()
    }
}
function left() {
    if (px>=30)
    px=px-bw
    canvas.remove(playerimage)
    updateplayer()
}
function right() {
    if (px<=670)
    px=px+bw
    canvas.remove(playerimage)
    updateplayer()
}