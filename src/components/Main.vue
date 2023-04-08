<script setup lang="ts">
import Scopemenu from "./Scopemenu.vue";
import Riflemenu from "./Riflemenu.vue";
import { ref, computed, setBlockTracking } from "vue";
import GlitchedWriter from 'vue-glitched-writer';
import fullData from '../assets/data';
import silhouettes from '../assets/silhouettes';
import sezzing from '../assets/sezzing';

const showIntel = ref(false);
const gameName = defineProps<{game: string}>()

let showScopeMenu = ref(false);
let showRifleMenu = ref(false);

const selectedScopeName = ref('');

if(gameName.game === 'Breakpoint') {
  selectedScopeName.value = ('T5XI');
} else {
  selectedScopeName.value = ('TA31H');
}


let selectedRifle = ref('');

if(gameName.game === 'Breakpoint') {
  selectedRifle.value = ('Choose a rifle');
} else {
  selectedRifle.value = ('Choose a rifle');
}


const rifleNames = computed(() => {
  return Object.keys(fullData[gameName.game][selectedScopeName.value]).filter((rifle) => {
    return fullData[gameName.game][selectedScopeName.value][rifle].length !== 0;
  });
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

function removeRifleMenu() {
  if (showRifleMenu.value) {
    showRifleMenu.value = false;
  }
}

function removeScopeMenu() {
  if (showScopeMenu.value) {
    showScopeMenu.value = false;
  }
}

function changeScopeMenu() {
  showScopeMenu.value = !showScopeMenu.value;
}

function changeRifleMenu() {
  showRifleMenu.value = !showRifleMenu.value;
}

const ranges = computed(() => {
  return fullData[gameName.game][selectedScopeName.value][selectedRifle.value]
})

const silhRange = computed(() => {
  return silhouettes[gameName.game][selectedScopeName.value][selectedRifle.value]
})

const silhScope = computed(() => {
  return silhouettes[gameName.game][selectedScopeName.value]
})

const scopeLabelStyles: { [gameName: string]:{[scopeName: string]: string }} = {
  Breakpoint: {
    'T5XI': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 11s infinite;',
    'DUAL RANGE': 'color: yellow;',
  // 'TARS101': 'color: #1de02d; text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #1de02d86, 0 0 10px #1de02d86, 0 0 15px #1de02d; animation: saturate 11s infinite;',
    'TARS101': 'color: #ffb5a6; font-family: courier;',
    'VC16': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #4dd5ff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: saturate 11s infinite;',
    'ACSS': 'color: #f4c59e;',
    'DIGITAL': 'color: #e2b7bd;  text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #e2b7bd86, 0 0 10px #e2b7bd86, 0 0 15px #e2b7bd;',
    'SLX5': 'color: #fddebf;',
    'TA31H': 'color: #fddebf;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
  },
  Wildlands: {
    'TA31H': 'color: black;',
    'TARS101': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'T5XI TACTICAL': 'color:black;',
    'DIGITAL': 'color: #e2b7bd;  text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #e2b7bd86, 0 0 10px #e2b7bd86, 0 0 15px #e2b7bd;',
    'G28': 'color: yellow;',
    'POSP': 'color: #e2b7bd;',
    'PKS-07': 'color: #f4c59e;',
  }
}

function getScopeLabelStyle() {
  return `font-size: 1.1rem; line-height: 1.25rem; ${scopeLabelStyles[gameName.game][selectedScopeName.value]}`
}

const rifleLabelStyles: { [gameName: string]: {[scopeName: string]: string} } = {
  Breakpoint:{
  'T5XI': 'color: #4dd5ff; animation: glow 6000ms infinite;',
    'DUAL RANGE': 'color: yellow;',
    //'TARS101': 'color: #1de02d; text-shadow: 0 0 5px #000, 0 0 6px #ffffff86, 0 0 7px #1de02d, 0 0 10px #1de02d86, 0 0 15px #1de02d; animation: flicker 5s infinite;',
    'TARS101': 'color: #ffb5a6; font-family: courier;',
    'VC16': 'color: #4dd5ff; animation: glow 6000ms infinite;',
    'ACSS': 'color: #f4c59e;',
    'DIGITAL': 'color: #e2b7bd;  text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #e2b7bd86, 0 0 10px #e2b7bd86, 0 0 15px #e2b7bd;',
    'SLX5': 'color: #fddebf;',
    'TA31H': 'color: #fddebf;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
  },
  Wildlands: {
    'TA31H': 'color: black;',
    'TARS101': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'T5XI TACTICAL': 'color:black;',
    'DIGITAL': 'color: #e2b7bd;  text-shadow: 0 0 5px #000, 0 0 6px #ffffff11, 0 0 7px #e2b7bd86, 0 0 10px #e2b7bd86, 0 0 15px #e2b7bd;',
    'G28': 'color: yellow;',
    'POSP': 'color: #e2b7bd;',
    'PKS-07': 'color: #f4c59e;',
  }
}

function getRifleLabelStyle() {
  return `font-size: 1.1rem; line-height: 1.25rem; ${rifleLabelStyles[gameName.game][selectedScopeName.value]}`
}


const rangeStyles: { [gameName: string]: {[scopeName: string]: string }} = {
  Breakpoint:{
    'T5XI': 'color: #4dd5ff; text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff; animation: glow 5000ms infinite;',
    'DUAL RANGE': 'color: yellow;',
    // 'TARS101': 'color: #1de02d; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #1de02d44, 0 0 15px #1de02d;',
    'TARS101': 'color: #ffb5a6; font-family: courier;',
    'VC16': 'color: #4dd5ff; font-size: 1rem; text-shadow: 0 0 5px #000, 0 0 7px #fff, 0 0 10px #4dd5ff, 0 0 15px #4dd5ff;',
    'ACSS': 'color: #f4c59e;',
    'DIGITAL': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'SLX5': 'color: #fddebf;',
    'TA31H': 'color: #fddebf;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
    },
  Wildlands: {
    'TA31H': 'color: black;',
    'TARS101': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'T5XI TACTICAL': 'color: black;',
    'DIGITAL': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'G28': 'color: yellow;',
    'POSP': 'color: #e2b7bd;',
    'PKS-07': 'color: #f4c59e;',
  }
}

function getRangeStyle() {
  return `${rangeStyles[gameName.game][selectedScopeName.value]}`
}

const styleTranslations: { [gameName: string]: {[scopeName: string]: string[]} } ={
  'Breakpoint':
    {
    T5XI:
    ['display: none;',
    'top: 54.5%; left: 52%; transform: translate(0px, -1em)',
    'top: 58.6%; right: 52%; transform: translate(0px, -1em);',
    'top: 62.5%; left: 52%; transform: translate(0px, -1em)',
    'top: 66.7%; right: 52%; transform: translate(0px, -1em);',
    'top: 73.8%; left: 52%; transform: translate(0px, -1em)',
    'top: 80.7%; right: 52%; transform: translate(0px, -1em);',
    'top: 87.6%; left: 52%; transform: translate(0px, -1em)',

    ],

    'DUAL RANGE': ['display: none;',
    'font-size: 0.7rem; top: 53.6%; left: 51.5%; transform: translate(0px, -1em)',
    'top: 57.1%; right: 52%; transform: translate(0px, -1em);',
    'top: 60.2%; left: 52%; transform: translate(0px, -1em)',
    'top: 63.1%; right: 52%; transform: translate(0px, -1em);',
    'top: 66.7%; left: 52%; transform: translate(0px, -1em)',
    'top: 69.8%; right: 52%; transform: translate(0px, -1em);',
    'top: 73.2%; left: 52%; transform: translate(0px, -1em)',
    'top: 76.2%; right: 52%; transform: translate(0px, -1em)',
    'top: 79.4%; left: 52%; transform: translate(0px, -1em)',
    'top: 82.3%; right: 52%; transform: translate(0px, -1em)',
    'top: 85.7%; left: 52%; transform: translate(0px, -1em)',
    'top: 88.9%; right: 52%; transform: translate(0px, -1em)',
    'top: 92.2%; left: 52%; transform: translate(0px, -1em)',
    'top: 95.4%; right: 52%; transform: translate(0px, -1em)',

    ],

    'TARS101':
    ['display: none;',
      'display: none;',
      'top: 54.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 56.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 58.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 60.4%; right: 52%; transform: translate(0px, -1em);',
      'top: 62.3%; left: 53%; transform: translate(0px, -1em)',
      'top: 64.3%; right: 52%; transform: translate(0px, -1em);',
      'top: 66%; left: 53%; transform: translate(0px, -1em)',
      'top: 67.8%; right: 52%; transform: translate(0px, -1em);',
      'top: 69.5%; left: 54.75%; transform: translate(0px, -1em)',
      'top: 71.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 73.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 75.2%; right: 52%; transform: translate(0px, -1em);',
      'top: 77%; left: 53%; transform: translate(0px, -1em)',
      'top: 78.7%; right: 52%; transform: translate(0px, -1em);',
      'top: 80.7%; left: 53%; transform: translate(0px, -1em)',
      'top: 82.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 84.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 86.2%; right: 52%; transform: translate(0px, -1em);',
      'top: 88%; left: 53%; transform: translate(0px, -1em)',
      'top: 90%; right: 52%; transform: translate(0px, -1em);',
      'top: 93%; left: 53%; transform: translate(0px, -1em)',
      ],
      'VC16':
    ['display: none;',
      'font-size: 0.9rem; top: 51.6%; left: 51.5%; transform: translate(0px, -1em)',
      'font-size: 0.9rem; top: 52.5%; right: 51.5%; transform: translate(0px, -1em);',
      'font-size: 0.9rem; top: 54%; left: 51.5%; transform: translate(0px, -1em)',
      'top: 55.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 58%; left: 52%; transform: translate(0px, -1em)',
      'top: 60.4%; right: 52%; transform: translate(0px, -1em);',
      'top: 62.2%; left: 52%; transform: translate(0px, -1em)'
    ],
      'ACSS':
    ['display: none;',
      'font-size: 0.5rem; top: 52.25%; left: 48.68%; transform: translate(0px, -1em)',
      'top: 53.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 55.7%; left: 52%; transform: translate(0px, -1em)',
      'top: 58.3%; right: 52.5%; transform: translate(0px, -1em);',
      'top: 61.4%; left: 53%; transform: translate(0px, -1em)',
      'top: 65%; right: 53.5%; transform: translate(0px, -1em);',

    ],
    'DIGITAL':
        ['display: none;',
      'font-size: 0.9rem; top: 52.6%; left: 54%; transform: translate(0px, -1em)',
      'top: 55.8%; right: 51%; transform: translate(0px, -1em);',
      'top: 61.5%; left: 52%; transform: translate(0px, -1em)',
      'top: 67%; right: 51%; transform: translate(0px, -1em);',
      'top: 72.5%; left: 52%; transform: translate(0px, -1em)',
      'top: 89%; right: 51%; transform: translate(0px, -1em);',

    ],
    'SLX5':
        ['display: none;',
      'display: none; top: 53.6%; right: 52%; transform: translate(0px, -1em);',
      'top: 55.3%; right: 52%; transform: translate(0px, -1em);',
      'top: 58.9%; left: 52.5%; transform: translate(0px, -1em)',
      'top: 62.8%; right: 52%; transform: translate(0px, -1em);',
      'top: 68.2%; left: 52.5%; transform: translate(0px, -1em)',
      'top: 74.2%; right: 52%; transform: translate(0px, -1em);',

    ],
    'TA31H':
          ['display: none;',
      'display: none; top: 53.6%; right: 51%; transform: translate(0px, -1em);',
      'top: 55.6%; right: 51%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 58.5%; left: 52%; transform: translate(0px, -1em)',
      'top: 62%; right: 51%; transform: translate(0px, -1em);',
      'top: 66.7%; left: 52%; transform: translate(0px, -1em)',
      'top: 72.5%; right: 51%; transform: translate(0px, -1em);',
      ],
    'RU LONG-RANGE FOV':
    ['display: none;',
      'font-size: 0.8rem; top: 53.5%; left: 51.5%; transform: translate(0px, -1em)',
      'top: 56.2%; right: 52%; transform: translate(0px, -1em)',
      'top: 61.2%; left: 52%; transform: translate(0px, -1em)',
      'top: 66.4%; right: 52%; transform: translate(0px, -1em)',

      ],
      'RU LONG-RANGE':
          ['display: none;',
      'display: none; top: 53.6%; right: 51%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 55.2%; right: 51%; transform: translate(0px, -1em);',
      'top: 57.5%; left: 52.5%; transform: translate(0px, -1em)',
      'font-size: 0.7rem; top: 59.4%; right: 51%; transform: translate(0px, -1em);',
      'top: 61.7%; left: 52.5%; transform: translate(0px, -1em)',
      ],
      'PALADIN OPTIC':
          ['display: none;',
      'display: none; top: 53.6%; right: 51%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 55.2%; right: 51%; transform: translate(0px, -1em);',
      'top: 57.5%; left: 52.5%; transform: translate(0px, -1em)',
      'font-size: 0.7rem; top: 59.4%; right: 51%; transform: translate(0px, -1em);',
      'top: 61.7%; left: 52.5%; transform: translate(0px, -1em)',
      ],
    },
    Wildlands: {
      'TA31H':
        ['display: none;',
        'display: none; top: 53.6%; right: 51%; transform: translate(0px, -1em);',
        'top: 57%; right: 52%; transform: translate(0px, -1em);',
        'top: 59.5%; left: 53%; transform: translate(0px, -1em)',
        'top: 63.5%; right: 51.5%; transform: translate(0px, -1em);',
        'top: 68.2%; left: 53%; transform: translate(0px, -1em)',
        'top: 72.5%; right: 51.5%; transform: translate(0px, -1em);',
        ],
      'TARS101':
        ['display: none;',
        'display: none;',
        'top: 52.5%; left: 51.5%; transform: translate(0px, -1em)',
        'top: 54.9%; right: 52%; transform: translate(0px, -1em);',
        'top: 57%; left: 53%; transform: translate(0px, -1em)',
        'top: 59.1%; right: 52%; transform: translate(0px, -1em);',
        'top: 60.7%; left: 53%; transform: translate(0px, -1em)',
        'top: 62.6%; right: 52%; transform: translate(0px, -1em);',
        'top: 64.5%; left: 53%; transform: translate(0px, -1em)',
        'top: 66.4%; right: 52%; transform: translate(0px, -1em);',
        'top: 68.5%; left: 54.75%; transform: translate(0px, -1em)',
        'top: 70%; right: 52%; transform: translate(0px, -1em);',
        'top: 72.6%; left: 53%; transform: translate(0px, -1em)',
        'top: 74.2%; right: 52%; transform: translate(0px, -1em);',
        'top: 76%; left: 53%; transform: translate(0px, -1em)',
        'top: 78%; right: 52%; transform: translate(0px, -1em);',
        'top: 80.2%; left: 53%; transform: translate(0px, -1em)',
        'top: 82.5%; right: 52%; transform: translate(0px, -1em);',
        'top: 84.5%; left: 53%; transform: translate(0px, -1em)',
        'top: 86%; right: 52%; transform: translate(0px, -1em);',
        'top: 88%; left: 53%; transform: translate(0px, -1em)',
        'top: 90%; right: 52%; transform: translate(0px, -1em);',
        'top: 93%; left: 53%; transform: translate(0px, -1em)',
        ],
        'T5XI TACTICAL':
          ['display: none;',
          'font-size: 0.9rem; top: 52.8%; right: 51%; transform: translate(0px, -1em)',
        'top: 54.7%; left: 53%; transform: translate(0px, -1em)',
        'top: 59.3%; right: 55%; transform: translate(0px, -1em);',
        'top: 63.6%; left: 53%; transform: translate(0px, -1em)',
        'top: 68%; right: 55%; transform: translate(0px, -1em);',
        'top: 72.1%; left: 53%; transform: translate(0px, -1em)',
        'top: 76.7%; right: 55%; transform: translate(0px, -1em);',
        'top: 81.2%; left: 53%; transform: translate(0px, -1em);',

        ],
        'DIGITAL':
          ['display: none;',
          'font-size: 0.9rem; top: 52.1%; left: 54%; transform: translate(0px, -1em)',
        'top: 54.8%; right: 51%; transform: translate(0px, -1em);',
        'top: 60.5%; left: 52%; transform: translate(0px, -1em)',
        'top: 65%; right: 51%; transform: translate(0px, -1em);',
        'top: 70.5%; left: 52%; transform: translate(0px, -1em)',

        ],
        'G28': ['display: none;',
        'font-size: 0.7rem; top: 52.6%; left: 52%; transform: translate(0px, -1em)',
        'top: 55.8%; right: 51.5%; transform: translate(0px, -1em);',
        'top: 58.6%; left: 52.5%; transform: translate(0px, -1em)',
        'top: 61.6%; right: 51.5%; transform: translate(0px, -1em);',
        'top: 64.9%; left: 52.5%; transform: translate(0px, -1em)',
        'top: 67.8%; right: 51.5%; transform: translate(0px, -1em);',
        'top: 71.2%; left: 52.5%; transform: translate(0px, -1em)',
        'top: 74.1%; right: 51.5%; transform: translate(0px, -1em)',
        'top: 77.2%; left: 52.5%; transform: translate(0px, -1em)',
        'top: 80%; right: 51.5%; transform: translate(0px, -1em)',
        'top: 83.2%; left: 52.5%; transform: translate(0px, -1em)',
        'top: 86%; right: 51.5%; transform: translate(0px, -1em)',

        ],
        'POSP':
      ['display: none;',
      'font-size: 0.8rem; top: 51.8%; left: 51.5%; transform: translate(0px, -1em)',
      'top: 53.5%; right: 51%; transform: translate(0px, -1em)',
      'top: 56.9%; left: 52%; transform: translate(0px, -1em)',
      'top: 61%; right: 51%; transform: translate(0px, -1em)',
      ],
        'PKS-07':
      ['display: none;',
      'display: none; top: 54%; right: 51%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 53.2%; right: 51%; transform: translate(0px, -1em);',
      'top: 56%; left: 52%; transform: translate(0px, -1em)',
      'font-size: 0.9rem; top: 57.9%; right: 51%; transform: translate(0px, -1em);',
      'top: 60%; left: 52%; transform: translate(0px, -1em)',
      ],
    }
  }

function getStylePosition(index: number) {

  return `
          position: absolute;
          ${styleTranslations[gameName.game][selectedScopeName.value][index]}`
}


</script>

<template>
  <body class="w-screen max-w-2xl max-h-[42rem] m-auto sm:pt-0 pt-4">
    <img
      @click="removeScopeMenu(); removeRifleMenu();"
      v-show="gameName.game === 'Breakpoint'"
      src="../assets/breakpoint.jpg"
      class="hidden sm:block w-96 h-20 m-auto rounded-md object-cover border-black border-2"
    />
    <img
      @click="removeScopeMenu(); removeRifleMenu();"
      v-show="gameName.game === 'Wildlands'"
      src="../assets/wildlands.jpg"
      class="hidden sm:block w-96 h-20 m-auto rounded-md object-cover border-black border-2"
    />

      <div class="text-2xl mt-1 h-10 relative" @click="removeScopeMenu(); removeRifleMenu();">
        <router-link
          to="/"
          class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[7deg] -translate-x-[155%] z-40"
          style="font-family: angel;"
          >Redeploy
        </router-link>
        <div @click="showIntel = !showIntel" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[-3deg] -translate-x-[73%] z-40 cursor-pointer" style="font-family: angel;">
          Intel
        </div>
        <div class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] rotate-[-2deg] translate-x-[25%] z-40 cursor-pointer" style="font-family: angel;">
          <a href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank">Feedback</a>
        </div>
      </div>

      <div v-show="showIntel" @click="showIntel = false" class="absolute top-[100px] sm:top-[200px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg" style="font-family: courier;">
        Data is organized by scope, <u>not by rifle.</u> Please select your scope first so that the rifle list will populate with rifles that have been ranged with your chosen scope.<br><br>
        Rifles are named with (and without) attachments that affect bullet drop. So if, for example, you are using the P416 with the short barrel and the range finder attached, be sure to select "P416 SHORT BARREL RANGE FINDER" and not "P416" or "P416 SHORT BARREL" or "P416 RANGE FINDER". Certain combinations have unique bullet drop. <a href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank"><br><br><i><u>Click here for demo video and to make rifle/scope/attachment requests in the Youtube comments.</u></i></a>
        <div @click="showIntel = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
      </div>


  <!-- Scope and Rifle Menus -->

      <div class="grid grid-cols-2">

        <div class="z-30 font-sans tracking-normal justify-self-end mr-4">
          <Scopemenu
            :scopes="scopeNames"
            :show="showScopeMenu"
            :rifleMenu="showRifleMenu"
            @chosenScope="changeScope"
            @menu-clicked="changeScopeMenu"
            @rifle-menu="removeRifleMenu"
          />
        </div>

        <div class="z-40 font-sans tracking-normal ml-2 ">
          <Riflemenu
            :rifles="rifleNames"
            :show2="showRifleMenu"
            :rifle-title="selectedRifle"
            :scopeMenu="showScopeMenu"
            :selectedScope="selectedScopeName"
            :gameName="gameName.game"
            @selected="(rifle) => (selectedRifle = rifle)"
            @rifle-menu-clicked="changeRifleMenu"
            @scope-menu="removeScopeMenu"
          />
        </div>
      </div>

        <!-- SCOPE IMAGES -->

      <div
        style="font-family: ZCOOL; font-size:1rem; padding-top: 100%; "
        @click="removeScopeMenu(); removeRifleMenu();"
        class="
          relative
          tracking-wide
          w-screen
          max-w-2xl
          z-[10]
          left-2/4
          -translate-x-2/4"
      >

        <Transition>
          <div>
            <img
              v-show="selectedScopeName==='T5XI'" src="/assets/BP-Scopes/BP-T5XISight.jpg"
              class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='T5XI' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[8.4%] top-[37.2%] right-[51%]"
            />
            <div v-if="selectedScopeName==='T5XI' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[39%] right-[54%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
          <div>
            <img
              v-show="selectedScopeName==='DUAL RANGE'" src="/assets/BP-Scopes/BP-Dual-Range-Sight.jpg"
              class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[12.8%] top-[28.2%] right-[51%]"
            />
            <div v-if="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[32%] right-[56%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
          <div>
            <img
              v-show="selectedScopeName==='TARS101' && gameName.game === 'Breakpoint'" src="/assets/BP-Scopes/BP-TARS101.jpg"
              class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='TARS101' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[7.7%] top-[31.2%] right-[52%]"
            />
            <div v-if="selectedScopeName==='TARS101' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[33%] right-[55%]">
              {{silhRange[0]}}m
            </div>
          </div>
          
        </Transition>
        <Transition>
          <div>
            <img
            v-show="selectedScopeName==='TA31H'" src="/assets/BP-Scopes/BP-TA31H-Sight.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='TA31H' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[8%] top-[46.5%] right-[30.3%]"
            />
            <div v-if="selectedScopeName==='TA31H' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[48.5%] right-[33.5%]">
                {{silhRange[0]}}m
          </div>
         </div>
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='VC16'" src="/assets/BP-Scopes/BP-VC16-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='ACSS'" src="/assets/BP-Scopes/BP-ACSS-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full border-4 border-black"
          />
        </Transition>
        <Transition>
         <div>
            <img
            v-show="selectedScopeName==='DIGITAL'" src="/assets/BP-Scopes/BP-Digital-Sight.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='DIGITAL' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[11%] top-[33.8%] right-[50%]"
            />
            <div v-if="selectedScopeName==='DIGITAL' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[37%] right-[54%]">
                {{silhRange[0]}}m
          </div>
         </div>
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='SLX5'" src="/assets/BP-Scopes/BP-SLX5-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='RU LONG-RANGE'" src="/assets/BP-Scopes/BP-RU-Long-Range-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='RU LONG-RANGE FOV'" src="/assets/BP-Scopes/BP-RU-Long-Range-FOV-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full border-4 border-black"
          />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='PALADIN OPTIC'" src="/assets/BP-Scopes/BP-RU-Long-Range-Sight.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full border-4 border-black"
          />
        </Transition>

        <!-- WILDLANDS SCOPE IMAGES -->

        <Transition>
          <img
          v-show="selectedScopeName==='TA31H' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-TA31H.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
          />
        </Transition>
        <Transition>
          <div> 
           <img
            v-show="selectedScopeName==='TARS101' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-TARS101.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='TARS101' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[8%] top-[28.2%] right-[52%]"
            />
            <div v-if="selectedScopeName==='TARS101' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[30%] right-[55%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
          <div>
            <img
            v-show="selectedScopeName==='T5XI TACTICAL' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-T5XI-Tactical.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='T5XI TACTICAL' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[9%] top-[32.4%] right-[54%]"
            />
            <div v-if="selectedScopeName==='T5XI TACTICAL' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[35%] right-[58%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
          <div>
            <img
            v-show="selectedScopeName==='DIGITAL' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-Digital-Scope.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='DIGITAL' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[10%] top-[35%] right-[50%]"
            />
            <div v-if="selectedScopeName==='DIGITAL' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[38%] right-[54%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
          <div>
            <img
            v-show="selectedScopeName==='G28' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-G28.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='G28' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[12%] top-[28%] right-[51%]"
            />
            <div v-if="selectedScopeName==='G28' && gameName.game === 'Wildlands' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[32%] right-[56%]">
              {{silhRange[0]}}m
            </div>
          </div>
        </Transition>
        <Transition>
            <img
            v-show="selectedScopeName==='PKS-07' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-PKS-07.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
        </Transition>
        <Transition>
          <img
          v-show="selectedScopeName==='POSP' && gameName.game==='Wildlands'" src="/assets/WL-Scopes/WL-POSP.jpg"
          class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
          />
        </Transition>

        <!-- Scope and Rifle LABELS -->
        <div
          class="
            absolute
            px-2
            text-center
            w-[32%]
            sm:w-[25%]
            top-[20%]
            right-[52%]

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
            w-[32%]
            sm:w-[25%]
            top-[20%]
            left-[52%]


          "
          :style="getRifleLabelStyle()"
        >
          <div>
            <u>Rifle:</u><br />
            <glitched-writer :text="selectedRifle" appear preset="nier" />
          </div>

        </div> 
        <!-- ENDORSEMENT SEZZING -->
          <div v-if="sezzing[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle)" class="absolute h-[15%] w-[30%] top-[27%] right-[10%] text-red-900 rotate-[-10deg] text-2xl" style="font-family: angel;">
          {{sezzing[gameName.game][selectedScopeName][selectedRifle]}}
          </div>
      <!-- RANGE LABELS -->
          <div class="absolute top-[55%] left-2/4 -translate-x-2/4 text-2xl">
            <glitched-writer v-if="ranges && ranges.length==0" :text="'Sorry, rifle not yet ranged with this scope'" appear preset="nier" :style="getRangeStyle()" />
          </div>
          <div v-for="(range, index) in ranges" class="absolute w-full h-full top-0 left-0" :style="getRangeStyle()">
            <div :style="getStylePosition(index)">
              <glitched-writer :text="range + 'm'" appear preset="nier" />
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
