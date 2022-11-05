var time = 1200;
var arr = [];
var i = 0;
arr[0] = "doc.jpg";
arr[1] = "doc3.jpg";
arr[2] = "speak-patient.jpg";
arr[3] = "bl10.jpg";
function changeimg() {

    document.banner.src = arr[i];
    if (i < arr.length - 1)
        {
            i++;
        }
    else
        {
            i=0;
        }
    setTimeout(changeimg,time);
}
window.onload = changeimg;