<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'


const selectedGame = ref('Breakpoint')


</script>

<template>
  <body :class="selectedGame === 'Breakpoint' ? 'breakpoint' : 'wildlands'">


    <router-view @gameChoice="(game: string) => (selectedGame = game)" v-slot="{ Component }">

      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>

    </router-view>

  </body>


</template>

<style>

.fade-enter-active{
  transition: opacity 5s;
}

/* .fade-leave-active{
  transition: opacity .2s;
} */


.fade-leave-to{
  opacity: 0;
}

.fade-enter{
  opacity: .5;
}

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


@media screen and (max-width: 550px) {

.breakpoint {
    height: 750px;
    background-color: #161926;
  }
.wildlands {
    height: 750px;
    background-color: #1b170f;
}

}

@media only screen and (min-width: 550px) {
.breakpoint {
  background-color: #161926;
  padding-top: 4px;
  height: 60rem;


}

.wildlands {
  background-color: #1b170f;
  padding-top: 4px;
  height: 60rem;
}
}


</style>
