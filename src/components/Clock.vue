<template>
  <div>
    <p class="clock"></p>
  </div>
</template>

<script>
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector(".clock").textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);

export default {
  name: "Cam",
  components: {},
  methods: {}
};
</script>

<style>
p {
  font-family: sans-serif;
}
</style>
