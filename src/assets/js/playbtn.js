import React from 'react';
import ReactDOM from 'react-dom/client';

function PlayBtn(props){
// var audio = document.getElementById("myAudio"); 
// // alert("Hola");
// function playAu() { 
//     audio.play(); 
  
// } 

// function pauseAu() { 
//     audio.pause(); 
// } 

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});
}

export default PlayBtn;