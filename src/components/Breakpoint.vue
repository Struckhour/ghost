<script setup lang="ts">
import Scopemenu from "./Scopemenu.vue";
import Riflemenu from "./Riflemenu.vue";
import { ref, computed, getCurrentInstance } from "vue";
import GlitchedWriter from 'vue-glitched-writer';
import { useRoute } from 'vue-router'

const fullData: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: number[]}} } = {
  Breakpoint: {
    'T5XI SIGHT': {

      "416 SCOUT": [100, 200, 300, 400, 525],
      "416 SCOUT MAWL-DA": [100, 225, 350, 500, 650],
      "416 SCOUT RANGE FINDER": [100, 250, 375, 550, 700],
      "553 SCOUT": [75, 200, 275, 375, 500],
      "553 SCOUT MAWL-DA": [75, 225, 325, 475, 625],
      "553 SCOUT RANGE FINDER": [75, 225, 350, 525, 675],
      "AK74 SCOUT": [],
      FRF2: [150, 260, 325, 390, 466, 580],
      G28: [133, 290, 425, 585],
      "G28 WILDERNESS MAWL-DA": [125, 325, 515, 715],
      "G28 WILDERNESS RANGE FINDER": [125, 350, 575],
      "G28 SCOUT": [],
      "G36C SCOUT": [75, 175, 275, 375, 475],
      "G36C SCOUT MAWL-DA": [75, 200, 300, 450, 600],
      "G36C SCOUT RANGE FINDER": [75, 225, 350, 500, 650],
      "HTI SURVIVAL": [200, 345, 445, 560, 666, 800],
      L115A3: [150, 300, 400, 510, 625, 750],
      M110: [100, 225, 315, 425, 535],
      "M110 MAWL-DA": [100, 250, 375, 525, 660, 808],
      "M110 RANGE FINDER": [100, 270, 400, 580, 725],
      "M4A1 SCOUT": [100, 200, 250, 325, 400],
      "M4A1 SCOUT MAWL-DA": [100, 225, 300, 400, 500],
      "M4A1 SCOUT RANGE FINDER": [125, 225, 325, 425, 475],
      M82: [175, 325, 440, 580, 720],
      MK14: [],
      "MK14 MAWL-DA": [175, 260, 320, 390, 460, 566],
      "MK14 RANGE FINDER": [],
      "MK14 ASSAULT": [],
      "MK17 SCOUT": [100, 275, 400, 575, 700],
      "MK17 SCOUT RANGE FINDER": [100, 325, 550, 775],
      MSR: [175, 275, 325, 390, 450, 555],
      "PALADIN 9": [70, 233, 366, 560],
      "SCORPIO SCOUT": [170, 275, 340, 415, 490],
      "SR-1": [175, 440, 650],
    },
    'DUAL RANGE SIGHT': {

        "553 SCOUT": [100, 133, 200, 250, 285, 366, 425, 500],
        "553 SCOUT MAWL-DA": [525],
        "553 SCOUT RANGE FINDER": [],
        FRF2: [150, 225, 300, 350, 410, 485],
        G28: [100, 200, 295, 350, 433, 533, 615, 680, 733],
        "G28 MAWL-DA": [125, 225, 325, 425, 540, 660, 750],
        "G28 WILDERNESS": [100, 200, 295, 350, 433, 533],
        "G28 WILDERNESS MAWL-DA": [125, 225, 325, 425, 540, 660, 750],
        "G28 WILDERNESS RANGE FINDER": [100, 220, 350, 450, 580, 715, 815],
        "G36C Scout": [80, 133, 200, 250, 300, 366, 433, 507],
        "G36C SCOUT MAWL-DA": [80, 150, 230, 290, 360, 450, 550],
        "HTI SURVIVAL": [200, 275, 375, 420, 490],
        L115A3: [150, 233, 325, 375, 450, 533],
        M110: [115, 175, 250, 305, 380, 465, 535],
        "M110 MAWL-DA": [150, 190, 295, 360, 470, 575],
        "M110 RANGE FINDER": [100, 200, 300, 400, 500, 635, 720, 800],
        "M4A1 SCOUT MAWL-DA": [100, 175, 275, 350, 425, 545],
        "M4A1 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        "MK14 MAWL-DA": [125, 200, 270, 300, 350, 400, 450],
        "MK17 SCOUT": [100, 175, 250, 300, 366, 433, 513],
        "MK17 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        "SCORPIO SCOUT": [170, 235, 300, 335, 385, 435, 495, 540],
        "SCORPIO SCOUT QUIET": [200, 225, 275, 313, 350, 400, 450, 480],
        "SVD-63": [150, 219, 275, 300, 340, 380, 425, 480],
      },
    'TARS101': {
        '416 SCOUT':[100,150,200,275,325,375,450,525,575,625,675,],
        '416 SCOUT MAWL-DA':[100,175,250,300,400,475,575,650,],
        '416 SCOUT RANGE FINDER':[],
        '553 SCOUT':[75,150,225,275,350,425,500,],
        '553 SCOUT MAWL-DA':[75,175,250,335,425,525,625,],
        '553 SCOUT RANGE FINDER':[],
        'AUG SCOUT':[100,166,233,290,350,413,490,550,],
        'AUG SCOUT MAWL-DA':[],
        'AUG SCOUT RANGE FINDER':[],
        'FRF2':[160,240,300,360,420,480,540,590,635,670,700,725,750,],
        'G28':[133,200,266,333,400,466,533,600,666,700,745,],
        'G28 MAWL-DA':[125,225,300,400,475,575,666,740,],
        'G28 RANGE FINDER':[133,240,330,420,520,640,],
        'G28 SCOUT':[100,160,195,220,245,270,295,320,350,375,400,420,440,460,480,495,505,],
        'G28 SCOUT MAWL-DA':[100,175,215,250,280,320,350,400,433,466,495,525,550,566,588,604,622,633,644,655,666,],
        'G28 SCOUT RANGE FINDER':[],
        'G28 WILDERNESS':[133,200,266,333,400,466,533,600,666,700,745,],
        'G28 WILDERNESS MAWL-DA':[125,225,300,400,475,575,666,740,],
        'G28 WILDERNESS RANGE FINDER':[133,240,330,420,520,640,],
        'HTI SURVIVAL':[200,300,365,440,510,585,650,700,],
        'M4A1 SCOUT':[],
        'M4A1 SCOUT MAWL-DA':[100,175,250,325,400,475,550,625,680,725,767,797,827,],
        'M4A1 RANGE FINDER':[],
        'L115A3':[150,250,300,350,400,466,525,575,625,666,700,733,760,787,808,827,],
        'L115A3 BALLISTIC ADV.':[200,400,575,],
        'M110':[100,175,240,295,350,410,475,535,590,],
        'M110 MAWL-DA':[100,200,265,340,415,500,585,660,720,760,],
        'M110 RANGE FINDER':[100,200,290,375,455,550,645,725,785,825,],
        'M110 MAWL-DA WITH BALLISTIC ADV.':[100,333,550,875,],
        'M82':[150,250,350,433,500,600,675,750,],
        'MK14 MAWL-DA':[150,225,275,333,400,450,500,550,590,625,650,680,700,],
        'MK17 SCOUT':[100,200,285,366,450,550,],
        'MSR':[175,240,280,320,360,400,440,485,525,550,],
        'RECON-A1':[150,233,290,340,395,450,505,],
        'SCORPIO SCOUT':[170,240,295,340,385,425,480,525,566,605,640,],
        'SR-1':[175,350,450,600,750,],
        'SVD-63':[150,212,273,320,370,420,460,511,762,],
        'TAC50':[100,250,380,550,],
        'TAC50 BROWN':[150,300,400,512,650,750,],
        'VSK-50':[150,250,300,366,425,475,540,595,633,666,700,725,750,],
    }
  },
    Wildlands: {
    'T5XI SIGHT': {

      "416 SCOUT": [100, 200, 300, 400, 525],
      "416 SCOUT MAWL-DA": [100, 225, 350, 500, 650],
      "416 SCOUT RANGE FINDER": [100, 250, 375, 550, 700],
      "553 SCOUT": [75, 200, 275, 375, 500],
      "553 SCOUT MAWL-DA": [75, 225, 325, 475, 625],
      "553 SCOUT RANGE FINDER": [75, 225, 350, 525, 675],
      "AK74 SCOUT": [],
      FRF2: [150, 260, 325, 390, 466, 580],
      G28: [133, 290, 425, 585],
      "G28 WILDERNESS MAWL-DA": [125, 325, 515, 715],
      "G28 WILDERNESS RANGE FINDER": [125, 350, 575],
      "G28 SCOUT": [],
      "G36C SCOUT": [75, 175, 275, 375, 475],
      "G36C SCOUT MAWL-DA": [75, 200, 300, 450, 600],
      "G36C SCOUT RANGE FINDER": [75, 225, 350, 500, 650],
      "HTI SURVIVAL": [200, 345, 445, 560, 666, 800],
      L115A3: [150, 300, 400, 510, 625, 750],
      M110: [100, 225, 315, 425, 535],
      "M110 MAWL-DA": [100, 250, 375, 525, 660, 808],
      "M110 RANGE FINDER": [100, 270, 400, 580, 725],
      "M4A1 SCOUT": [100, 200, 250, 325, 400],
      "M4A1 SCOUT MAWL-DA": [100, 225, 300, 400, 500],
      "M4A1 SCOUT RANGE FINDER": [125, 225, 325, 425, 475],
      M82: [175, 325, 440, 580, 720],
      MK14: [],
      "MK14 MAWL-DA": [175, 260, 320, 390, 460, 566],
      "MK14 RANGE FINDER": [],
      "MK14 ASSAULT": [],
      "MK17 SCOUT": [100, 275, 400, 575, 700],
      "MK17 SCOUT RANGE FINDER": [100, 325, 550, 775],
      MSR: [175, 275, 325, 390, 450, 555],
      "PALADIN 9": [70, 233, 366, 560],
      "SCORPIO SCOUT": [170, 275, 340, 415, 490],
      "SR-1": [175, 440, 650],
    },
  }
}


