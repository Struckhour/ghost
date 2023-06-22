<script setup lang="ts">
import Scopemenu from "./Scopemenu.vue";
import Riflemenu from "./Riflemenu.vue";
import { ref, computed, setBlockTracking } from "vue";
import GlitchedWriter from 'vue-glitched-writer';
import fullData from '../assets/data';
import silhouettes from '../assets/silhouettes';
import sezzing from '../assets/sezzing';
import { SmartDamage, GetSmartRifleName, SmartRifles } from '../assets/SmartDamage';
import { BonusDamage, GetBonusRifleName, BonusRifles } from '../assets/BonusDamage';
import { SpecialNote, GetSpecialRifleName, SpecialRifles } from '../assets/SpecialNote';
import { RPM, GetRPMRifleName, RPMRifles } from '../assets/RPM';
// import shotguns from '../assets/shotguns';
import { loudGuns, IsLoudGun } from '../assets/isLoud';
import { suppressedGuns, IsSuppressedGun } from '../assets/isSuppressed';



const showIntel = ref(false);
const showShotguns = ref(false);
const showHandguns = ref(false);
const showRTK = ref(false);
const showTrig = ref(false);
const range = ref(0);
const altitude = ref(0);
const showRando = ref(false);

const showRYOR = ref(false);
const ryorName = ref();
const ryorRail = ref();
const ryorBA = ref();
const ryor0 = ref();
const ryor1 = ref();
const ryor2 = ref();
const ryor3 = ref();
const ryor4 = ref();
const ryor5 = ref();
const ryor6 = ref();
const ryor7 = ref();
const ryor8 = ref();
const ryor9 = ref();
const ryor10 = ref();

const ryorT5XI = ref(false);
const ryorDR = ref(false);
const ryorDigital = ref(false);

const gameName = defineProps<{game: string}>()
const showBonuslist = ref(false);
const showRTKlist = ref(false);
const showTTKlist = ref(false);

// Bonus Rifle List

interface RifleObject {
    rifleName: string;
    rifleValue: number;
};

const sortedBonus = Object.keys(BonusDamage['Breakpoint']).sort().reduce(
    (acc, key) => {
        return [
            ...acc,
            {
                rifleName: key,
                rifleValue: BonusDamage.Breakpoint[key],
            }
        ];
    }, 
    [] as RifleObject[]
);

// RTK WOLF SUPPRESSED RIFLE list

const suppRTK: {[gameName: string]: {[rifleName: string]: number}}={'Breakpoint':{}} 

