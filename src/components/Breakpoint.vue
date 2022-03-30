<script setup lang="ts">
import Scopemenu from "./Scopemenu.vue";
import Riflemenu from "./Riflemenu.vue";
import { ref, computed } from "vue";
import GlitchedWriter from 'vue-glitched-writer'

type ScopeData = { [rifleName: string]: number[] };

const images = ref<{ [sightName: string]: string }>({
  "T5XI SIGHT": "/assets/BP-T5XISight.jpg",
  "DUAL RANGE SIGHT": "/assets/BP-DualRangeSight-zoom.jpg",
});

const T5XIData = ref<ScopeData>({
  "Choose a rifle": [],
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
});

const dualRange = ref<ScopeData>({
  "Choose a rifle": [],
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
});




const selectedScopeName = ref("T5XI SIGHT");

const selectedScopeData = computed(() => {
  return selectedScopeName.value === "DUAL RANGE SIGHT"
    ? dualRange.value
    : T5XIData.value;
});

let selectedRifle = ref(Object.keys(selectedScopeData.value)[0]);
const rifleNames = computed(() => {
  return Object.keys(selectedScopeData.value);
});

const scopeNames = ref(["T5XI SIGHT", "DUAL RANGE SIGHT"]);

function changeScope(scope: string) {
  selectedRifle.value = 'Choose a rifle';
  selectedScopeName.value = scope;
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
          >Redeploy</router-link
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
        <Transition>
          <img
          v-show="selectedScopeName==='T5XI SIGHT'" src="/assets/BP-T5XISight.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl"
        />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='DUAL RANGE SIGHT'" src="/assets/BP-DualRangeSight-zoom.jpg"
          class="h-full w-full absolute object-cover m-auto rounded-2xl"
        />
        </Transition>

        <!-- SCOPE MENU -->

        <div>
          <div class="absolute top-[2%] right-[51%] z-30 font-sans w-[30%]">
            <Scopemenu
              class=""
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
          style='text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 15s infinite'
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

        <!-- T5XI RANGE LABELS -->
        <div v-if="selectedScopeName === 'T5XI SIGHT'">
          <!-- <div class="absolute  hidden text-black px-2 rounded-lg text-lg top-[47.5%] left-[50%] -translate-x-[5rem]">{{selectedScopeData[selectedRifle][0] ? '<' + selectedScopeData[selectedRifle][0] + 'm' : 'not ranged yet'}}</div> -->

  <!-- <pre>{{JSON.stringify(selectedScopeData[selectedRifle], null, 2)}}</pre> -->

          <div
            class="
              absolute
              text-[#4dd5ff]
              px-2

              bg-opacity-80

              text-lg
              top-[50.7%]
              left-[51%]
            "
            style='text-shadow: 0 0 6px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;'
          >

              <glitched-writer :text="selectedScopeData[selectedRifle][1]
                ? selectedScopeData[selectedRifle][1] + 'm'
                : ''" appear preset='nier' />

          </div>

          <div
            class="
              absolute
              px-2
              bg-gray-900
              bg-opacity-0

              text-[#4dd5ff]
              text-lg
              top-[54%]
              left-[50%]
              -translate-x-[4rem]
            "
            style='text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;'
          >
            <glitched-writer :text="selectedScopeData[selectedRifle][2]
                ? selectedScopeData[selectedRifle][2] + 'm'
                : ''" appear preset='nier' />
          </div>

          <div
            class="
              absolute
              bg-gray-900
              bg-opacity-0
              text-[#4dd5ff]
              px-2

              text-lg
              top-[57.5%]
              left-[51%]
            "
            style='text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;'

          >
            <glitched-writer :text="selectedScopeData[selectedRifle][3]
                ? selectedScopeData[selectedRifle][3] + 'm'
                : ''" appear preset='nier' />
          </div>

          <div
            class="
              absolute
              bg-gray-900
              bg-opacity-0

              text-[#4dd5ff]
              px-2
              text-lg
              top-[60.7%]
              left-[50%]
              -translate-x-[4rem]
            "
            style='text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;'
          >
            <glitched-writer :text="selectedScopeData[selectedRifle][4]
                ? selectedScopeData[selectedRifle][4] + 'm'
                : ''" appear preset='nier' />
          </div>

          <div
            class="
              absolute
              bg-gray-900
              bg-opacity-0

              text-[#4dd5ff]
              px-2

              text-lg
              top-[66.5%]
              left-[51%]
            "
            style='text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;'

          >
            <glitched-writer :text="selectedScopeData[selectedRifle][5]
                ? selectedScopeData[selectedRifle][5] + 'm'
                : ''" appear preset='nier' />
          </div>
        </div>

        <!-- DUAL RANGE LABELS -->
        <div v-if="selectedScopeName === 'DUAL RANGE SIGHT'">
          <!-- <div class="absolute  hidden text-black px-2 rounded-lg text-lg top-[47.5%] left-[50%] -translate-x-[5rem]">{{selectedScopeData[selectedRifle][0] ? '<' + selectedScopeData[selectedRifle][0] + 'm' : 'not ranged yet'}}</div> -->

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[50.4%]
              left-[50%]
            "
          >
            {{
              selectedScopeData[selectedRifle][1]
                ? selectedScopeData[selectedRifle][1] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              px-2
              text-black text-lg
              top-[54.3%]
              left-[51%]
              -translate-x-[4.5rem]
            "
          >
            {{
              selectedScopeData[selectedRifle][2]
                ? selectedScopeData[selectedRifle][2] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[57.2%]
              left-[50%]
            "
          >
            {{
              selectedScopeData[selectedRifle][3]
                ? selectedScopeData[selectedRifle][3] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[60.5%]
              left-[51%]
              -translate-x-[4.5rem]
            "
          >
            {{
              selectedScopeData[selectedRifle][4]
                ? selectedScopeData[selectedRifle][4] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[64%]
              left-[50%]
            "
          >
            {{
              selectedScopeData[selectedRifle][5]
                ? selectedScopeData[selectedRifle][5] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[67%]
              left-[51%]
              -translate-x-[4.5rem]
            "
          >
            {{
              selectedScopeData[selectedRifle][6]
                ? selectedScopeData[selectedRifle][6] + "m"
                : ""
            }}
          </div>

          <div
            class="
              absolute
              text-black
              px-2
              rounded-lg
              text-lg
              top-[70.7%]
              left-[50%]
            "
          >
            {{
              selectedScopeData[selectedRifle][7]
                ? selectedScopeData[selectedRifle][7] + "m"
                : ""
            }}
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
