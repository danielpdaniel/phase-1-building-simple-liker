// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll("span.like-glyph");

// for (element of hearts){
//   element.addEventListener("click", function(event){
//     let targetedElement = event.target
//     console.log(targetedElement);
//     // element.currentTarget.textContent = FULL_HEART;
//   })
// }

// function addClick(array){
//   for (i = 0; i < array.length; i++){
//     array[i].addEventListener("click", function(){
//       console.log(`i'm number ${i}`)
//     })
//   } 
// }
// addClick(hearts);

for(element of hearts){
  element.addEventListener("click", function(event){
    let clickedHeart = event.target
    mimicServerCall(clickedHeart)
    .then(() => {
      if(clickedHeart.className === "like-glyph"){
      clickedHeart.textContent = FULL_HEART;
      clickedHeart.className = "activated-heart";
      } else if (clickedHeart.className === "activated-heart"){
        clickedHeart.textContent = EMPTY_HEART;
        clickedHeart.className = "like-glyph";
      }
    console.log(clickedHeart);
  })
    .catch(() => {
      const errorMessage = document.getElementById("modal");
    errorMessage.className = "hey lol";
    setTimeout(function(){
      errorMessage.className = "hidden";
    }, 3000)
    console.log(errorMessage);
  })
})
}




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
