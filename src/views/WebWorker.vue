<template>
  <div></div>
</template>

<script>
//RUN WEB WORKER WW.JS
const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}

export default {
  name: "WebWorker",
  components: {},
  methods: {}
};
</script>

<style>
html {
  background-color: #7D2663;
  font-family: sans-serif;
}

h1 {
  margin: 0;
  font-size: 15vw;
  letter-spacing: -0.2rem;
  position: absolute;
  top: 0;
  z-index: -1;
}

p {
  margin: 0;
}

.controls {
  padding: 4vw;
  width: 75%;
  margin: 10vw auto;
  background-color: rgba(255, 255, 255, 0.7);
  border: 5px solid black;
  opacity: 0.3;
  transition: 1s all;
}

.controls:hover,
.controls:focus {
  opacity: 1;
}

.controls label,
.controls p,
.controls input {
  font-size: 3vw;
}

.controls div {
  padding-bottom: 1rem;
}
</style>