for (const property in SmartDamage['Breakpoint']) {
  if (!loudGuns['Breakpoint'].includes(property)){
suppRTK['Breakpoint'][property]=(Math.ceil(130/(SmartDamage['Breakpoint'][property]*0.8)))
}}
const sortedSuppRTK = Object.fromEntries(
    Object.entries(suppRTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

// RTK WOLF LOUD RIFLE list
const loudRTK: {[gameName: string]: {[rifleName: string]: number}}={'Breakpoint':{}} 

for (const property in SmartDamage['Breakpoint']) {
  if (!suppressedGuns['Breakpoint'].includes(property)){
loudRTK['Breakpoint'][property]=(Math.ceil(130/SmartDamage['Breakpoint'][property]))
}}
const sortedLoudRTK = Object.fromEntries(
    Object.entries(loudRTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

// TTK WOLF SUPPRESSED RIFLE list

const suppTTK: {[gameName: string]: {[rifleName: string]: number}}={'Breakpoint':{}} 

for (const property in RPM['Breakpoint']) {
  if (SmartDamage['Breakpoint'].hasOwnProperty(property) && !loudGuns['Breakpoint'].includes(property)){
suppTTK['Breakpoint'][property]=((60/RPM['Breakpoint'][property])*Math.ceil(130/Math.floor(((SmartDamage['Breakpoint'][property]*0.8)))))
}}
const sortedSuppTTK = Object.fromEntries(
    Object.entries(suppTTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

// TTK WOLF LOUD RIFLE list

const loudTTK: {[gameName: string]: {[rifleName: string]: number}}={'Breakpoint':{}} 

for (const property in RPM['Breakpoint']) {
  if (SmartDamage['Breakpoint'].hasOwnProperty(property) && !suppressedGuns['Breakpoint'].includes(property)){
loudTTK['Breakpoint'][property]=((60/RPM['Breakpoint'][property])*Math.ceil(130/Math.floor((SmartDamage['Breakpoint'][property]))))
}}
const sortedLoudTTK = Object.fromEntries(
    Object.entries(loudTTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

const rifleNameArray = SmartRifles;

function getRandomRifle() {
  const randoRifle = Math.floor(Math.random() * rifleNameArray.length);
  return rifleNameArray[randoRifle];
}

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

const bonusRifleValue = computed(() => {
  return BonusDamage[gameName.game][GetBonusRifleName(BonusRifles, selectedRifle.value)]
})
const rifleDamageValue = computed(() => {
  return SmartDamage[gameName.game][GetSmartRifleName(SmartRifles, selectedRifle.value)]
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
    'TA31H': 'color: black;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
    'EXPS3': 'color: #ffb5a6;',
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
    'TA31H': 'color: black;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
    'EXPS3': 'color: #ffb5a6;',
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
    'TA31H': 'color: black;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
    'EXPS3': 'color: #ffb5a6;',
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
    'top: 94.5%; right: 52%; transform: translate(0px, -1em);',
    'top: 100.6%; left: 52%; transform: translate(0px, -1em)',


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
    [ 'font-size: 0.5rem; top: 50.9%; left: 50.5%; transform: translate(0px, -1em)',
      'font-size: 0.5rem; top: 52.4%; right: 50.2%; transform: translate(0px, -1em)',
      'top: 54.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 56.5%; right: 52%; transform: translate(0px, -1em);',
      'top: 58.5%; left: 53%; transform: translate(0px, -1em)',
      'top: 60.4%; right: 52%; transform: translate(0px, -1em);',
      'top: 62.3%; left: 53%; transform: translate(0px, -1em)',
      'top: 64.3%; right: 52%; transform: translate(0px, -1em);',
      'top: 66%; left: 53%; transform: translate(0px, -1em)',
      'top: 67.8%; right: 52%; transform: translate(0px, -1em);',
      'top: 69.5%; left: 54%; transform: translate(0px, -1em)',
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
      'font-size: 0.5rem; top: 52.25%; left: 49%; transform: translate(0px, -1em)',
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
        ['font-size: 0.4rem; top: 49.75%; left: 51.25%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 53%; left: 49%; transform: translate(0px, -1em);',
      'top: 55.3%; right: 52%; transform: translate(0px, -1em);',
      'top: 58.9%; left: 52.5%; transform: translate(0px, -1em)',
      'top: 62.8%; right: 52%; transform: translate(0px, -1em);',
      'top: 68.2%; left: 52.5%; transform: translate(0px, -1em)',
      'top: 74.2%; right: 52%; transform: translate(0px, -1em);',

    ],
    'TA31H':
          ['display: none;',
      'font-size: 0.9rem; top: 53.7%; left: 48.7%; transform: translate(0px, -1em);',
      'top: 55.6%; right: 51%; transform: translate(0px, -1em);',
      'top: 58.5%; left: 52%; transform: translate(0px, -1em)',
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
      'EXPS3':
      ['font-size: 1rem; top: 53.7%; left: 51.95%; transform: translate(0px, -1em);',
      'font-size: 1rem; top: 57.6%; right: 50.10%; transform: translate(0px, -1em);',
      'font-size: 1rem; top: 67.5%; left: 51.95%; transform: translate(0px, -1em);',
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
      'top: 70.5%; left: 52%; transform: translate(0px, -1em)',
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

      <div class="text-2xl mt-1 h-20 relative" @click="removeScopeMenu(); removeRifleMenu();">
        <router-link
          to="/"
          class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[3deg] -translate-x-[148%] z-40" style="font-family: angel;">
          Redeploy
        </router-link>
        <div @click="showIntel = !showIntel; showShotguns = false; showHandguns = false; showRTK = false; showTrig = false; showRando = false;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[-3deg] -translate-x-[70%] z-40 cursor-pointer" style="font-family: angel;">
          Intel
        </div>
        <div class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[53%] rotate-[-2deg] translate-x-[22%] z-40 cursor-pointer" style="font-family: angel;">
          <a href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank">Feedback</a>
        </div>

<!-- TRIG BUTTON -->
        <div v-if="gameName.game === 'Breakpoint'" @click="showTrig = !showTrig; showIntel = false; showShotguns = false; showHandguns = false; showRTK =false; showRando = false;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[50%] left-[53%] rotate-[-1deg] translate-x-[-86%] z-40 cursor-pointer" style="font-family: angel;">Triggernometry
        </div>

<!-- RANDOM BUTTON -->

        <!-- <div v-if="gameName.game === 'Breakpoint'" @click="showRando = true; showRTK = false; selectedRifle=(getRandomRifle()); showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border-dotted border-2 text-green-600 border-green-600 hover:text-purple-400 hover:border-purple-700 rounded-lg shadow-black shadow-md font-sans absolute top-[50%] left-[53%] rotate-[2deg] translate-x-[27%] z-40 cursor-pointer" style="font-size: 1.5rem; font-family: angel;">RANDOM?
        </div> -->

      </div>
      
      <div v-show="showIntel" @click="showIntel = false;" class="absolute top-[100px] sm:top-[200px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg" style="font-size: 1rem;font-family: courier;">
        <a href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank"><b><i><u>Click here for demo video and to make rifle/scope/attachment requests in the Youtube comments.</u></i></b></a>
        <br><br>
        Data is organized by scope, <u>not by rifle.</u> Please select your scope first so that the rifle list will populate with rifles that have been ranged with your chosen scope.<br><br>
        Rifles are named with (and without) attachments that affect bullet drop. So if, for example, you are using the P416 with the short barrel and the range finder attached, be sure to select "P416 SHORT BARREL RANGE FINDER" and not "P416" or "P416 SHORT BARREL" or "P416 RANGE FINDER". Different attachment combinations have unique bullet drop.<br><br>

        <b><u>Damage In Breakpoint</u></b><br>
          Unalerted Sentinel personnel have 39hp. Alerted Sentinel personnel have 100hp. Wolves always have 130hp. So a rifle that does 39 damage such as the MK17 Scout when unsuppressed will one-shot an unalerted Sentinel Breacher/Commander/Drone Operator/Radio Operator/Rifleman/Sniper center mass. Once they're alerted you need more rounds to exceed their increased 100hp so 39 damage times 3 rounds will exceed 100hp. With the MK17 Scout 4 rounds at 39 damage is required to exceed a Wolf's 130hp. Damage per round, rounds down when the 20% suppressor reduction is applied so 39 minus 20% damage becomes 31 damage, not 31.2. Be advised that there are a few weapons that have incorrect damage stats. In most cases these discrepancies appear to be unintended suppressor debuffs mostly occurring in the heavier handguns that can't even have suppressors(see Handguns button above). The only non handgun damage reduction I've encountered thus far is the underbarrel shotgun which claims 102 damage but fails to kill alerted Sentinel personnel at 100hp with one round center mass. There are a few DMR's that do not appear to suffer the 20% suppressor damage reduction with suppressors on. They are noted in the compendium. Finally, there are some hanguns that do +5 more damage than indicated(see Handguns button above) and some hidden momentum-type damage bonuses applied to certain ASR's and DMR's after a kill. These rifles are also noted in the compendium. <br><br> 

        <b><u>Damage In Wildlands</u></b><br>
          Unalerted sicarios can be one-shot killed by any weapon. <a href="https://docs.google.com/spreadsheets/d/1w0KRBZSdb3SFBZVAncBGit3ixPSsSMWpEiOkDSlqrZw/edit#gid=1681802407" target="_blank"><b><i><u>Here is an external resource created by others with more details on damage to alerted enemies in Wildlands.</u></i></b></a>
        
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
            @selected="(rifle:string) => (selectedRifle = rifle)"
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
            <img v-show="selectedScopeName==='T5XI' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[8.4%] top-[37.2%] left-[51.3%]"
            />
            <div v-if="selectedScopeName==='T5XI' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[39%] left-[55%]">
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
            <img v-show="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[12.8%] top-[28.2%] right-[50.7%]"
            />
            <div v-if="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[32%] right-[55.5%]">
              {{silhRange[0]}}m
            </div>
            <img v-show="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[10%] top-[65.7%] left-[20%]"
            />
            <div v-if="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[68%] right-[80.5%]">
              {{Math.round(silhRange[0]*1.33)}}m
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
            <img v-show="selectedScopeName==='TA31H' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[8%] top-[46.5%] left-[11.7%]"
            />
            <div v-if="selectedScopeName==='TA31H' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[47.5%] left-[15.2%]">
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
          <div>
            <img
            v-show="selectedScopeName==='SLX5'" src="/assets/BP-Scopes/BP-SLX5-Sight.jpg"
            class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full"
            />
            <img v-show="selectedScopeName==='SLX5' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[6%] top-[49%] left-[28%]"
            />
            <div v-if="selectedScopeName==='SLX5' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[50%] left-[31%]">
                {{silhRange[0]}}m
            </div>
            <img v-show="selectedScopeName==='SLX5' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[12%] top-[62.5%] left-[27%]"
            />
            <div v-if="selectedScopeName==='SLX5' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[66%] left-[32%]">
                {{Math.round(silhRange[0]*0.5)}}m
          </div>
         </div>
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
        <Transition>
          <img
          v-show="selectedScopeName==='EXPS3'" src="/assets/BP-Scopes/BP-EXPS3.png"
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
          <div v-if="sezzing[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle)" class="absolute h-[15%] w-[30%] top-[30%] right-[10%] text-red-800 rotate-[-10deg] text-2xl" style="font-size: 0.8rem; font-family: angel;">
          {{sezzing[gameName.game][selectedScopeName][selectedRifle]}}
          </div>

<!-- TRIG CARD -->
          <div v-show="showTrig" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-75 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md text-center leading-tight" >
      <!-- RYOR BUTTON -->
            <div v-if="gameName.game === 'Breakpoint'" @click="showRYOR = !showRYOR; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[-2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: angel;">Range your<br> own rifle
            </div>
            <div class="font-bold opacity-90 rotate-[1deg]" style="font-size: 1rem; font-family: angel;">
              Calculate downhill <br>shots below:
            </div>
            <div class="font-light" style="font-size: 0.7rem; font-family: courier;">(This also works for uphill shots.)
            </div>           
            <div class="text-center rotate-[0deg] font-bold" style="font-size: 1rem; font-family: courier;">c = Range To Target:<input size="3" class="border border-black rounded font-bold" v-model="range">m
            </div>
            <br>
            <div class="text-center font-bold" style="font-size: 1rem; font-family: courier;">a = Altitude To Target:<input size="3" class="border border-black rounded font-bold" v-model="altitude">m
            </div>
            <br>
            <div class="text-red-700 font-bold" style="font-size: 1rem; font-family: courier;">b = True Ballistic Range:</div><div class="font-light text-red-700" style="font-size: 0.7rem; font-family: courier;">(Aim as though you're this range from target.)
            </div>        
            <div class="text-red-700 font-bold rotate-[-1deg]" style="font-size: 1.5rem; font-family: angel;">{{ Math.round((range**2-altitude**2)**0.5) }}<span class="" style="font-size: ; font-family: courier;">m</span>
              </div>
              
            <img class="h-[100%] w-[100%]" src="/assets/triangle.png">  
          <div @click="showTrig = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
<!-- END TRIG card -->
<!-- RYOR CARD -->
        <div v-show="showRYOR" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-75 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md text-center leading-tight" style="font-size: ; font-family: ZCOOL;">
          <div v-if="gameName.game === 'Breakpoint'" @click="ryorT5XI = !ryorT5XI; ryorDR = false; ryorDigital = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[-2deg] translate-x-[-25%] z-40 cursor-pointer" style="font-size: 1rem; font-family: angel;">
            T5XI
          </div>
          <div v-if="gameName.game === 'Breakpoint'" @click="ryorDR = !ryorDR; ryorT5XI = false; ryorDigital = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[1deg] translate-x-[35%] z-40 cursor-pointer" style="font-size: 1rem; font-family: angel;">
            Dual Range
          </div>
        <div @click="showRYOR = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>

        <div v-if="gameName.game === 'Breakpoint'" @click="ryorDigital = !ryorDigital; ryorT5XI = false; ryorDR = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[-1deg] translate-x-[206%] z-40 cursor-pointer" style="font-size: 1rem; font-family: angel;">
            Digital
          </div>
        <div @click="showRYOR = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
<!-- RYOR T5XI CARD -->
        <div v-show="ryorT5XI" class="absolute top-[10%] sm:top-[10%] bg-[#eae4aa] bg-opacity-100 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md leading-tight" style="font-size: 0.7rem; font-family: ZCOOL;">
          <img class="rounded" src="/assets/BP-Scopes/BP-T5XISight.jpg">
            <div class="text-blue-300" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div class="absolute top-[28%] right-[52%]" >
            RIFLE NAME:<br><input size="18" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorName">
            </div>
            <div class="absolute top-[28%] left-[52%]">
              RAIL:<br>
              <select class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorRail">
                <option value="">none/other</option>
                <option value=" MAWL-DA">MAWL-DA</option>
                <option value=" RANGEFINDER">RANGEFINDER</option>
              </select>
            </div>
            <div class="absolute top-[39%] left-[52%]">
              BALLISTIC ADVANTAGE:<br>
                <select type="checkbox" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorBA">
                <option value="">NO</option>
                <option value=" BALLISTIC ADVANTAGE">BALLISTIC ADVANTAGE</option>
                </select>
            </div>
            <!-- line 0 -->
            <div class="absolute top-[50%] right-[51%]">
            <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0" >m
            </div>
            <!-- line 1 -->
            <div class="absolute top-[53.5%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">m
            </div>
            <!-- line 2 -->
            <div class="absolute top-[56.9%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">m
            </div>
            <!-- line 3 -->
            <div class="absolute top-[60.6%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">m
            </div>
            <!-- line 4 -->
            <div class="absolute top-[63.9%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">m
            </div>
            <div class="absolute top-[10%] left-[5%] w-[85%] bg-black rounded">Copy and paste the white text below into our Youtube comments and we'll add your work to the compendium!</div>
            
            <div class="absolute top-[19%] left-[7%] border bg-black rounded text-white uppercase w-[85%]" style="font-size: 0.7rem; font-family: ;">'{{ ryorName }}{{ ryorRail }}{{ ryorBA }}':[{{ ryor0 }},{{ ryor1 }},{{ ryor2 }},{{ ryor3 }},{{ ryor4 }}], T5XI
           </div>
          </div>
        <div @click="ryorT5XI = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
<!-- RYOR DUAL RANGE CARD -->
        <div v-show="ryorDR" class="absolute top-[10%] sm:top-[10%] bg-[#eae4aa] bg-opacity-100 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md leading-normal" style="font-size: 1rem; font-family: courier;">
          <img class="rounded" src="/assets/BP-Scopes/BP-Dual-Range-Sight.jpg">
          <div class="text-yellow-300" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div class="absolute top-[28%] right-[52%]" >
            RIFLE NAME:<br><input size="18" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorName">
            </div>
            <div class="absolute top-[28%] left-[52%]">
              RAIL:<br>
              <select class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorRail">
                <option value="">none/other</option>
                <option value=" MAWL-DA">MAWL-DA</option>
                <option value=" RANGEFINDER">RANGEFINDER</option>
              </select>
            </div>
            <div class="absolute top-[39%] left-[52%]">
              BALLISTIC ADVANTAGE:<br>
                <select type="checkbox" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorBA">
                <option value="">NO</option>
                <option value=" BALLISTIC ADVANTAGE">BALLISTIC ADVANTAGE</option>
                </select>
            </div>
            <!-- line 0 -->
            <div class="absolute top-[50%] right-[51%]">
            <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">m
            </div>
            <!-- line 1 -->
            <div class="absolute top-[52.4%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">m
            </div>
            <!-- line 2 -->
            <div class="absolute top-[55.7%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">m
            </div>
            <!-- line 3 -->
            <div class="absolute top-[58.4%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">m
            </div>
            <!-- line 4 -->
            <div class="absolute top-[61.0%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">m
            </div>
            <!-- line 5 -->
            <div class="absolute top-[64.1%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">m
            </div>
             <!-- line 6 -->
             <div class="absolute bottom-[28.9%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">m
            </div>
            <!-- line 7 -->
            <div class="absolute bottom-[25.9%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor7">m
            </div>
             <!-- line 8 -->
             <div class="absolute bottom-[23.1%] right-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor8">m
            </div>
            <!-- line 9 -->
            <div class="absolute bottom-[20.3%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor9">m
            </div>
             <!-- line 10 -->
             <div class="absolute bottom-[17.8%] right-[53.2%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor10">m
            </div>
            <div class="absolute top-[10%] left-[5%] w-[85%] bg-black rounded">Copy and paste the white text below into our Youtube comments and we'll add your work to the compendium!
            </div>
            <div class="absolute top-[19%] left-[7%] border bg-black rounded text-white uppercase w-[85%]" style="font-size: 0.7rem; font-family: ;">'{{ ryorName }}{{ ryorRail }}{{ ryorBA }}':[{{ ryor0 }},{{ ryor1 }},{{ ryor2 }},{{ ryor3 }},{{ ryor4 }},{{ ryor5 }},{{ ryor6 }},{{ ryor7 }},{{ ryor8 }},{{ ryor9 }},{{ ryor10 }}], Dual Range
           </div>
          </div>
        <div @click="ryorDR = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
<!-- RYOR DIGITAL CARD -->
<div v-show="ryorDigital" class="absolute top-[10%] sm:top-[10%] bg-[#eae4aa] bg-opacity-100 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md leading-normal" style="font-size: 1rem; font-family: courier;">
          <img class="rounded" src="/assets/BP-Scopes/BP-Digital-Sight.jpg">
          <div class="text-[#e2b7bd]" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div class="absolute top-[28%] right-[52%]" >
            RIFLE NAME:<br><input size="18" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorName">
            </div>
            <div class="absolute top-[28%] left-[52%]">
              RAIL:<br>
              <select class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorRail">
                <option value="">none/other</option>
                <option value=" MAWL-DA">MAWL-DA</option>
                <option value=" RANGEFINDER">RANGEFINDER</option>
              </select>
            </div>
            <div class="absolute top-[39%] left-[52%]">
              BALLISTIC ADVANTAGE:<br>
                <select type="checkbox" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryorBA">
                <option value="">NO</option>
                <option value=" BALLISTIC ADVANTAGE">BALLISTIC ADVANTAGE</option>
                </select>
            </div>
            <!-- line 0 -->
            <div class="absolute top-[50%] right-[50%]">
            <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">m
            </div>
            <!-- line 1 -->
            <div class="absolute top-[52.0%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">m
            </div>
            <!-- line 2 -->
            <div class="absolute top-[54.7%] right-[50%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">m
            </div>
            <!-- line 3 -->
            <div class="absolute top-[59.4%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">m
            </div>
            <!-- line 4 -->
            <div class="absolute bottom-[31.0%] right-[50%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">m
            </div>
            <!-- line 5 -->
            <div class="absolute bottom-[25.1%] left-[51%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">m
            </div>
             <!-- line 6 -->
             <div class="absolute bottom-[10.9%] right-[50%]" >
            <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">m
            </div>
            <div class="absolute top-[10%] left-[5%] w-[85%] bg-black rounded">Copy and paste the white text below into our Youtube comments and we'll add your work to the compendium!
            </div>
            <div class="absolute top-[19%] left-[7%] border bg-black rounded text-white uppercase w-[85%]" style="font-size: 0.7rem; font-family: ;">'{{ ryorName }}{{ ryorRail }}{{ ryorBA }}':[{{ ryor0 }},{{ ryor1 }},{{ ryor2 }},{{ ryor3 }},{{ ryor4 }},{{ ryor5 }},{{ ryor6 }}], Digital
           </div>
          </div>
        <div @click="ryorDigital = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>

<!-- RANDOM CARD -->
      
        <div v-show="showRando" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-80 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md rotate-[-0deg]" style="font-size: 1rem; font-family: angel;">
          <div>
            <img class="translate-x-[50%] h-[15%] w-[15%] rotate-[-10deg] rounded-md" src="/assets/camo_dice2.png">
          </div>
          <div class="text-center text-purple-700 rotate-[-1deg]" style="font-size: 1.3rem; font-family: angel;">
            {{ selectedRifle }}
          </div>
          <div class="text-center text-black" style="font-size: 0.8rem; font-family:courier;"><b>Be sure to select a compatible scope for this rifle!</b> You may also wish to select a version of this rifle with the MAWL-DA, RANGEFINDER OR BALLISTIC ADVANTAGE when applicable from the dropdown menu above.
            <br>
            <br>
            <b>Shotguns are included in the random list too!</b> <br>If you rolled a shotgun, you'll need to choose the EXPS3 sight from the Scope Menu.
            <br>
            <div class="text-center">
            <button v-if="gameName.game === 'Breakpoint'" @click="showRTK = !showRTK; showIntel = false; showShotguns = false; showHandguns = false; showRando = false;" class="active:text-red-800 px-2 border text-red-800 border-red-800 hover:text-red-600 rounded-lg shadow-black shadow-md font-sans rotate-[1deg] translate-x-[0%] z-40 cursor-pointer" style="font-family: angel;">
            Damage File
            </button>
          </div>
            And please let us know of any un-ranged rifle set-ups! We have completed most rifle/scope combinations but there is still work to be done. Click <a class="text-red-700 underline font-bold" href="https://www.youtube.com/watch?v=HwlGfuORwAY">Feedback</a> to give us a friendly reminder on something we've missed.
          </div>
          
          <div @click="showRando = false;" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x
          </div>
      </div>

<!-- DAMAGE FILE BUTTON -->
        <div v-if="gameName.game === 'Breakpoint'" @click="showRTK = !showRTK; showIntel = false; showShotguns = false; showHandguns = false; showRando = false;" class="active:text-red-800 px-2 border text-red-800 border-red-800 hover:text-red-600 rounded-lg shadow-black shadow-md font-sans absolute top-[67%] left-[62%] rotate-[-35deg] translate-x-[25%] z-40 cursor-pointer" style="font-family: angel;">
          Damage <br>File
        </div>
<!-- DAMAGE FILE CARD -->

        <div v-if="SmartDamage[gameName.game].hasOwnProperty(GetSmartRifleName(SmartRifles, selectedRifle)) && showRTK" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-75 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0.5deg]" style="font-size: 0.8rem; font-family: ZCOOL;">
          
          <!-- Shotguns -->
        <div v-if="gameName.game === 'Breakpoint'" @click="showShotguns = !showShotguns; showIntel = false; showHandguns = false; showTrig = false; showRando = false;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[0%] left-[1%] rotate-[-1deg] translate-x-[-0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: angel;">
          Shotguns 
        </div>
        <div v-show="showShotguns" @click="showShotguns = false" class="absolute top-[100px] sm:top-[15px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-[100%] max-w-xl left-2/4 -translate-x-[50%] p-4 pt-8 rounded-lg shadow-black shadow-md rotate-[-3deg]" style="font-size: 1rem; font-family: ZCOOL;">
          <br>
          <!-- {{ shotguns.Breakpoint }} -->
          <div class=""> 
          <img class="rounded-xl" src="/assets/ShotgunsBP.png"> 
          </div>
          <br>
          <div @click="showShotguns = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>
<!-- End Shotguns -->

<!-- Pistols -->
        <div v-if="gameName.game === 'Breakpoint'" @click="showHandguns = !showHandguns; showIntel = false; showShotguns = false; showTrig = false; showRando = false;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[0%] right-[16%] rotate-[1deg] translate-x-[-0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: angel;">
          Handguns 
        </div>
        <div v-show="showHandguns" @click="showHandguns = false" class="absolute top-[100px] sm:top-[10px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-[100%] max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md rotate-[-1deg]" style="font-size: 0.8rem; font-family: courier;">
          <b><u>For those interested</u>,</b><br>

          All Handgun rounds start dropping off around 75m to 100m with the exception of Sharp Thunder which begins dropping at 175m. The Ballistic Advantage perk seems to add <i><b>approximately</b></i> 50% range. So headshots past 100m with handguns are guesswork in general, especially without Ballistic Advantage.<br><br>
          
          The 5.7 USG, both P227's, both Maxim 9's, and the SC-IS actually do +5 more damage than what their stats in menu show. This can be seen if you pause to loadout menu when close to an enemy before even firing. Kill tests confirm this damage is real.<br><br>
          
          The Bailiff 410, both Desert Eagles and Sharp Thunder do +5 damage only on their 2nd consecutive kill within ~5 seconds. This can be seen if you pause to loadout menu after a kill. And it's crazy, but these handguns also suffer -20% suppressor damage despite not having suppressors, with the exception of the Desert Eagle Survival which has a suppressor that can't be removed. The only way to get full damage on these handguns is as Panther or Echelon class. These 4 handguns also don't receive the Pistolero perk buff.<br><br>
          
          There are no handgun loadouts that will one-shot a Wolf target center mass.<br>
          
          <br><u><b>Noteable one-shot kill scenarios for Sentinel personnel targets center mass while UNDETECTED:</b></u><br>
          <span style="font-size: 0.9rem;">
          - The Bailiff 410, Sharp Thunder, both Desert Eagles<br>
          - The SC-IS as Echelon class<br>
          - The SC-IS as Panther class with the Pistolero perk<br>
          - Any 31 damage handgun as Echelon class with the Pistolero perk<br>
          - The 5.7 USG as Echelon class<br>
          - The 5.7 USG as Panther class with the Pistolero perk<br>
          - Both Maxim 9's as Echelon class with the Pistolero perk<br></span>

          <br><u><b>Noteable one-shot kill scenarios for Sentinel personnel targets center mass while DETECTED:</b></u><br>
          <span style="font-size: 0.9rem;">
          - The Bailiff 410 as Panther or Echelon class<br>
          - Sharp Thunder as Echelon class<br> 
          - Sharp Thunder on 2nd consecutive kill as Panther class<br></span>
          
          <div @click="showHandguns = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>
<!-- End Pistols -->

          <div class="text-center font-bold text-black opacity-80 rotate-[2deg]" style="font-size: 1.5rem; font-family: angel;">{{ selectedRifle }} 
          </div>
          
          <div v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="leading-tight text-center font-bold text-black translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">DAMAGE: {{ rifleDamageValue }} <span v-if="bonusRifleValue" class="text-blue-500 font-bold italic">to {{ rifleDamageValue + bonusRifleValue }} </span> 
          </div>
          <div v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="text-center font-bold text-black translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">SUPPRESSED DAMAGE: {{ Math.floor(rifleDamageValue*0.8) }} 
            <span v-if="bonusRifleValue" class="text-blue-500 font-bold italic">to {{ Math.floor(((rifleDamageValue) + bonusRifleValue)*0.8) }} 
            </span> 
          </div>
<!-- SPECIAL NOTES -->
          <div v-if="SpecialNote[gameName.game][GetSpecialRifleName(SpecialRifles, selectedRifle)]" class="leading-tight text-black font-bold" style="font-size: 0.7rem; text-transform: uppercase; font-family: courier;">SPECIAL NOTE: 
            <span class="leading-tight font-thin" style="font-size: 0.7rem; text-transform: uppercase; font-family: courier;">{{ SpecialNote[gameName.game][GetSpecialRifleName(SpecialRifles, selectedRifle)] }}
            </span>
          </div>
<!-- BONUS DAMAGE -->
          <div v-if="bonusRifleValue" @click="showBonuslist = !showBonuslist;" class="text-center text-blue-500 font-bold italic hover:text-blue-500 no-underline hover:underline cursor-pointer translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">+{{ bonusRifleValue }} BONUS DAMAGE ON KILLS CHAINED WITHIN 10s
          </div>
<!-- RTK LIST -->
          <span @click="showRTKlist = !showRTKlist;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute left-[2%] rotate-[-2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: angel;">ROUNDS TO KILL
          </span>
<!-- TTK LIST -->
          <span v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" @click="showTTKlist = !showTTKlist;" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute right-[2%] rotate-[2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: angel;">TIME TO KILL
          </span>
          <br>
          <div class="leading-tight text-center font-light text-black rotate-[-1deg] opacity-90" style="font-size: 0.8rem; font-family: angel;">SENTINEL PERSONNEL:
          </div>

          <div class="leading-tight text-center font-bold text-black" style="font-size: 0.7rem;">STEALTHED: 
            <span class="leading-tight text-red-600">39HP
            </span>
          </div>

          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" > SUPPRESSED: {{ Math.ceil(39/Math.floor(rifleDamageValue*0.8)) }}
          </span>
<!-- BONUS STEALTHED SUPPRESSED -->
          <span v-if= "bonusRifleValue && Math.ceil(39/Math.floor(rifleDamageValue*0.8)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))" class="text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) }}
          </span>

<!-- TTK -->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle) && typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-black">
<!-- BONUS TTK SUPPRESSED             -->    
            <span>{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor(rifleDamageValue*0.8))).toFixed(3) }}s
            </span>
            <span class="text-blue-500 font-bold italic" style="font-family: ZCOOL;" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(39/Math.floor(rifleDamageValue*0.8)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8))).toFixed(3) }}s
            </span>
          </span>
          <br>
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" > LOUD: {{ Math.ceil(39/rifleDamageValue) }}
          </span>
<!-- BONUS STEALTHED LOUD -->
          <span v-if="bonusRifleValue && Math.ceil(39/rifleDamageValue) > Math.ceil(39/(rifleDamageValue + bonusRifleValue))" class="text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(39/(rifleDamageValue + bonusRifleValue)) }}
          </span>

<!-- TTK -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle) && typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-black">
<!-- BONUS TTK LOUD             -->
            <span>{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/rifleDamageValue)).toFixed(3) }}s
            </span>
            <span class="text-blue-500 font-bold italic" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(39/Math.floor(rifleDamageValue)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue) ))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)))).toFixed(3) }}s
            </span>
          </span>
          
          <div class="leading-tight text-center font-bold text-red-600" style="font-size: 0.7rem;">DETECTED: 100HP</div>
          
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold"> SUPPRESSED: {{ Math.ceil(100/Math.floor(rifleDamageValue*0.8)) }}
          </span>
