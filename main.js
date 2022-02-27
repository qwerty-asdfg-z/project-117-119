Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sBh2fve97/model.json',modelLoaded)

function modelLoaded(){
    console.log('Model Loaded!');
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult)
}
function speak() {
    var synt=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synt.speak(utterThis);

}
function gotresult(error,results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=='Amzing')
        {document.getElementById("update_emoji").innerHTML="&#128522";
    }
    if(results[0].label=='Best')
    {document.getElementById("update_emoji").innerHTML="&#128532";
    
}
if(results[0].label=='Victory')
    {document.getElementById("update_emoji").innerHTML="&#128548";
    
    }
    if(results[1].label=='Amzing')
    {document.getElementById("update_emoji2").innerHTML="&#128522";
}
if(results[1].label=='Best')
{document.getElementById("update_emoji2").innerHTML="&#128532";

}
if(results[1].label=='Victory')
{document.getElementById("update_emoji2").innerHTML="&#128548";

}

    }
}