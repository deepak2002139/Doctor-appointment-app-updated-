var i = 0;
var img = [];
var time = 1200;

img[0] = "banner3.png";
img[1] = "banner5.jpg";
img[2] = "banner6.jpg";

function img_change(){
    
    document.slide.src = img[i];
    if(i < img.length - 1)
        {
            i++;
        }
    else{
        i = 0;
    }
    setTimeout(img_change,time);
}
window.onload = img_change;