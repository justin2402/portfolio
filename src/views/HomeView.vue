<template>


  <div>


    <div class="main">
      <svg id="rotatingText" viewBox="0 0 200 200"  width="200" height="200">
        <defs>
          <path  id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
          </path>

        </defs>
        <text fill="white" width="400">

          <textPath id="socials" fill="white" alignment-baseline="top" xlink:href="#circle" class="text">
            <a style="fill: white" class="aboutme" href="mailto:justinh8100@gmail.com">Email</a>
            -
            <a style="fill: white" class="aboutme" href="https://www.linkedin.com/in/jhidalgo24/">Linkedin</a>
            -
          </textPath>
        </text>
      </svg>


    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style>

</style>