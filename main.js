Webcam.attach('#camera');
camera = document.getElementById("cammera");

webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90

});

function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML ='<img id="selfie_image" src="'+data_uri+'"/>';
}
);
}

consolel.log('ml5 version:', ml5.version);

function modelloaded(){
console.log('Model Loaded!');
}