<!-- BONUS SENTINEL SUPPRESSED -->
          <span v-if= "bonusRifleValue && Math.ceil(100/Math.floor(rifleDamageValue*0.8)) > Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))" class="text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) }}
          </span>
<!-- TTK -->
          <span v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-red-600 font-bold"> 
<!-- BONUS TTK SUPPRESSED             -->
            <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" >{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor(rifleDamageValue*0.8))).toFixed(3) }}s
            </span>
            <span class="text-blue-500 font-bold italic" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(100/Math.floor(rifleDamageValue*0.8)) > Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8))).toFixed(3) }}s
            </span>
          </span>
          <br>
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold"> LOUD: {{ Math.ceil(100/rifleDamageValue) }}
          </span> 
<!-- BONUS SENTINEL LOUD IF -->
          <span v-if= "bonusRifleValue && Math.ceil(100/rifleDamageValue) > Math.ceil(100/(rifleDamageValue + bonusRifleValue))" class="text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(100/(rifleDamageValue + bonusRifleValue)) }}
          </span>

<!-- TTK -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle) && typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-red-600 font-bold"> 
            
            <span>{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor(rifleDamageValue))).toFixed(3) }}s
            </span>
            <span class="text-blue-500 font-bold italic" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(100/Math.floor(rifleDamageValue)) > Math.ceil(100/Math.floor(rifleDamageValue + bonusRifleValue))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)))).toFixed(3) }}s
            </span>
          </span>          
          <div class="leading-tight text-center font-light text-black rotate-[1deg] opacity-90" style="font-size: 0.8rem; font-family: angel;">WOLF PERSONNEL: 
            <div class="leading-tight text-red-600 font-bold rotate-[-1deg] opacity-120" style="font-size: 0.7rem; font-family: ZCOOL;">130HP
            </div>
          </div>
          
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" >SUPPRESSED: {{ Math.ceil(130/Math.floor(rifleDamageValue*0.8)) }}
          </span>
