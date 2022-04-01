<script setup lang="ts">
import Scopemenu from "./Scopemenu.vue";
import Riflemenu from "./Riflemenu.vue";
import { ref, computed, getCurrentInstance } from "vue";
import GlitchedWriter from 'vue-glitched-writer';
import fullData from '../assets/data';


const gameName = defineProps<{game: string}>()

const selectedScopeName = ref("T5XI SIGHT");

let selectedRifle = ref('Choose a rifle');

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

const scopeLabelStyles: { [scopeName: string]: string } = {
  'T5XI SIGHT': 'color: #4dd5ff; font-size: 1.25rem; line-height: 1.75rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 11s infinite;',
  'DUAL RANGE SIGHT': 'color: black; font-size: 1.25rem; line-height: 1.75rem;',
  'TARS101': 'color: #1de02d; font-size: 1.25rem; line-height: 1.75rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #1de02d86, 0 0 10px #1de02d86, 0 0 15px #1de02d; animation: saturate 11s infinite;',
  'VC16': 'color: #4dd5ff; font-size: 1.25rem; line-height: 1.75rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 11s infinite;',
  'ACSS': 'color: black; font-size: 1.25rem; line-height: 1.75rem;',
  'DIGITAL SIGHT': 'color: #3fd467; font-size: 0.8rem; line-height: 1.25rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #3fd46786, 0 0 10px #3fd46786, 0 0 15px #3fd467; transform: translate(35px, 70px);',
}

function getScopeLabelStyle() {
  return `${scopeLabelStyles[selectedScopeName.value]}`
}

const rifleLabelStyles: { [scopeName: string]: string } = {
  'T5XI SIGHT': 'color: #4dd5ff; font-size: 1.25rem; line-height: 1.75rem; animation: glow 6000ms infinite;',
  'DUAL RANGE SIGHT': 'color: black; font-size: 1.25rem; line-height: 1.75rem;',
  'TARS101': 'color: #1de02d; font-size: 1.25rem; line-height: 1.75rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #1de02d, 0 0 10px #1de02d86, 0 0 15px #1de02d; animation: flicker 5s infinite;',
  'VC16': 'color: #4dd5ff; font-size: 1.25rem; line-height: 1.75rem; animation: glow 6000ms infinite;',
  'ACSS': 'color: black; font-size: 1.25rem; line-height: 1.75rem;',
  'DIGITAL SIGHT': 'color: #3fd467; font-size: 0.8rem; line-height: 1.25rem; text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #3fd46786, 0 0 10px #3fd46786, 0 0 15px #3fd467; transform: translate(-35px, 70px);',
}

function getRifleLabelStyle() {
  return `${rifleLabelStyles[selectedScopeName.value]}`
}


const rangeStyles: { [scopeName: string]: string } = {
  'T5XI SIGHT': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;',
  'DUAL RANGE SIGHT': 'color: black;',
  'TARS101': 'color: #1de02d; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #1de02d44, 0 0 15px #1de02d;',
  'VC16': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;',
  'ACSS': 'color: black;',
  'DIGITAL SIGHT': 'color: #3fd467; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #3fd46744, 0 0 15px #3fd467;',
}

function getRangeStyle() {
  return `${rangeStyles[selectedScopeName.value]}`
}

