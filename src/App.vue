<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, computed } from 'vue'


const selectedGame = ref('Breakpoint')


</script>

<template>
  <body :class="selectedGame === 'Breakpoint' ? 'breakpoint' : 'wildlands'">
    <router-view @gameChoice="(game: string) => (selectedGame = game)"></router-view>
  </body>


</template>

<style>

@font-face {
  font-family: "ZCOOL";
  src: local("ZCOOL"),
   url(./assets/fonts/ZCOOLQingKeHuangYou-Regular.ttf) format("truetype");
}


@font-face {
  font-family: "angel";
  src: local("angel"),
   url(./assets/fonts/AngelArms-lp1d.ttf) format("truetype");
}


html {
  overflow-x: hidden;
  background-color: black;
}

@media screen and (min-width: 600px) {
  html {
    overflow-y: scroll;
  }
  .breakpoint{
    height:100vh;
  }
  .wildlands{
    height:100vh;
  }
}


.breakpoint {
  background-color: #161926;
  padding-top: 4px;
  height: 1000px;

}

.wildlands {
  background-color: #262014;
  padding-top: 4px;
  height: 1000px;

}
</style>
