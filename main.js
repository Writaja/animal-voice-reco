function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TY6i6Krgt/model.json",modleReady);

}
function modleReady(){
    classifier.classify(gotResults);
}
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TY6i6Krgt/model.json",modleReady);

}
function modleReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        random_no_r=Math.floor(Math.random()*255)+1;
        random_no_b=Math.floor(Math.random()*255)+1;
        random_no_g=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("resuld_conficence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
document.getElementById("result_conficence").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
img1=document.getElementById("aliene1");
img2=document.getElementById("aliene2");
img3=document.getElementById("aliene3");
img4=document.getElementById("aliene4");
if(results[0].label=="Barking"){
    img1.src="98-983301_cute-cute-cartoon-dog-png.png";
    
}
else if(results[0].label=="Meowing"){
    img1.src="68-686080_kitten-cartoon-cat-clipart-job-opening-white-kittens-cartoon-imsges-of-kittens.png";
   
}
else if(results[0].label=="Roaring"){
    img1.src="unnamed.png";
    
}
else if(results[0].label=="Chirping"){
    img1.src="d1tca4d-39b0299d-9356-4858-828c-0d0d595e8f65.jpg";
    
}



    }
}