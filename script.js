const textarea = document.querySelector("textarea"), 
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth =speechSynthesis;

function voices(){
  for(let voice of synth.getVoices()){
      let selected = voice.name === "Google US English" ? "" : "";

      let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
      voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);


function textToSpeech(text){
  let utterance = new SpeechSynthesisUtterance(text);
  for(let voice of synth.getVoices()){
    if(voice.name === voiceList.value){
        utterance.voice = voice;
    }
  }
  speechSynthesis.speak(utterance);

}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});
