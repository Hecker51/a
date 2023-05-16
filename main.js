function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelocarregado)
}




function draw() {
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResult)
}


function modelocarregado() {
  console.log("karegando")
}


var previousResult = '';

function gotResult(error, result) {
  if (error == true) {
    console.log("erradão")

  }
  else {
    console.log(result)
    if ((result[0].confidence > 0.5) && (previousResult != result[0].label)) {
      previousResult = result[0].label;
      var synth = window.speechSynthesis;
      speakData = ' o objeto detectado é  -  ' + result[0].label;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis)
      var alg2 = result[0].label
      var algo2 = result[0].confidence

      document.getElementById("a1").innerHTML = alg2;
      document.getElementById("a2").innerHTML = algo2.toFixed(2);
    }
  }
}