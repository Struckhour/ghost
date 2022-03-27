<script setup lang="ts">
    import { ref } from 'vue'
    import Scopemenu from './Scopemenu.vue'
    import Riflemenu from './Riflemenu.vue'

    const T5XIData = ref({'416 SCOUT': [100, 200, 300, 400, 525], '416 SCOUT MAWL-DA': [100, 225, 350, 500, 650], '416 SCOUT RANGE FINDER': [100, 250, 375, 550, 700]})

    const fullT5XIData = ref({
        '416 SCOUT':[100,200,300,400,525,],
        '416 SCOUT MAWL-DA':[100,225,350,500,650,],
        '416 SCOUT RANGE FINDER':[100,250,375,550,700,],
        '553 SCOUT':[75,200,275,375,500,],
        '553 SCOUT MAWL-DA':[75,225,325,475,625,],
        '553 SCOUT RANGE FINDER':[75,225,350,525,675,],
        'AK74 SCOUT':['not ranged yet'],
        'FRF2':[150,260,325,390,466,580,],
        'G28':[133,290,425,585,],
        'G28 WILDERNESS MAWL-DA':[125,325,515,715,],
        'G28 WILDERNESS RANGE FINDER':[125,350,575,],
        'G28 SCOUT':[,],
        'G36C SCOUT':[75,175,275,375,475,],
        'G36C SCOUT MAWL-DA':[75,200,300,450,600,],
        'G36C SCOUT RANGE FINDER':[75,225,350,500,650,],
        'HTI SURVIVAL':[200,345,445,560,666,800,],
        'L115A3':[150,300,400,510,625,750,],
        'M110':[100,225,315,425,535,],
        'M110 MAWL-DA':[100,250,375,525,660,808,],
        'M110 RANGE FINDER':[100,270,400,580,725,],
        'M4A1 SCOUT':[100,200,250,325,400,],
        'M4A1 SCOUT MAWL-DA':[100,225,300,400,500,],
        'M4A1 SCOUT RANGE FINDER':[125,225,325,425,475,],
        'M82':[175,325,440,580,720,],
        'MK14':[,],
        'MK14 MAWL-DA':[175,260,320,390,460,566,],
        'MK14 RANGE FINDER':[,],
        'MK14 ASSAULT':[,],
        'MK17 SCOUT':[100,275,400,575,700,],
        'MK17 SCOUT RANGE FINDER':[100,325,550,775,],
        'MSR':[175,275,325,390,450,555,],
        'PALADIN 9':[70,233,366,560,],
        'SCORPIO SCOUT':[170,275,340,415,490,],
        'SR-1':[175,440,650,]
        })




    let selectedRifle = ref(Object.keys(fullT5XIData.value)[14]);

    const selectedScope = fullT5XIData.value;

    let scopeTitle = ref('T5XI')

</script>

<template>
    <body class="bg-slate-900 w-screen h-screen text-white">
        <img src="../assets/breakpoint.jpg" class="w-96 h-20 m-auto rounded-md object-cover">
        <div class="h-[90%]">
            <div class="h-[80%] w-[40%] absolute left-2/4 -translate-x-2/4 mt-8">

                <img src="../assets/BP-T5XISight.jpg" class="h-[100%] w-[100%] object-cover m-auto rounded-2xl">

                <!-- SCOPE MENU -->

                  <div>
                    <div class="absolute top-[2%] left-[45%] -translate-x-[4.5rem] z-50">
                        <Scopemenu />
                    </div>
                </div>

                <!-- RIFLE MENU -->

                <div>
                    <div class="absolute top-[2%] left-[60%] z-50">
                        <Riflemenu />
                    </div>
                </div>

                <!-- T5XI RANGE LABELS -->
                <div class="absolute text-black px-2 rounded-lg text-2xl top-[20%] left-[30%] -translate-x-[5rem] z-0">Scope: {{scopeTitle}}</div>
                <div class="absolute text-black px-2 rounded-lg text-2xl top-[30%] left-[30%] -translate-x-[5rem]">Rifle: {{selectedRifle}}</div>
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