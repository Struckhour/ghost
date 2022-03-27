<script setup lang="ts">
    import { ref } from 'vue'
    import Scopemenu from './Scopemenu.vue'
    import Riflemenu from './Riflemenu.vue'

    const T5XIData = ref({'416 SCOUT': [100, 200, 300, 400, 525], '416 SCOUT MAWL-DA': [100, 225, 350, 500, 650], '416 SCOUT RANGE FINDER': [100, 250, 375, 550, 700]})

    let selectedRifle = ref('416 SCOUT RANGE FINDER');

    const selectedScope = T5XIData.value;

</script>

<template>
    <body class="bg-slate-900 w-screen h-screen text-white">
        <img src="../assets/breakpoint.jpg" class="w-96 h-20 m-auto rounded-md object-cover">
        <div class="h-[90%]">
            <div class="h-[80%] w-[40%] absolute left-2/4 -translate-x-2/4 mt-8 border border-red-700">

                <img src="../assets/BP-T5XISight.jpg" class="h-[100%] w-[100%] object-cover m-auto">

                <!-- SCOPE MENU -->

                  <div>
                    <div class="absolute top-[2%] left-[45%] -translate-x-[4.5rem]">
                        <Scopemenu />
                    </div>
                </div>

                <!-- RIFLE MENU -->

                <div>
                    <div class="absolute top-[2%] left-[60%]">
                        <Riflemenu />
                    </div>
                </div>

                <!-- T5XI RANGE LABELS -->

                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[48%] left-[50%] -translate-x-[5rem]">{{'<' + selectedScope[selectedRifle][0]}}m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[51%] left-[54%]">{{selectedScope[selectedRifle][1]}}m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[54%] left-[50%] -translate-x-[4.5rem]">{{selectedScope[selectedRifle][2]}}m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[57.5%] left-[54%]">{{selectedScope[selectedRifle][3]}}m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[61%] left-[50%] -translate-x-[4.5rem]">{{selectedScope[selectedRifle][4]}}m</div>
                <div class="absolute bg-green-900 px-2 rounded-lg text-lg top-[67%] left-[54%]">{{selectedScope[selectedRifle][5] ? selectedScope[selectedRifle][5] + 'm' : ''}}</div>
            </div>
        </div>

    </body>

</template>