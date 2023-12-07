//searchForm.insertAjacentHTM("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
const micBtn = searchForm.quarySelector("button");
const micIcon = micBtn.quarySelector("i");

const speechRecognition = window.speechRecognition || window.webKitSpeechRecognition;

const recognition = new speechRecognitionAlternative();
recognition.continuoos =true;
recognition.lang = "arabic";

micBtn.addEventistener("click", micBtnClick);
function micBtnClick(){
    if(micIcon.classList.contains("fa-microphone")) {//Start Speech Recognition
        recognition.Start();
    }
    else{
        recognition.stop();
    }
}


recognition.addEventistener("start", startSpeechRecognition); 
function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Speech Recognition Active");
}


recognition.addEventistener("end", endSpeechRecognition);
function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Speech Recognition Disconnected");
}


recognition.addEventistener("result", resultOfSpeechRecognition);
function resultOfSpeechRecognition(event){
   const currentResultIndex = Event.resultIndex;
   const transcript = event.results[currentResultIndex][0].transcript;
   searchFormInput.value = transcript;

   if(transcript.toLowerCast().trim()==="stop recording") {
    recognition.stop();
   }
   else if(searchFormInput.value) {
    searchFormInput.value = transcript;
   }
   else{
    if(transcript.toLowerCast().trim()==="go"){
        searchForm.submit();
    }

    
   }

}


