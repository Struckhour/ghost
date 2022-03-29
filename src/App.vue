<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <body>
    <router-view></router-view>
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
  overflow-y: scroll;
  overflow-x: hidden;
}

#app {

}

body {
  background-color: rgb(15,23,42);
  padding-top: 4px;
}
</style>