<!-- BONUS WOLF SUPPRESSED IF -->
          <span v-if= "bonusRifleValue && Math.ceil(130/Math.floor(rifleDamageValue*0.8)) > Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) " class="text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) }}
          </span>
          
<!-- TTK -->
          <span v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-black">
<!-- BONUS TTK SUPPRESSED             -->
            <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" >{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue*0.8))).toFixed(3) }}s
            </span>
            <span class="text-blue-500 font-bold italic" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(130/Math.floor(rifleDamageValue*0.8)) > Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8))).toFixed(3) }}s
            </span>
          </span>
          <br>
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold">LOUD: {{ Math.ceil(130/rifleDamageValue) }}
          </span>
<!-- BONUS WOLF LOUD IF -->
          <span v-if= "bonusRifleValue && Math.ceil(130/rifleDamageValue) > Math.ceil(130/(rifleDamageValue + bonusRifleValue)) " class=" text-blue-500 font-bold italic"> &nbsp; W/BONUS: {{ Math.ceil(130/(rifleDamageValue + bonusRifleValue)) }}
          </span>

<!-- TTK -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle) && typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="absolute right-[3%] text-red-600 font-bold"> 
            
            <span>{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue))).toFixed(3) }}s</span>
            <span class="text-blue-500 font-bold italic" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number' && Math.ceil(130/Math.floor(rifleDamageValue)) > Math.ceil(130/Math.floor(rifleDamageValue + bonusRifleValue))"> &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)))).toFixed(3) }}s</span>
          </span>
          