const gameName = defineProps<{game: string}>()

// const route = useRoute();
// const gameName: string | string[] = route.params.game


const selectedScopeName = ref("T5XI SIGHT");



let selectedRifle = ref(Object.keys(fullData[gameName.game][selectedScopeName.value])[14]);

const rifleNames = computed(() => {
  return Object.keys(fullData[gameName.game][selectedScopeName.value]);
});

const scopeNames = ref(Object.keys(fullData[gameName.game]));

function changeScope(scope: string) {
  if (Object.keys(fullData[gameName.game][scope]).includes(selectedRifle.value)) {
    selectedScopeName.value = scope;
  } else {
    selectedRifle.value = 'Choose a rifle';
    selectedScopeName.value = scope;
  }

}

const ranges = computed(() => {
  return fullData[gameName.game][selectedScopeName.value][selectedRifle.value]
})

const scopeStyles: { [scopeName: string]: string } = {
  'T5XI SIGHT': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;',
  'DUAL RANGE SIGHT': 'color: black;',
  'TARS101': 'color: #1de02d; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #1de02d44, 0 0 15px #1de02d;',
}

function getScopeStyle() {
  return `${scopeStyles[selectedScopeName.value]}`
}

const styleTranslations: { [scopeName: string]: string[] } ={
  'T5XI SIGHT':
   ['display: none; color: green;', 'top: 2.4%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 16%; left: 50%; transform: translateX(15px)', 'top: 22%; right: 50%; transform: translateX(-15px);', 'top: 35%; left: 50%; transform: translateX(15px)', 'top: 45%; right: 50%; transform: translateX(-15px);', 'top: 56%; left: 50%; transform: translateX(15px)'],

   'DUAL RANGE SIGHT': ['display: none;', 'top: 0.5%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 14%; left: 50%; transform: translateX(15px)', 'top: 20%; right: 50%; transform: translateX(-15px);', 'top: 27.5%; left: 50%; transform: translateX(15px)', 'top: 34%; right: 50%; transform: translateX(-15px);', 'top: 41%; left: 50%; transform: translateX(15px)'],

   'TARS101':
   ['display: none;',
    'top: 2.3%; left: 50%; transform: translateX(20px)',
    'top: 6.6%; right: 50%; transform: translateX(-15px);',
    'top: 10.2%; left: 50%; transform: translateX(20px)',
    'top: 14%; right: 50%; transform: translateX(-15px);',
    'top: 18%; left: 50%; transform: translateX(20px)',
    'top: 22%; right: 50%; transform: translateX(-15px);',
    'top: 26%; left: 50%; transform: translateX(20px)',
    'top: 29%; right: 50%; transform: translateX(-15px);',
    'top: 33%; left: 50%; transform: translateX(20px)',
    'top: 36.5%; right: 50%; transform: translateX(-15px);',
    'top: 40.5%; left: 50%; transform: translateX(20px)',
    'top: 44%; right: 50%; transform: translateX(-15px);',
    'top: 48%; left: 50%; transform: translateX(20px)',
    'top: 52%; right: 50%; transform: translateX(-15px);',
    'top: 56%; left: 50%; transform: translateX(20px)',
    'top: 59.2%; right: 50%; transform: translateX(-15px);',
    'top: 63%; left: 50%; transform: translateX(20px)',
    'top: 67%; right: 50%; transform: translateX(-15px);',
    'top: 71%; left: 50%; transform: translateX(20px)',
    'top: 75%; right: 50%; transform: translateX(-15px);',
    'top: 79%; left: 50%; transform: translateX(20px)',
    ],
  }

