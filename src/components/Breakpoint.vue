<script setup lang="ts">
    import { ref } from 'vue'

    let show = ref(false);
    const isOpen = () => (show.value = !show.value);

</script>




<template>
    <body class="bg-slate-900 w-screen h-screen text-white">
        <img src="../assets/breakpoint.jpg" class="w-96 h-20 m-auto rounded-md object-cover">
        <div class="h-[90%]">
            <div class="h-[80%] w-[100%] absolute m-auto mt-8 border border-red-700 grid grid-cols-3">
                <ul class="">
                    <h3 class="text-lg underline">Scopes</h3>
                    <li>T5XI</li>
                    <li>scopey 2</li>
                </ul>
                <img src="../assets/BP-T5XISight.jpg" class="h-[100%] w-[100%] object-cover m-auto">



                  <div>
                    <div class="absolute top-[0%] left-[46%]">
                    <!-- Dropdown toggle button -->
                    <button
                        @click="isOpen"
                        class="flex items-center p-2 text-black bg-slate-100 rounded-md"
                    >
                        <span class="mr-4">Scopes</span>
                        <svg
                        class="w-5 h-5 text-slate-900 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <div
                        v-show="show"
                        class="absolute right-0 py-2 mt-2 bg-slate-100 rounded-md shadow-xl  w-44"
                    >
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-indigo-100"
                        >
                        Dropdown List 1
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-indigo-100"
                        >
                        Dropdown List 2
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-indigo-100"
                        >
                        Dropdown List 3
                        </router-link>
                    </div>
                    </div>
                </div>


                    <!-- RANGE LABELS -->


                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[51%] left-[44%]">150m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[54.5%] left-[51%]">200m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[58%] left-[44%]">250m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[61%] left-[51%]">375m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[67%] left-[44%]">500m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[72%] left-[51%]">600m</div>
            </div>
        </div>

    </body>

</template>