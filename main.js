// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").hidden = true;

let heartClass = document.getElementsByClassName("like-glyph");
let errorModal = document.getElementById("modal");
console.log(heartClass);

for (const element of heartClass) {
  
  element.addEventListener("click", function(event){
    mimicServerCall()
    .then(function (response){
      console.log(response);
      let elementSpan = event.target;
      
      if(element.classList.contains("activated-heart")){
        elementSpan.innerText = EMPTY_HEART;
        elementSpan.removeAttribute("class", "activated-heart");
      }else{
        elementSpan.innerText = FULL_HEART;
        elementSpan.setAttribute("class", "activated-heart");
      }
      return response;
    })
    .catch(function (error){
      console.log(error);
      document.getElementById("modal").hidden = false;
      errorModal.innerText = error;
      setTimeout(() => {document.getElementById("modal").hidden = true}, 3000);
    })
  });
}

/*
function myFunction(event){
  mimicServerCall()
    .then(function (response){
      console.log(response)
      let a = event.target;
      console.log(a)
      return response;
    })
    .catch(function (error){
      console.log(error);
      document.getElementById("modal").hidden = false;
      errorModal.innerText = error;
      setTimeout(() => {document.getElementById("modal").hidden = true}, 3000);
    })
    //element.innerText=FULL_HEART;
  }
*/

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