const styleTranslations: { [scopeName: string]: string[] } ={
  'T5XI SIGHT':
   ['display: none;', 'top: 2.4%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 16%; left: 50%; transform: translateX(15px)', 'top: 22%; right: 50%; transform: translateX(-15px);', 'top: 33%; left: 50%; transform: translateX(15px)', 'top: 40%; right: 50%; transform: translateX(-15px);', 'top: 56%; left: 50%; transform: translateX(15px)'],

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
    'top: 30%; right: 50%; transform: translateX(-15px);',
    'top: 34%; left: 50%; transform: translateX(20px)',
    'top: 37.5%; right: 50%; transform: translateX(-15px);',
    'top: 41.5%; left: 50%; transform: translateX(20px)',
    'top: 45%; right: 50%; transform: translateX(-15px);',
    'top: 49%; left: 50%; transform: translateX(20px)',
    'top: 53%; right: 50%; transform: translateX(-15px);',
    'top: 57%; left: 50%; transform: translateX(20px)',
    'top: 59.2%; right: 50%; transform: translateX(-15px);',
    'top: 63%; left: 50%; transform: translateX(20px)',
    'top: 67%; right: 50%; transform: translateX(-15px);',
    'top: 71%; left: 50%; transform: translateX(20px)',
    'top: 75%; right: 50%; transform: translateX(-15px);',
    'top: 79%; left: 50%; transform: translateX(20px)',
    ],
    'VC16':
   ['display: none;', 'top: 2.4%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 16%; left: 50%; transform: translateX(15px)', 'top: 22%; right: 50%; transform: translateX(-15px);', 'top: 35%; left: 50%; transform: translateX(15px)', 'top: 45%; right: 50%; transform: translateX(-15px);', 'top: 56%; left: 50%; transform: translateX(15px)'],
    'ACSS':
   ['display: none;', 'top: 2.4%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 16%; left: 50%; transform: translateX(15px)', 'top: 22%; right: 50%; transform: translateX(-15px);', 'top: 35%; left: 50%; transform: translateX(15px)', 'top: 45%; right: 50%; transform: translateX(-15px);', 'top: 56%; left: 50%; transform: translateX(15px)'],
   'DIGITAL SIGHT':
   ['display: none;', 'top: 2.4%; left: 50%; transform: translateX(15px)', 'top: 8%; right: 50%; transform: translateX(-15px);', 'top: 16%; left: 50%; transform: translateX(15px)', 'top: 22%; right: 50%; transform: translateX(-15px);', 'top: 35%; left: 50%; transform: translateX(15px)', 'top: 45%; right: 50%; transform: translateX(-15px);', 'top: 56%; left: 50%; transform: translateX(15px)'],
  }

function getStyle(index: number) {
  return `
          position: absolute;
          ${styleTranslations[selectedScopeName.value][index]}`
}

</script>

<template>
  <body class="w-screen max-w-2xl max-h-[42rem] m-auto border-blue-400 border-4">
    <img
      v-show="gameName.game === 'Breakpoint'"
      src="../assets/breakpoint.jpg"
      class="hidden sm:block w-96 h-20 m-auto rounded-md object-cover border-black border-2"
    />
    <img
      v-show="gameName.game === 'Wildlands'"
      src="../assets/wildlands.jpg"
      class="hidden sm:block w-96 h-20 m-auto rounded-md object-cover border-black border-2"
    />
    <div class="">
      <div class="text-white text-2xl mt-1 h-10">
        <router-link
          to="/"
          class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-2/4 -rotate-[9deg] -translate-x-2/4 z-40"
          style="font-family: angel;"
          >Redeploy</router-link
        >
      </div>

      <div
        style="font-family: ZCOOL; padding-top: 100%;"
        class="
          relative
          tracking-wide
          w-screen
          max-w-2xl

          left-2/4
          -translate-x-2/4
          border-red-400 border-2
        "
      >

        <!-- SCOPE IMAGES -->

        <Transition>
          <img
          v-show="selectedScopeName==='T5XI SIGHT'" src="/assets/BP-T5XISight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='DUAL RANGE SIGHT'" src="/assets/BP-DualRange.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl sm:rounded-full"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='TARS101'" src="/assets/TARS101.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl sm:rounded-full"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='VC16'" src="/assets/BP-VC16-Sight.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl sm:rounded-full"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='ACSS'" src="/assets/BP-ACSS-Sight.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl sm:rounded-full"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='DIGITAL SIGHT'" src="/assets/BP-Digital-Sight.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl sm:rounded-full"
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
            px-2
            text-center
            w-[25%]
            top-[20%]
            right-[55%]

          "
          :style='getScopeLabelStyle()'
        >

          <u>Scope:</u><br />
          <glitched-writer :text="selectedScopeName" appear preset="nier" />
        </div>

        <div
          class="
            absolute
            px-2
            text-center
            w-[25%]
            top-[20%]
            left-[55%]


          "
          :style="getRifleLabelStyle()"
        >
          <div  style='animation: flicker 4.5s infinite;'>
            <u>Rifle:</u><br />
            <glitched-writer :text="selectedRifle" appear preset="nier" />
          </div>

        </div>

      <!-- RANGE LABELS -->

          <div v-for="(range, index) in ranges" class="absolute w-2/4 h-full left-1/4 border-red-400 border" :style="getRangeStyle()">
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
  transition: all 0.25s linear;
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
