Webcam.set({
    width=400,
    height=350,
    image_format='jpeg',
   jpeg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
webcam.snap(function(data_uri)
}
