<script setup lang="ts">
    import { ref } from 'vue'

    let show = ref(false);
    const isOpen = () => (show.value = !show.value);


    let show2 = ref(false);
    const isOpen2 = () => (show2.value = !show2.value);

</script>




<template>
    <body class="bg-slate-900 w-screen h-screen text-white">
        <img src="../assets/breakpoint.jpg" class="w-96 h-20 m-auto rounded-md object-cover">
        <div class="h-[90%]">
            <div class="h-[80%] w-[40%] absolute left-2/4 -translate-x-2/4 mt-8 border border-red-700">

                <img src="../assets/BP-T5XISight.jpg" class="h-[100%] w-[100%] object-cover m-auto">



                  <div>
                    <div class="absolute top-[2%] left-[10%]">
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
                        Dual Range
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-indigo-100"
                        >
                        T5XI
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-indigo-100"
                        >
                        TARS101
                        </router-link>
                    </div>
                    </div>
                </div>

                <!-- RIFLE MENU -->

                <div>
                    <div class="absolute top-[2%] left-[60%]">
                    <!-- Dropdown toggle button -->
                    <button
                        @click="isOpen2"
                        class="flex items-center p-2 text-black bg-slate-100 rounded-md"
                    >
                        <span class="mr-4">Rifles</span>
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
                        v-show="show2"
                        class="absolute right-0 py-2 mt-2 bg-slate-100 rounded-md shadow-xl w-44"
                    >
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-slate-100"
                        >
                        Dropdown List 1
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-slate-100"
                        >
                        Dropdown List 2
                        </router-link>
                        <router-link
                        to="/"
                        class="block px-4 py-2 text-sm text-slate-900  hover:bg-green-800 hover:text-slate-100"
                        >
                        Dropdown List 3
                        </router-link>
                    </div>
                    </div>
                </div>



                    <!-- RANGE LABELS -->


                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[48%] left-[50%] -translate-x-[4.5rem]">100m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[51%] left-[54%]">200m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[54%] left-[50%] -translate-x-[4.5rem]">300m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[58%] left-[54%]">400m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[62%] left-[50%] -translate-x-[4.5rem]">525m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[72%] left-[51%]"></div>
            </div>
        </div>

    </body>

</template>