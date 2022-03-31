<script setup lang="ts">
    import { ref } from 'vue'

    const showBScope = ref(false);
    const showWScope = ref(false);


</script>

<template>
    <body class="bg-slate-900 w-screen h-screen">
        <h1 class="text-[#5d6e4e] text-center text-4xl w-3/5 max-w-[500px] m-auto border-b border-gray-200" style="font-family:angel;">The Ultimate Ghost Recon Bullet Drop Compendium</h1>
        <h2 class="text-white mt-6 text-center text-xl">Choose a game</h2>
        <div class="h-96 sm:w-[48rem] w-[400px] m-auto mt-4 grid sm:grid-cols-2 grid-cols-1 gap-2">

<!-- BREAKPOINT LINK -->
            <router-link to="/app/Breakpoint"><img @mouseout="showBScope=false" src="../assets/transparentscope.png" v-show="showBScope" class="absolute h-[19rem] w-[19rem]  sm:translate-x-10 translate-x-[50px] -translate-y-1 z-40 rounded-full">

                <img v-show="!showBScope" @mouseover="showBScope=true" src="../assets/breakpoint.jpg"  class="h-72 w-72 m-auto object-cover opacity-100 hover:opacity-100 rounded-full">
                <img v-show="showBScope" src="../assets/breakpoint.jpg"  class="h-72 w-72 m-auto object-cover opacity-80 rounded-full">
            </router-link>

<!-- WILDLANDS LINK -->
            <router-link to="/app/Wildlands">
            <img @mouseout="showWScope=false" src="../assets/transparentscope.png" v-show="showWScope" class="absolute h-[19rem] w-[19rem] sm:translate-x-[2.2rem] translate-x-[46px] sm:-translate-y-1 z-40 -translate-y-[3px] rounded-full">

                <img v-show="!showWScope" @mouseover="showWScope = true" src="../assets/wildlands.jpg" class="w-72 h-72 object-cover opacity-100 hover:opacity-100 m-auto hover:border-black rounded-full">
                <img v-show="showWScope" src="../assets/wildlands.jpg" class="w-72 h-72 object-cover opacity-80 m-auto rounded-full">
            </router-link>

        </div>
    </body>

</template>