function getStyle(index: number) {
  return `
          position: absolute;
          ${styleTranslations[selectedScopeName.value][index]}`
}

</script>

<template>
  <body class="bg-slate-900 w-screen h-full text-white">
    <img
      src="../assets/breakpoint.jpg"
      class="hidden sm:block w-96 h-20 m-auto rounded-md object-cover"
    />
    <div class="h-[90%]">
      <div class="text-white text-2xl mt-1 h-10">
        <router-link
          to="/"
          class="bg-[#c4c4c4] active:text-[#702323] bg-opacity-0 px-2 border text-[#a33232] border-[#a33232] rounded-lg shadow-black shadow-md font-sans absolute left-2/4 -rotate-[9deg] -translate-x-2/4 z-40"
          style="font-family: angel;"
          >{{gameName.game}}</router-link
        >
      </div>

      <div
        style="font-family: ZCOOL"
        class="
          tracking-wide
          h-[600px]
          w-screen
          sm:w-[500px]
          max-w-4xl
          absolute
          left-2/4
          -translate-x-2/4
          mt-0

        "
      >

        <!-- SCOPE IMAGES -->

        <Transition>
          <img
          v-show="selectedScopeName==='T5XI SIGHT'" src="/assets/BP-T5XISight.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='DUAL RANGE SIGHT'" src="/assets/BP-DualRange.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='TARS101'" src="/assets/TARS101.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl"
        />
        </Transition>

        <!-- SCOPE MENU -->

        <div>
          <div class="absolute top-[2%] right-[51%] z-30 font-sans w-[30%]">
            <Scopemenu
              :scopes="scopeNames"
              @chosenScope="changeScope"
            />
          </div>
        </div>

        <!-- RIFLE MENU -->

        <div class="">
          <div class="w-[35%] absolute top-[2%] left-[51%] z-40 font-sans tracking-normal">
            <Riflemenu
              :rifles="rifleNames"
              :rifle-title="selectedRifle"
              @selected="(rifle) => (selectedRifle = rifle)"
            />
          </div>
        </div>

        <!-- Scope and Rifle LABELS -->
        <div
          class="
            absolute
            bg-gray-900
            bg-opacity-0

            text-[#4dd5ff]
            px-2
            text-center
            text-xl
            w-[25%]
            top-[20%]
            right-[55%]

          "
          style='text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 11s infinite'
        >

          <u>Scope:</u><br />
          <glitched-writer :text="selectedScopeName" appear preset="nier" />
        </div>

        <div
          class="
            absolute
            bg-gray-900
            bg-opacity-0
            text-[#4dd5ff]
            px-2
            text-center
            text-xl
            w-[25%]
            top-[20%]
            left-[55%]


          "
          style="

          animation: glow 6000ms infinite;

          "
        >
          <div  style='animation: flicker 4.5s infinite;'>
            <u>Rifle:</u><br />
            <glitched-writer :text="selectedRifle" appear preset="nier" />
          </div>

        </div>

      <!-- RANGE LABELS -->

          <div v-for="(range, index) in ranges" class="absolute w-2/4 h-2/4 top-2/4 left-1/4" :style="getScopeStyle()">
            <div :style="getStyle(index)">
              <glitched-writer :text="range + 'm'" appear preset="nier" />
            </div>
          </div>

        </div>
      </div>
  </body>
</template>


<style>

.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(20px);
  transform: skewX(0deg)
}

  @keyframes glow {
    0% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    0.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    1% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    1.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    2% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    2.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    3% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    3.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    16% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    16.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    17% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    17.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    18% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    18.5% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    19% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    30% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    30.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    31% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    31.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    32% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    32.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    33% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    33.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: 1;
    }
    34% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: .5;
    }
    34.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: 1;
    }
    35% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    35.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    36% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    36.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    37% {
      color:#82dffc;
      text-shadow: 0 0 5px #000, 0 0 9px #fff, 0 0 15px #4dd5ff, 0 0 20px #4dd5ff;
    }
    37.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    50% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
    70% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: 1;
      transform: skewX(0deg);
    }
    70.5% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: 0.8;
      transform: skewX(10deg);
    }
    71% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
      opacity: 1;
      transform: skewX(0deg);
    }
    100% {
      color:#4dd5ff;
      text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;
    }
  }

  @keyframes flicker {
    0% {

    }
    30% {

      transform: skewX(0deg);
    }
    30.5% {

      transform: skewX(5deg);
    }
    31% {

      transform: skewX(0deg);
    }
    100% {

    }
  }

    @keyframes flicker {
    0% {

    }
    30% {

      filter: grayscale(0%);
    }
    30.5% {

      filter: grayscale(100%);
    }
    33.5% {

      filter: grayscale(0%);
    }
    100% {

    }
  }

      @keyframes saturate {
    0% {

    }
    30% {
      transform: skewX(0);
      filter: saturate(100%);
    }
    30.1% {
      transform: skewX(-30deg);
      filter: saturate(50%);
    }
    30.2% {
      transform: skewX(0)
    }
    51.9% {
      transform: skewX(0deg);
      filter: saturate(50%);
    }
    52% {
      transform: skewX(-30deg);
      filter: saturate(100%);
    }
    52.1% {
      transform: skewX(0);
    }
    81.5% {

      filter: saturate(100%);
    }
    100% {

    }
  }
</style>
