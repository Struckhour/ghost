<script setup lang="ts">
  import { ref } from 'vue'
  import GlitchedWriter from 'vue-glitched-writer';


  const showBScope = ref(false);
  const showWScope = ref(false);

  // const showRScope = ref(false);

  const emit = defineEmits(['gameChoice'])

  function chooseBreakpoint() {
    emit('gameChoice', 'Breakpoint')
  }

  function chooseWildlands() {
    emit('gameChoice', 'Wildlands')
  }

</script>

<template>
    <body class="w-screen h-[53rem]">
        <h1 class="text-gray-100 text-center text-xl sm:text-4xl w-3/5 max-w-[500px] m-auto border-b border-gray-200" style="font-family:tops;">The Ghost Recon Bullet Drop Compendium</h1>
        <h2 class="text-gray-300 mt-1 text-center text-xl" style="font-family:capt;">Brought to you by HeavyHawk and Struckhour</h2>
        <h2 class="text-cyan-300 mt-6 text-center text-xl" style="font-family:ZCOOL;">
          <glitched-writer :text="'CHOOSE A GAME'" appear preset="nier" /> </h2>
        <div class="md:w-[48rem] w-[400px] m-auto mt-4 grid md:grid-cols-2 grid-cols-1 gap-2">

<!-- BREAKPOINT LINK -->
            <router-link to="/app/Breakpoint" @click="chooseBreakpoint">
                <img @mouseout="showBScope=false" src="../assets/transparentscope.png" v-show="showBScope" class="absolute h-[19rem] w-[19rem]  md:translate-x-10 translate-x-[50px] -translate-y-[.5rem] z-40 rounded-full">

                <img v-show="!showBScope" @mouseover="showBScope=true" src="../assets/breakpoint.jpg"  class="h-72 w-72 m-auto object-cover opacity-100 hover:opacity-100 rounded-full">
                <img v-show="showBScope" src="../assets/breakpoint.jpg"  class="h-72 w-72 m-auto object-cover opacity-80 rounded-full">
            </router-link>

<!-- WILDLANDS LINK -->
            <router-link to="/app/Wildlands" @click="chooseWildlands" class="">
                <img @mouseout="showWScope=false" src="../assets/transparentscope.png" v-show="showWScope" class="absolute h-[19rem] w-[19rem] md:translate-x-[2.2rem] translate-x-[46px] md:-translate-y-[.5rem] z-40 -translate-y-[.5rem] rounded-full">

                <img v-show="!showWScope" @mouseover="showWScope = true" src="../assets/wildlands.jpg" class="w-72 h-72 object-cover opacity-100 hover:opacity-100 m-auto rounded-full">
                <img v-show="showWScope" src="../assets/wildlands.jpg" class="w-72 h-72 object-cover opacity-80 m-auto rounded-full">
            </router-link>

<!-- RYOR LINK -->
<!-- <router-link to="/app/RYOR" @click="chooseRYOR" class="">
                <img @mouseout="showRScope=false" src="../assets/transparentscope.png" v-show="showRScope" class="absolute h-[19rem] w-[19rem] md:translate-x-[2.2rem] translate-x-[46px] md:-translate-y-[.5rem] z-40 -translate-y-[.5rem] rounded-full">

                <img v-show="!showRScope" @mouseover="showRScope = true" src="../assets/TigerCamo.jpg" class="w-72 h-72 object-cover opacity-100 hover:opacity-100 m-auto rounded-full">
                <img v-show="showRScope" src="../assets/TigerCamo.jpg" class="w-72 h-72 object-cover opacity-80 m-auto rounded-full">
            </router-link>             -->
            <!-- <div>
              <img class="z-0 absolute top-[-5%] left-[23%] object-center h-[100%] w-[55%]" src="../assets/crosscomAlpha.png">
            </div> -->
        </div>
    </body>

</template>
