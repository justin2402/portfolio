<template>
  <div id="app">
    <div class="main">
      <svg id="rotatingText" viewBox="0 0 200 200" width="60%" height="50vh">
        <defs>
          <path  id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
          </path>

        </defs>
        <text fill="white" width="400">

          <textPath  fill="white" alignment-baseline="top" xlink:href="#circle" class="text">

            <router-link style="fill: white; font-size: small" class="aboutme" to="/aboutme"> About Me -</router-link>
            <router-link style="fill: white; font-size: small"  class="projects" to="/projects"> Projects -</router-link>
            <router-link style="fill: white; font-size: small" class="hobbies" to="/hobbies"> Hobbies -</router-link>
            <router-link style="fill: white; font-size: small" class="skills" to="/skills"> Skills -</router-link>
            <router-link style="fill: white; font-size: small"  to="/"> Home</router-link>
          </textPath>
        </text>
      </svg>


    </div>






    <router-view/>
  </div>
</template>


<script setup>
</script>
<style>
body {
  width: 100%;
  height: 100%;
  z-index: 100;
  display: grid;
  background: black;
}





.text {
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Comic Sans MS",serif;
  font-size: 17px;
  letter-spacing: 1.7px;


}

#socials{
  letter-spacing: 15px;
}
.text:hover{
  text-shadow: none;
}

#rotatingText {
  animation-name: rotate-circle;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  max-width: 400px;
}

@keyframes rotate-circle {
  to {
    transform: rotate(1turn);
  }
}

.main {
  display: grid;
  align-items: center;
  justify-items: center;

}

.main img {
  position: absolute;
}

.main img {
  position: absolute;
  animation-name: rotate-circle;
  animation-direction: reverse;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;


}

</style>