<!-- FASTEST TTK @click="selectedScopeName='DIGITAL';selectedRifle='MK14 ASSAULT'" -->
          <div @click="showTTKlist = !showTTKlist;" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="text-right text-red-600 italic translate-x-[0%] translate-y-[-145%] hover:text-purple-500 no-underline hover:underline cursor-pointer" style="font-size: 0.7rem;">FASTEST TTK: 0.194s
          </div>
         
<!-- SLOWEST TTK @click="selectedScopeName='RU LONG-RANGE'; selectedRifle='SVD-63'" -->
          <div @click="showTTKlist = !showTTKlist;" v-if="typeof RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] === 'number'" class="text-right text-red-600 italic translate-x-[0%] translate-y-[-155%] hover:text-purple-500 no-underline hover:underline cursor-pointer" style="font-size: 0.7rem;">SLOWEST TTK: 2.000s
          </div>
          
          <div @click="showRTK = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x
          </div>
        </div>
<!-- End DAMAGE FILE -->

<!-- BONUS LIST -->
        <div v-show="showBonuslist" class="absolute top-[10px] sm:top-[20px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg font-bold" >
          <div class="text-blue-500 text-center rotate-[-0deg] opacity-100 italic" style="font-size: 1rem; font-family: ZCOOL;">BONUS DAMAGE RIFLES
          </div>
          <br>
          <div class="leading-tight text-center font-thin italic" style="font-size: 0.5rem; font-family: ZCOOL;">- SOME RIFLES RECEIVE 'HIDDEN' BONUS DAMAGE AFTER A KILL. YOU CAN OBSERVE THIS DAMAGE BONUS IN THE LOADOUT MENU IF YOU PAUSE TO LOADOUT MENU AFTER A KILL. YOU'LL SEE THAT THE DAMAGE NUMBER FOR YOUR RIFLE IS 5 OR 10 POINTS HIGHER THAN NORMAL. FOR EXAMPLE, THE MDR NORMALLY HAS 37 DAMAGE BUT AFTER A KILL IT HAS 42 DAMAGE TEMPORARILY. BONUS DAMAGE SEEMS TO LAST FOR 10s AFTER A KILL OR UNTIL YOU PAUSE TO MENU(YOU'LL SEE IT IN MENU, BUT IT RESETS TO NORMAL WHEN YOU UNPAUSE). EQUIPPING/REMOVING YOUR SUPPRESSOR OR SWITCHING WEAPONS ALSO RESETS THE DAMAGE.
          </div>
          <br>
          <div class="leading-tight translate-x-[10%] font-bold" style="font-size: 0.7rem; font-family: courier;" v-for="rifleBonus in sortedBonus" >
            {{rifleBonus.rifleName}}:<span class="text-bold italic text-blue-500" style="font-size: 0.7rem; font-family: ZCOOL;">+{{ rifleBonus.rifleValue }}</span>
          </div>
          <!-- <img src="/assets/HeavyHawk_AI_Logo.jpg"> -->
          <div @click="showBonuslist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>

<!-- RTK LIST -->
        <div v-show="showRTKlist" class="absolute top-[10px] sm:top-[20px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0deg]" >
          
          <div class="leading-tight font-thin italic" style="font-size: 0.7rem; font-family: ZCOOL;">
            <br>
            - Be mindful of burst fire. Some rifles actually fire 2 rounds instead of 3 when set to burst fire mode. 
          </div>
          <br>
          <div class="text-black text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: angel;">ROUNDS TO KILL WOLVES SUPPRESSED
          </div>
          <div class="leading-tight text-right translate-x-[-16%]" style="font-size: 0.7rem; font-family: courier;" v-for="(value,property) in sortedSuppRTK" >
            {{property}}: {{ value }}
          </div>
          <br>
          <div class="text-red-700 text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: angel;">ROUNDS TO KILL WOLVES LOUD
          </div>
          <div class="leading-tight text-right translate-x-[-16%]" style="font-size: 0.7rem; font-family: courier;" v-for="(value,property) in sortedLoudRTK" >
            {{property}}: {{ value }}
          </div>
          <div class="flex justify-center">
            <img class="object-fill h-48 w-96" src="/assets/9-bullets.gif">
          </div>
          <div @click="showRTKlist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>

<!-- TTK LIST -->
        <div v-show="showTTKlist" class="absolute top-[10px] sm:top-[20px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0deg]" >
          
          <div class="leading-tight font-thin italic" style="font-size: 0.7rem; font-family: ZCOOL;">
            <br>
            - Time to kill values are calculated using the rounds per minute and damage values listed in game. They are somewhat helpful for comparison between rifles here but are probably only approximate as they can't account for differences in bullet travel time. 
            <br>
            <br>
            - Sniper rifles are not included here as they don't have rounds per minute values listed in game. 
            <br>
            <br>
            - Burst fire rifles that lack full auto may have TTK values that are actually longer due to added time between trigger pulls.
            <br>
            <br>
          </div>
          <div class="text-black text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: angel;">
            TIME TO KILL WOLVES SUPPRESSED
          </div>
          <div class="leading-tight text-right translate-x-[-10%]" style="font-size: 0.7rem; font-family: courier;" v-for="(value,property) in sortedSuppTTK" >
            {{property}}: {{ value.toFixed(3) }}s
          </div>
          <br>
          <div class="text-red-700 text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: angel;">
            TIME TO KILL WOLVES LOUD
          </div>
          <div class="leading-tight text-right translate-x-[-10%]" style="font-size: 0.7rem; font-family: courier;" v-for="(value,property) in sortedLoudTTK" >
            {{property}}: {{ value.toFixed(3) }}s
          </div>
          <div class="flex justify-center">
          <img class="object-fill h-48 w-96" src="/assets/yes-they-deserved-to-die.gif">
          </div>
          <div @click="showTTKlist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
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
