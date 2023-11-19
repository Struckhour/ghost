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
const showWLIntel = ref(false);
const showShotguns = ref(false);
const showHandguns = ref(false);
const showRTK = ref(false);
const showTrig = ref(false);
const range = ref(0);
const altitude = ref(0);
const showRando = ref(false);
const searchQuery = ref('');

// BREAKPOINT RAILS, BA
const rail = ref('nil0');
const BA = ref(false);

// WILDLANDS BARREL, ZOOM, RAIL
const barrel = ref('nil0');
const zoom = ref(false);
const wlRF = ref('nil0');

// RANGE YOUR OWN RIFLE
const ryorScope = ref('T5XI');
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
const ryorTA31H = ref(false);

const gameName = defineProps<{game: string}>()
// const scopeList = Object.keys(fullData[gameName.game]);
const showBonuslist = ref(false);
const showRTKlist = ref(false);
const showTTKlist = ref(false);
// const alphaRifles = SmartRifles.slice().sort();

function AlphaRiflesFunc() {
  if (gameName.game === 'Breakpoint'){
    let rifleArray:string[] = [];
    for (const scope of Object.keys(fullData[gameName.game])){
      rifleArray = rifleArray.concat(Object.keys(fullData[gameName.game][scope]))
    }
    const uniqueRifles:string[] = Array.from(new Set(rifleArray))

    return uniqueRifles.filter((key) => !key.includes('MAWL-DA') && !key.includes('RANGE FINDER') && !key.includes('BALLISTIC ADVANTAGE') && !key.includes('+30 RANGE')).sort();
  } else {
    let rifleArray:string[] = [];
    for (const scope of Object.keys(fullData[gameName.game])){
      rifleArray = rifleArray.concat(Object.keys(fullData[gameName.game][scope]))
    }
    const uniqueRifles:string[] = Array.from(new Set(rifleArray))

    return uniqueRifles.filter((key) => !key.includes('BARREL') && !key.includes('RANGE FINDER') && !key.includes('ZOOMED')).sort();
  } 
}
const alphaRifles:string[] = AlphaRiflesFunc();

interface RifleObject {
    rifleName: string;
    rifleValue: number;
};

function getViableScope(rifle: string) {
  selectedRifle.value = rifle
  const viableScopes = []
  for (let scope of scopeNames){
    if (fullData[gameName.game][scope].hasOwnProperty(selectedRifle.value)){
      viableScopes.push(scope)
    }
  }
  if (viableScopes.includes(selectedScopeName.value)){
  } else {
    selectedScopeName.value = viableScopes[0]
  }  
}

const rangeAtts = computed(() => {
  let rangeString = '';
    if (rail.value === ' MAWL-DA'){
      rangeString = ' MAWL-DA';
    }else if (rail.value === ' RANGE FINDER'){
      rangeString = ' RANGE FINDER';
    }
    if (BA.value){
      rangeString += ' BALLISTIC ADVANTAGE';
    }
  return rangeString
})

const rangeAttsWL = computed(() => {
  let rangeString = '';
    if (barrel.value === ' SHORT BARREL'){
      rangeString = ' SHORT BARREL';
    }else if (barrel.value === ' LONG BARREL'){
      rangeString = ' LONG BARREL';
    }
    if (wlRF.value === ' RANGE FINDER'){
    rangeString += ' RANGE FINDER';
    }
    if (zoom.value){
      rangeString += ' ZOOMED';
    }
  return rangeString
})

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

const suppRTK: {[gameName: string]: {[rifleName: string]: number}} = {'Breakpoint':{}} 

for (const property in SmartDamage['Breakpoint']) {
  if (!loudGuns['Breakpoint'].includes(property)){
suppRTK['Breakpoint'][property]=(Math.ceil(130/(SmartDamage['Breakpoint'][property]*0.8)))
}}
const sortedSuppRTK = Object.fromEntries(
    Object.entries(suppRTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

function getSuppRTK() {
  const orderedRifleNames = Object.keys(sortedSuppRTK)
  const RTKIndex = orderedRifleNames.indexOf(selectedRifle.value)
  let newRTKIndex = 0;
  if (RTKIndex > 0) {
  newRTKIndex = RTKIndex - 1;}
 return orderedRifleNames[newRTKIndex]
}

// RTK WOLF LOUD RIFLE list
const loudRTK: {[gameName: string]: {[rifleName: string]: number}} = {'Breakpoint':{}} 

for (const property in SmartDamage['Breakpoint']) {
  if (!suppressedGuns['Breakpoint'].includes(property)){
loudRTK['Breakpoint'][property]=(Math.ceil(130/SmartDamage['Breakpoint'][property]))
}}
const sortedLoudRTK = Object.fromEntries(
    Object.entries(loudRTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

// TTK WOLF SUPPRESSED RIFLE list

const suppTTK: {[gameName: string]: {[rifleName: string]: number}} = {'Breakpoint':{}} 

for (const property in RPM['Breakpoint']) {
  if (SmartDamage['Breakpoint'].hasOwnProperty(property) && !loudGuns['Breakpoint'].includes(property)){
suppTTK['Breakpoint'][property]=((60/RPM['Breakpoint'][property])*Math.ceil(130/Math.floor(((SmartDamage['Breakpoint'][property]*0.8)))-1))
}}
const sortedSuppTTK = Object.fromEntries(
    Object.entries(suppTTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);

function getSuppTTK() {
  const orderedRifleNames = Object.keys(sortedSuppTTK)
  const TTKIndex = orderedRifleNames.indexOf(selectedRifle.value)
  let newTTKIndex = 0;
  if (TTKIndex > 0) {
  newTTKIndex = TTKIndex - 1;}
 return orderedRifleNames[newTTKIndex]
}

// TTK WOLF LOUD RIFLE list

const loudTTK: {[gameName: string]: {[rifleName: string]: number}} = {'Breakpoint':{}} 

for (const property in RPM['Breakpoint']) {
  if (SmartDamage['Breakpoint'].hasOwnProperty(property) && !suppressedGuns['Breakpoint'].includes(property)){
loudTTK['Breakpoint'][property]=((60/RPM['Breakpoint'][property])*Math.ceil(130/Math.floor((SmartDamage['Breakpoint'][property]))-1))
}}
const sortedLoudTTK = Object.fromEntries(
    Object.entries(loudTTK['Breakpoint']).sort((a,b) => a[1]-b[1])
);
// const reverseRifleNames = computed( () => {
//   const tempRifleNames = Object.keys(fullData[gameName.game][randoScope]).slice()
//   return tempRifleNames.sort().reverse();
// })

// function getNextLoudTTK() {

//   selectedRifle.value = 
// }


function getRandomRifle() {
  const randoScopeIndex = Math.floor(Math.random() * Object.keys(fullData[gameName.game]).length);
  const randoScope = Object.keys(fullData[gameName.game])[randoScopeIndex]
  selectedScopeName.value = randoScope

  const tempRifleNames = Object.keys(fullData[gameName.game][randoScope]).
  filter((key) => !key.includes('MAWL-DA') && !key.includes('RANGE FINDER') && !key.includes('BALLISTIC ADVANTAGE') && !key.includes('+30 RANGE') && !key.includes('BARREL') && !key.includes('ZOOMED'));
 
  const randoRifleIndex = Math.floor(Math.random() * tempRifleNames.length);
  selectedRifle.value = tempRifleNames[randoRifleIndex];
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

const scopeNames = Object.keys(fullData[gameName.game]);

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
  return fullData[gameName.game][selectedScopeName.value][selectedRifle.value + rangeAtts.value + rangeAttsWL.value]
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
    'TA31H': 'color: #fddebf;',
    'RU LONG-RANGE FOV': 'color: #f4c59e;',
    'RU LONG-RANGE': 'color: #f4c59e;',
    'PALADIN OPTIC': 'color: #f4c59e;',
    'EXPS3': 'color: #ffb5a6;',
  },
  Wildlands: {
    'TA31H': 'color: #e2b7bd;',
    'TARS101': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'T5XI TACTICAL': 'color:#f4c59e;',
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
    'EXPS3': 'color: #ffb5a6;',
  },
  Wildlands: {
    'TA31H': 'color: #e2b7bd;',
    'TARS101': 'color: #e2b7bd; text-shadow: 0 0 5px #000, 0 0 0px #fff, 0 0 10px #e2b7bd44, 0 0 15px #e2b7bd;',
    'T5XI TACTICAL': 'color:#f4c59e;',
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
  return rangeStyles[gameName.game][selectedScopeName.value]
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
      ['font-size: 0.9rem; top: 49%; right: 51%; transform: translate(0px, -1em);',
      'font-size: 0.7rem; top: 51.7%; left: 52.3%; transform: translate(0px, -1em);',
      'font-size: 1rem; top: 53.5%; right: 50.9%; transform: translate(0px, -1em);',
      'font-size: 0.8rem; top: 56%; left: 52%; transform: translate(0px, -1em)',
      'font-size: 1rem; top: 57.9%; right: 51%; transform: translate(0px, -1em);',
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
          class="active:text-[#571111] px-2 bg-lime-900 border-dashed border-2 text-black border-black hover:bg-black hover:text-white hover:border-red-700 rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[3deg] -translate-x-[146%] z-40 uppercase " style="font-size: ; font-family: aust;">
          Redeploy
        </router-link>
        <div v-if="gameName.game === 'Breakpoint'" @click="showIntel = !showIntel; showShotguns = false; showHandguns = false; showRTK = false; showTrig = false; showRando = false;" class="active:text-[#571111] px-2 bg-lime-900 border-dashed border-2 text-black border-black hover:bg-black hover:text-white hover:border-red-700 rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[-3deg] -translate-x-[70%] z-40 cursor-pointer uppercase" style="font-size: ; font-family: aust;">
          Intel
        </div>
        <div v-if="gameName.game === 'Wildlands'" @click="showWLIntel = !showWLIntel; showShotguns = false; showHandguns = false; showRTK = false; showTrig = false; showRando = false;" class="active:text-[#571111] px-2 bg-lime-900 border-dashed border-2 text-black border-black hover:bg-black hover:text-white hover:border-red-700 rounded-lg shadow-black shadow-md font-sans absolute left-[53%] -rotate-[-3deg] -translate-x-[70%] z-40 cursor-pointer uppercase" style="font-size: ; font-family: aust;">
          Intel
        </div>
        <div class="active:text-[#571111] px-2 bg-lime-900 border-dashed border-2 text-black border-black hover:text-white hover:bg-red-700 rounded-lg shadow-black shadow-md font-sans absolute left-[53%] rotate-[-2deg] translate-x-[22%] z-40 cursor-pointer uppercase" style="font-size: ; font-family: aust;">
          <a href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank">Feedback</a>
        </div>

<!-- TRIG BUTTON -->
        <div @click="showTrig = !showTrig; showIntel = false; showWLIntel = false; showShotguns = false; showHandguns = false; showRTK =false; showRando = false; showRYOR = false; ryorT5XI = false; ryorDR = false; ryorDigital = false; ryorTA31H = false;" class="active:text-[#571111] px-2 bg-lime-900 border-dashed border-2 text-black border-black hover:bg-black hover:text-white hover:border-red-700 rounded-lg shadow-black shadow-md font-sans absolute top-[50%] left-[53%] rotate-[-1deg] translate-x-[-86%] z-40 cursor-pointer uppercase" style="font-size: ; font-family: aust;">Triggernometry
        </div>

<!-- RANDOM BUTTON -->

        <div @click="showRando = true; showRTK = false; getRandomRifle(); showTrig = false; showIntel = false; showWLIntel = false; showShotguns = false; showHandguns = false; rail='nil0'; BA=false; barrel='nil0'; wlRF='nil0'; zoom=false" class="active:text-[#571111] px-2 bg-purple-900 border-dashed border-2 text-green-500 border-green-500 hover:text-purple-900 hover:bg-green-500 hover:border-purple-900 rounded-lg shadow-black shadow-md font-sans absolute top-[50%] left-[53%] rotate-[2deg] translate-x-[27%] z-40 cursor-pointer uppercase" style="font-size: ; font-family: aust;">RANDOM?
        </div>
        
      </div>
<!-- INTEL CARDS -->
      <div v-show="showIntel" @click="showIntel = false;" class="absolute top-[100px] sm:top-[200px] bg-[#eae4aa] z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg opacity-90" style="font-size: 1rem; font-family: capt;">
        <div class="text-center leading-tight rotate-[1deg]" style="font-size: 0.9rem;font-family: capt;">Select a rifle, then a scope, then add other range affecting attachments/perks etc. Not everything is ranged yet. Click 
        <a class="text-red-700 uppercase underline font-bold" href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank">Feedback</a>
          to make rifle/scope/attachment requests in our Youtube comments. And please let us know if you want to help range rifles.
        </div>
        <div class="text-center text-red-600 text-xs" style="font-family: capt;">Once you've selected your rifle, click the "dog tags" for detailed damage intel, and more, on your rifle.
        </div>
        <div class="text-center text-2xl rotate-[-1deg] opacity-70" style="font-family: tops;">Range In Breakpoint
        </div>
        <div class=" font-light text-xs" style="font-family: courier;">  The reason you don't see the bipod or bipod foregrip combo or the grip pod listed anywhere on this site is because contrary to what it says in game, the 'pod' attachments do not add range. Use them for their other benefits but don't expect them to make your bullets go further. Changing barrels also does not affect bullet drop in Breakpoint contrary to what it claims. Nor do mk1, mk2, mk3 upgrades despite claiming to add range. The only things that actually affect range in Breakpoint are: the MAWL-DA, the Range Finder, the Ballistic Advantage Perk, and +10, +20, +30 range on leveled weapons in gear score mode.
        </div>
        <div class="text-center text-2xl rotate-[1deg] text-red-600 opacity-90" style="font-family: tops;">Damage In Breakpoint
        </div>

        <div class="text- text-xs" style="font-family: courier;">
          Unalerted Sentinel personnel have 39hp.<br>
          Alerted Sentinel personnel have 100hp.<br>
          So a rifle that does 39 damage such as the MK17 Scout when unsuppressed will one-shot an unalerted Sentinel Breacher/Commander/Drone Operator/Radio Operator/Rifleman/Sniper center mass. Once they're alerted you need more rounds to exceed their increased 100hp so 39 damage times 3 rounds will exceed 100hp.<br><br>
          Wolves always have 130hp.<br>
          With the MK17 Scout 4 rounds at 39 damage is required to exceed a Wolf's 130hp. <br><br>
          Damage per round, rounds down when the 20% suppressor reduction is applied so 39 minus 20% damage becomes 31 damage, not 31.2. Be advised that there are a few weapons that have incorrect damage stats. In most cases these discrepancies appear to be unintended suppressor debuffs mostly occurring in the heavier handguns that can't even have suppressors(<i>see Handguns button on the Damage File sheet</i>). The only non handgun damage reduction I've encountered thus far is the underbarrel shotgun which claims 102 damage but fails to kill alerted Sentinel personnel at 100hp with one round center mass. There are a few DMR's that do not appear to suffer the 20% suppressor damage reduction with suppressors on. They are noted in the compendium. Finally, there are some hanguns that do +5 more damage than indicated(<i>see Handguns button on the Damage File sheet for any rifle</i>) and there are some hidden momentum-type damage bonuses applied to certain ASR's and DMR's after a kill. These rifles are also noted in the compendium on their Damage File sheets.
        </div>
        
        <div @click="showIntel = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
      </div>
<!-- WILDLANDS INTEL -->
      <div v-show="showWLIntel" @click="showWLIntel = false;" class="absolute top-[100px] sm:top-[200px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg opacity-90" style="font-size: 1rem;font-family: courier;">
        <div class="text-center leading-tight rotate-[1deg]" style="font-size: 0.8rem;font-family: capt;">Select a rifle, then a scope, then add other range affecting attachments/perks etc. Not everything is ranged yet. Click 
        <a class="text-red-700 uppercase underline font-bold" href="https://www.youtube.com/watch?v=HwlGfuORwAY" target="_blank">Feedback</a>
          to make rifle/scope/attachment requests in our Youtube comments. And please let us know if you want to help range rifles.
        </div>
        <div class="text-center text-2xl rotate-[-1deg] opacity-70" style="font-family: tops;">Range In Wildlands
        </div>
        <div class=" font-light text-xs" style="font-family: courier;">  Changing barrels, the Range Finder and zooming in or out on scopes like the TARS101 affect bullet drop in Wildlands.
        </div>
        <div class="text-center text-2xl rotate-[1deg] text-red-600 opacity-90" style="font-family: tops;">Damage In Wildlands
        </div>
        <div class="text-center text-xs" style="font-family: courier;">
        Unalerted sicarios can be one-shot killed by any weapon. Unidad sometimes take more.<br>
          <a class="text-blue-700 hover:text-purple-700 text-lg font-bold underline" style="font-family: ZCOOL;" href="https://docs.google.com/spreadsheets/d/1w0KRBZSdb3SFBZVAncBGit3ixPSsSMWpEiOkDSlqrZw/edit#gid=1681802407" target="_blank">Here is an external resource created by others with more details on damage to alerted Unidad enemies in Wildlands.</a>
        </div>
        <div @click="showWLIntel = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
      </div>
  <!-- Scope and Rifle Menus -->

      <div class="grid grid-cols-2">
        
        <div @click="rail='nil0'; BA=false; barrel='nil0'; wlRF='nil0'; zoom=false" class="z-40 font-sans tracking-normal justify-self-end mr-2">
          <Riflemenu
            :rifles="alphaRifles"
            :showMenu="showRifleMenu"
            :rifle-title="selectedRifle"
            :scopeMenu="showScopeMenu"
            :selectedScope="selectedScopeName"
            :gameName="gameName.game"
            @selected="(rifle) => getViableScope(rifle)" 
            @rifle-menu-clicked="changeRifleMenu"
            @scope-menu="removeScopeMenu"
          />
        </div>

        <div @click="rail='nil0'; BA=false; barrel='nil0'; wlRF='nil0'; zoom=false" class="z-30 font-sans tracking-normal justify-self-start ml-2">
          <Scopemenu
            :scopes="scopeNames"
            :show="showScopeMenu"
            :rifleMenu="showRifleMenu"
            :selectedScopeName="selectedScopeName"
            :selectedRifle="selectedRifle"
            :gameName="gameName.game"
            @chosenScope="changeScope"
            @menu-clicked="changeScopeMenu"
            @rifle-menu="removeRifleMenu"
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
            <img v-show="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[12.8%] top-[28.4%] left-[44%]"
            />
            <div v-if="selectedScopeName==='DUAL RANGE' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[35.6%] left-[51.1%] translate-x-[0%]">
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
            <img v-show="selectedScopeName==='TARS101' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[7.7%] top-[38.6%] left-[52%]"
            />
            <div v-if="selectedScopeName==='TARS101' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute bottom-[53%] left-[55%]">
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
            <img v-show="selectedScopeName==='DIGITAL' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" src="/assets/soldier-silhouette.png" class="absolute h-[11%] top-[33.8%] left-[51%]"
            />
            <div v-if="selectedScopeName==='DIGITAL' && gameName.game === 'Breakpoint' && silhScope.hasOwnProperty(selectedRifle)" class="absolute top-[37%] left-[55.5%]">
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

        <!-- Rifle and Scope LABELS -->
        <div
          class="
            absolute
            px-2
            text-center
            w-[32%]
            sm:w-[25%]
            top-[5%]
            right-[50%]
            underline
          "
          :style="getRifleLabelStyle()"
        >
          <div class="text-sm">
            <!-- <u>Rifle:</u><br /> -->
            <glitched-writer :text="selectedRifle" appear preset="nier" />  
          </div>

        </div>   

        <div
          class="
            absolute
            px-2
            text-center
            w-[32%]
            sm:w-[25%]
            top-[5%]
            left-[50%]
            underline
            "
          :style='getScopeLabelStyle()'
        >
          <div class="text-sm">
          <!-- <u>Scope:</u><br /> -->
          <glitched-writer :text="selectedScopeName" appear preset="nier" />
        </div>
        </div>
 
<!-- ENDORSEMENT SEZZING -->
        <div v-if="sezzing[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle)" class="absolute h-[15%] w-[30%] top-[30%] right-[10%] text-red-800 rotate-[-10deg] text-2xl" style="font-size: 0.8rem; font-family: arma;">
        {{sezzing[gameName.game][selectedScopeName][selectedRifle]}}
        </div>

<!-- TRIG CARD -->
        <div v-show="showTrig" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-75 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md text-center leading-tight" >
      <!-- RYOR BUTTON -->

            <div v-if="gameName.game === 'Breakpoint'" @click="showRYOR = !showRYOR; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-red-700 px-2 border text-black border-black hover:text-white hover:bg-black hover:border-white rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[-2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: aust;">range your<br> own rifle
            </div>

            <!-- <router-link to="/app/ryorBP" class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] left-[20%] rotate-[-2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: arma;">Range your<br> own rifle
            </router-link> -->

            <div class="font-bold opacity-90 rotate-[0deg]" style="font-size: 1rem; font-family: capt;">
              Calculate downhill <br>shots below:
            </div>
            <div class="font-light" style="font-size: 0.7rem; font-family: courier;">(This also works for uphill shots.)
            </div>           
            <div class="text-center rotate-[0deg] font-bold" style="font-size: 1rem; font-family: courier;">c = Range To Target:<input size="3" class="border-2 border-black font-bold pl-1" v-model="range">m
            </div>
            <div class="text-center font-bold translate-y-[20%]" style="font-size: 1rem; font-family: courier;">a = Altitude To Target:<input size="3" class="border-2 border-black font-bold pl-1" v-model="altitude">m
            </div>
            <div class="text-red-700 font-bold rotate-[2deg]" style="font-size: 1.5rem; font-family: tops;">[{{ Math.round((range**2-altitude**2)**0.5) }}]<span class="" style="font-size: ; font-family: courier;">m</span>
              </div>
            <div class="text-red-700 font-bold" style="font-size: 1rem; font-family: courier;">b = True Ballistic Range:</div><div class="font-light text-red-700" style="font-size: 0.7rem; font-family: courier;">(Aim as though you are this range from target.)
            </div>          
            <img class="h-[100%] w-[100%]" src="/assets/triangle.png">  
          <div @click="showTrig = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
<!-- END TRIG card -->
<!-- RYOR CARD -->
        <!-- <div v-show="showRYOR" class="absolute top-[0%] sm:top-[0%] bg-black bg-opacity-100 text-xl z-[51] w-[100%] sm:w-full max-w-2xl left-2/4 -translate-x-2/4 p-0 pt-8 rounded-lg shadow-black shadow-md leading-tight text-white" style="font-size: ; font-family: ZCOOL;">

          <div v-if="gameName.game === 'Breakpoint'" @click="ryorDR = !ryorDR; ryorT5XI = false; ryorDigital = false; ryorTA31H = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[1deg] translate-x-[35%] z-40 cursor-pointer" style="font-size: 1rem; font-family: arma;">
            Dual Range
          </div>

          <div v-if="gameName.game === 'Breakpoint'" @click="ryorDigital = !ryorDigital; ryorT5XI = false; ryorDR = false; ryorTA31H = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[-1deg] translate-x-[194%] z-40 cursor-pointer" style="font-size: 1rem; font-family: arma;">
            Digital
          </div>

          <div v-if="gameName.game === 'Breakpoint'" @click="ryorTA31H = !ryorTA31H; ryorT5XI = false; ryorDR = false; ryorDigital = false; showRTK = false; showTrig = false; showIntel = false; showShotguns = false; showHandguns = false; " class="active:text-[#571111] px-2 border text-[#af3b3b] border-[#af3b3b] hover:text-[#ed3b3b] rounded-lg shadow-black shadow-md font-sans absolute top-[1%] rotate-[1deg] translate-x-[375%] z-40 cursor-pointer" style="font-size: 1rem; font-family: arma;">
            TA31H
          </div>
        <div @click="showRYOR = false" class="absolute top-[-5px] right-5 text-5xl text-white cursor-pointer" style="font-family: courier;">x</div>
        </div> -->
<!-- RYOR CARD -->
        <div v-show="showRYOR" class="absolute top-[0%] sm:top-[0%] bg-black bg-opacity-50 text-xl z-[51] h-[100%] w-[100%] sm:w-full max-w-2xl left-2/4 -translate-x-2/4 p-0 pt-8 rounded-lg shadow-black shadow-md leading-tight text-white" style="font-size: 0.7rem; font-family: ZCOOL;">
          <div class="text-center">
            SCOPE:<br>
            <select class="bg-white bg-opacity-50 border border-black rounded text-center text-black font-bold cursor-pointer" style="font-size: 0.7rem; font-family: courier;" v-model="ryorScope">
              <option value="T5XI">T5XI</option>
              <option value="DUAL RANGE">DUAL RANGE</option>
              <option value="TARS101">TARS101</option>
              <option value="VC16">VC16</option>
              <option value="ACSS">ACSS</option>
              <option value="DIGITAL">DIGITAL</option>
              <option value="SLX5">SLX5</option>
              <option value="TA31H">TA31H</option>
              <option value="RU LONG-RANGE FOV">RU LONG-RANGE FOV</option>
              <option value="RU LONG-RANGE">RU LONG-RANGE</option>
              <option value="EXPS3">EXPS3</option>

            </select>
          </div>
          <img v-if="ryorScope==='T5XI'" class="h-full w-full top-0 absolute top-[0%] object-cover max-h-[42rem] m-auto rounded-full z-[-1]" src="/assets/BP-Scopes/BP-T5XISight.jpg"/>
          
          <img v-else-if="ryorScope==='DUAL RANGE'" src="/assets/BP-Scopes/BP-Dual-Range-Sight.jpg" class="h-full w-full top-[0%] absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='TARS101'" src="/assets/BP-Scopes/BP-TARS101.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='VC16'" src="/assets/BP-Scopes/BP-VC16-Sight.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='ACSS'" src="/assets/BP-Scopes/BP-ACSS-Sight.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full  z-[-1]"/>

          <img v-else-if="ryorScope==='DIGITAL'" src="/assets/BP-Scopes/BP-Digital-Sight.jpg" class="h-full w-full top-[0%] absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]">

          <img v-else-if="ryorScope==='SLX5'" src="/assets/BP-Scopes/BP-SLX5-Sight.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='TA31H'" src="/assets/BP-Scopes/BP-TA31H-Sight.jpg" class="h-full w-full top-[0%] absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='RU LONG-RANGE FOV'" src="/assets/BP-Scopes/BP-RU-Long-Range-FOV-Sight.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else-if="ryorScope==='RU LONG-RANGE'" src="/assets/BP-Scopes/BP-RU-Long-Range-Sight.jpg" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

          <img v-else="ryorScope==='EXPS3'" src="/assets/BP-Scopes/BP-EXPS3.png" class="h-full w-full top-0 absolute object-cover max-h-[42rem] m-auto rounded-full z-[-1]"/>

         
          <div class="" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div class="absolute top-[25%] right-[52%] text-center" >
            RIFLE NAME:<br>
            <input size="18" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold cursor-pointer" style="font-size: 0.7rem; font-family: courier;" v-model="ryorName">
            </div>
            <div class="absolute top-[25%] left-[52%]">
              RAIL:<br>
              <select class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold cursor-pointer" style="font-size: 0.7rem; font-family: courier;" v-model="ryorRail">
                <option value="">Rail Cover</option>
                <option value="">PEQ-15</option>
                <option value="">ATPIALx3</option>
                <option value=" MAWL-DA">MAWL-DA</option>
                <option value=" RANGE FINDER">RANGE FINDER</option>
              </select>
            </div>
            <div class="absolute top-[40%] left-[52%]">
              BALLISTIC ADVANTAGE:
              <label class="absolute top-[3%] left-[100%]">
                <input type="checkbox" v-model="ryorBA" class="cursor-pointer">
              </label>
            </div>
            <div>
  <!-- RYOR T5XI -->
              <div v-if="ryorScope==='T5XI'">
                <!-- line 0 -->
                <div class="absolute top-[48%] right-[51%]">
                <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0" >
                </div>
                <!-- line 1 -->
                <div class="absolute top-[52.3%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
                </div>
                <!-- line 2 -->
                <div class="absolute top-[56.4%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
                </div>
                <!-- line 3 -->
                <div class="absolute top-[60.6%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
                </div>
                <!-- line 4 -->
                <div class="absolute top-[64.8%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
                </div>
              </div>
  <!-- RYOR DUAL RANGE -->
              <div v-else-if="ryorScope==='DUAL RANGE'" class="text-" style="font-size: 0.7rem; font-family: ZCOOL;">
                <!-- line 0 -->
                <div class="absolute top-[49%] right-[51%]">
                <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
                </div>
                <!-- line 1 -->
                <div class="absolute top-[51.3%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
                </div>
                <!-- line 2 -->
                <div class="absolute top-[55.2%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
                </div>
                <!-- line 3 -->
                <div class="absolute top-[58.2%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
                </div>
                <!-- line 4 -->
                <div class="absolute top-[61.2%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
                </div>
                <!-- line 5 -->
                <div class="absolute top-[64.7%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
                </div>
                <!-- line 6 -->
                <div class="absolute top-[67.8%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
                </div>
                <!-- line 7 -->
                <div class="absolute top-[71.2%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor7">
                </div>
                <!-- line 8 -->
                <div class="absolute top-[74.3%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor8">
                </div>
                <!-- line 9 -->
                <div class="absolute top-[77.5%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor9">
                </div>
                <!-- line 10 -->
                <div class="absolute top-[80.3%] right-[53.2%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor10">
                </div>
            </div>
<!-- RYOR TARS101 -->
              <div v-else-if="ryorScope==='TARS101'" class="text-" style="font-size: 0.7rem; font-family: courier;">
                <!-- line 0 -->
                <div class="absolute top-[48.5%] right-[51%]">
                <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
                </div>
                <!-- line 1 -->
                <div class="absolute top-[50.2%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
                </div>
                <!-- line 2 -->
                <div class="absolute top-[52.3%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
                </div>
                <!-- line 3 -->
                <div class="absolute top-[54.5%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
                </div>
                <!-- line 4 -->
                <div class="absolute top-[56.4%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
                </div>
                <!-- line 5 -->
                <div class="absolute top-[58.3%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
                </div>
                <!-- line 6 -->
                <div class="absolute top-[60.1%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
                </div>
                <!-- line 7 -->
                <div class="absolute top-[62.1%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor7">
                </div>
                <!-- line 8 -->
                <div class="absolute top-[63.9%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor8">
                </div>
                <!-- line 9 -->
                <div class="absolute top-[65.6%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor9">
                </div>
                <!-- line 10 -->
                <div class="absolute top-[67.5%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor10">
                </div>
            </div>
<!-- RYOR VC16 -->
            <div v-else-if="ryorScope==='VC16'" class="text-" style="font-size: 0.7rem; font-family: courier;">
                <!-- line 0 -->
                <div class="absolute top-[47.6%] right-[51%]">
                <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
                </div>
                <!-- line 1 -->
                <div class="absolute top-[49.1%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
                </div>
                <!-- line 2 -->
                <div class="absolute top-[50.8%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
                </div>
                <!-- line 3 -->
                <div class="absolute top-[52.2%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
                </div>
                <!-- line 4 -->
                <div class="absolute top-[53.8%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
                </div>
                <!-- line 5 -->
                <div class="absolute top-[56%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
                </div>
                <!-- line 6 -->
                <div class="absolute top-[58.5%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
                </div>
                <!-- line 7 -->
                <div class="absolute top-[60.3%] left-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor7">
                </div>
                <!-- line 8 -->
                <div class="absolute top-[71%] right-[51%]" >
                <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor8">
                </div>
            </div>
  <!-- RYOR ACSS -->
            <div v-else-if="ryorScope==='ACSS'" class="text-">
              <!-- line 0 -->
              <div class="absolute top-[48%] right-[51%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[49.7%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[51.6%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[53.5%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[56.0%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 5 -->
              <div class="absolute top-[59.2%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
              <!-- line 6 -->
              <div class="absolute top-[63%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
              </div>
            </div>
  <!-- RYOR DIGITAL -->
            <div v-else-if="ryorScope==='DIGITAL'" class="text-">
                      <!-- line 0 -->
                      <div class="absolute top-[48.6%] right-[50%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[50.5%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[54%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[59.4%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[65.0%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 5 -->
              <div class="absolute top-[71%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
              <!-- line 6 -->
              <div class="absolute top-[87.3%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
              </div>
            </div>
  <!-- RYOR SLX5 -->
            <div v-else-if="ryorScope==='SLX5'" class="text-">
              <!-- line 0 -->
              <div class="absolute top-[47.5%] right-[50%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[50.3%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[53.2%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[56.5%] left-[52%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[60.7%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 5 -->
              <div class="absolute top-[65.7%] left-[52%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
              <!-- line 6 -->
              <div class="absolute top-[71.7%] right-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
              </div>
            </div>
            <div v-else-if="ryorScope==='TA31H'" class="">
              <!-- line 0 -->
              <div class="absolute top-[49%] right-[50%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[51.4%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[53.7%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[56.4%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor3">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[60%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 5 -->
              <div class="absolute top-[64.7%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
              <!-- line 6 -->
              <div class="absolute bottom-[26.4%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor6">
              </div>
            </div>
<!-- RYOR RU LONG-RANGE FOV -->
            <div v-else-if="ryorScope==='RU LONG-RANGE FOV'" class="">
              <!-- line 0 -->
              <div class="absolute top-[48%] right-[51.2%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[51%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[54%] right-[51.2%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[58.5%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[64.5%] right-[51.2%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
            </div>
<!-- RU LONG-RANGE -->
            <div v-else-if="ryorScope==='RU LONG-RANGE'" class="">
              <!-- line 0 -->
              <div class="absolute top-[48%] right-[51.2%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[50.5%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[53%] right-[51.2%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
              <!-- line 3 -->
              <div class="absolute top-[55.1%] left-[51%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor4">
              </div>
              <!-- line 4 -->
              <div class="absolute top-[57.3%] right-[51.2%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
              <!-- line 5 -->
              <div class="absolute top-[59.5%] left-[51.2%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor5">
              </div>
            </div>
<!-- EXPS3 -->
          <div v-else="ryorScope==='EXPS3'" class="">
              <!-- line 0 -->
              <div class="absolute top-[51%] right-[50%]">
              <input size="3" class="text-center bg-white bg-opacity-50 border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor0">
              </div>
              <!-- line 1 -->
              <div class="absolute top-[55.5%] left-[52%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor1">
              </div>
              <!-- line 2 -->
              <div class="absolute top-[64%] right-[50%]" >
              <input size="3" class="text-center bg-white bg-opacity-50  border border-black rounded text-black font-bold" style="font-size: 0.7rem; font-family: courier;" v-model="ryor2">
              </div>
            </div>
        </div>

            <div class="absolute top-[0%] left-[15%] w-[70%] bg-white rounded text-center text-black opacity-60">Copy and paste the black box below into our Youtube comments and we'll add your work to the compendium!</div>
            
            <div class="absolute top-[20%] left-[11%] border bg-black rounded text-center text-white uppercase w-[78%]" style="font-size: 0.7rem; font-family: ;">'{{ ryorName }}{{ ryorRail }}{{ ryorBA?' BALLISTIC ADVANTAGE':'' }}':[{{ ryor0? `${ryor0},`:'' }}{{ ryor1? `${ryor1},`:''}}{{ ryor2? `${ryor2},`:'' }}{{ ryor3? `${ryor3},`:'' }}{{ ryor4? `${ryor4},`:'' }}{{ ryor5? `${ryor5},`:'' }}{{ ryor6? `${ryor6},`:'' }}{{ ryor7? `${ryor7},`:'' }}{{ ryor8? `${ryor8},`:'' }}{{ ryor9? `${ryor9},`:'' }}{{ ryor10? `${ryor10},`:'' }}],
           </div>
           
          </div>
        <div @click="showRYOR = false" class="absolute top-[-5px] right-3 text-5xl cursor-pointer text-white" style="font-family: courier;">x</div>
        </div>

<!-- DAMAGE FILE BUTTON -->

        <button v-if="gameName.game === 'Breakpoint'" @click="showRTK = !showRTK; showIntel = false; showShotguns = false; showHandguns = false; showRando = false;" class="absolute top-[57.25%] right-[19.15%] rotate-[-31deg] translate-x-[0%] z-40 cursor-pointer h-[18.4%] w-[10.4%] border-4 border-dotted border-transparent rounded-3xl hover:bg-black hover:bg-opacity-20 hover:border-black hover:border-opacity-70">
        </button>        
        <div >
          <img v-if="gameName.game === 'Breakpoint'" class="absolute top-[60.5%] left-[64%] rotate-[36deg] object-fit h-[%] w-[30%]" src="/assets/dogtags.png">
        </div>
<!-- DAMAGE FILE CARD -->

      <div v-if="SmartDamage[gameName.game].hasOwnProperty(GetSmartRifleName(SmartRifles, selectedRifle)) && showRTK" class="absolute top-[10px] sm:top-[10px] bg-[#eae4aa] bg-opacity-90 text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0.5deg]" style="font-size: 0.8rem; font-family: ZCOOL;">
          
          <!-- Shotguns -->
          <div v-if="gameName.game === 'Breakpoint'" @click="showShotguns = !showShotguns; showIntel = false; showHandguns = false; showTrig = false; showRando = false;" class="active:text-red-600 px-1 border text-black border-black hover:text-white hover:bg-black hover:border-white rounded-lg shadow-black shadow-md font-sans absolute top-[0%] left-[1%] rotate-[-1deg] translate-x-[-0%] z-40 cursor-pointer uppercase" style="font-size: 0.7rem; font-family: aust;">
            Shotguns 
          </div>
          <div v-show="showShotguns" @click="showShotguns = false" class="absolute top-[100px] sm:top-[15px] bg-[#eae4aa] text-xl font-serif z-[51] w-[100%] sm:w-[100%] max-w-xl left-2/4 -translate-x-[50%] p-1 pt-8 rounded-xl shadow-black shadow-md rotate-[-1deg] opacity-95" style="font-size: 1rem; font-family: courier;">
          <!-- <div class="border border-black border-dotted text-center absolute h-[20%] w-1/3" style="font-size: 0.7rem;">All shotguns will one-shot Sentinel personnel targets center mass while undetected.
          </div>
          <div class="border border-black border-dotted text-center absolute left-1/3 text-xs h-[16%] w-1/3" style="font-size: 0.7rem;">Rounds to kill Senetinel Detected
          </div>
          <div class="border border-black border-dotted text-center absolute left-2/3 text-xs h-[16%] w-1/3" style="font-size: 0.7rem;">Rounds to kill Wolves
          </div>
          <div class="border border-black border-dotted text-center absolute top-[23%] left-1/3 text-xs w-1/6" style="font-size: 0.7rem;">Suppressed
          </div>
          <div class="border border-black border-dotted text-center absolute top-[23%] left-1/2 text-xs w-1/6" style="font-size: 0.7rem;">Loud
          </div>
          <div class="border border-black border-dotted text-center absolute top-[23%] left-2/3 text-xs w-1/6" style="font-size: 0.7rem;">Suppressed
          </div>
          <div class="border border-black border-dotted text-center absolute top-[23%] left-[83.3%] text-xs w-1/6" style="font-size: 0.7rem;">Loud
          </div> -->

          <!-- {{ shotguns.Breakpoint }} -->
          <div class=""> 
          <img class="rounded" src="/assets/ShotgunsBP.png"> 
          </div>

          <div @click="showShotguns = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>
<!-- End Shotguns -->

<!-- Pistols -->
        <button v-if="gameName.game === 'Breakpoint'" @click="showHandguns = !showHandguns; showIntel = false; showShotguns = false; showTrig = false; showRando = false;" class="active:text-red-600 px-1 border text-black border-black hover:text-white hover:bg-black hover:border-white rounded-lg shadow-black shadow-md font-sans absolute top-[0%] right-[16%] rotate-[1deg] translate-x-[-0%] z-40 cursor-pointer uppercase" style="font-size: 0.7rem; font-family: aust;">
          Handguns 
        </button>
        <div v-show="showHandguns" @click="showHandguns = false" class="absolute top-[100px] sm:top-[10px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-[100%] max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md rotate-[-1deg] opacity-95" style="font-size: 0.8rem; font-family: courier;">
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

          <div class="text-center font-bold text-black opacity-70 rotate-[1deg]" style="font-size: 1.5rem; font-family: tops;">
            {{ selectedRifle }} 
          </div>
          
          <div v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="leading-tight text-center font-bold text-black translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">
            DAMAGE: {{ rifleDamageValue }} 
            <span v-if="bonusRifleValue" class="text-blue-500 font-bold italic">
              to {{ rifleDamageValue + bonusRifleValue }} 
            </span> 
          </div>
          <div v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="text-center font-bold text-black translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">
            SUPPRESSED DAMAGE: {{ Math.floor(rifleDamageValue*0.8) }} 
            <span v-if="bonusRifleValue" class="text-blue-500 font-bold italic">
              to {{ Math.floor(((rifleDamageValue) + bonusRifleValue)*0.8) }} 
            </span> 
          </div>
<!-- SPECIAL NOTES -->
          <div v-if="SpecialNote[gameName.game][GetSpecialRifleName(SpecialRifles, selectedRifle)]" class="leading-tight text-black font-bold" style="font-size: 0.7rem; text-transform: uppercase; font-family: courier;">
            SPECIAL NOTE: 
            <span class="leading-tight font-thin" style="font-size: 0.7rem; text-transform: uppercase; font-family: courier;">
              {{ SpecialNote[gameName.game][GetSpecialRifleName(SpecialRifles, selectedRifle)] }}
            </span>
          </div>
<!-- BONUS DAMAGE -->
          <div class="text-center">
            <button v-if="bonusRifleValue" @click="showBonuslist = !showBonuslist;" class="active:text-white border px-1 rounded-xl border-blue-500 hover:bg-black shadow-black shadow-md  text-center text-blue-500 font-bold italic hover:text-blue-500 no-underline hover:underline translate-y-[-0%]" style="font-size: 0.7rem; font-family: ZCOOL;">
              +{{ bonusRifleValue }} BONUS DAMAGE ON KILLS CHAINED WITHIN 10s
            </button>
          </div>
<!-- RPM VALUE -->
          <span class="absolute top-[14%] right-[3%] font-bold" style="font-size: 0.7rem; font-family: ZCOOL;">
            RPM: {{ RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)] }}
          </span>
<!-- RTK LIST -->
          <button @click="showRTKlist = !showRTKlist;" class="active:text-red-600 px-1 border border-dotted text-black border-black hover:bg-black hover:text-white hover:border-white rounded-lg shadow-black shadow-md absolute left-[2%] rotate-[-2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: capt;">ROUNDS TO KILL
          </button>
<!-- TTK LIST -->
          <button @click="showTTKlist = !showTTKlist;" class="active:text-red-600 px-1 border border-dotted text-black border-black hover:bg-black hover:text-white hover:border-white rounded-lg shadow-black shadow-md absolute right-[2%] rotate-[2deg] translate-x-[0%] z-40 cursor-pointer" style="font-size: 0.7rem; font-family: capt;">TIME TO KILL
          </button>
          <br>
<!-- RTK AND TTK SELECTED RIFLE -->
          <div class="leading-tight text-center font-light text-black rotate-[-1deg] opacity-90" style="font-size: 0.8rem; font-family: arma;">SENTINEL PERSONNEL:
          </div>
<!-- STEALTHED SENTINEL RTK AND TTK -->
          <div class="leading-tight text-center font-bold text-black" style="font-size: 0.7rem;">STEALTHED: 
            <span class="leading-tight text-red-600">39HP
            </span>
          </div>

<!-- STEALTHED SUPPRESSED -->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" > SUPPRESSED: {{ Math.ceil(39/Math.floor(rifleDamageValue*0.8)) }}
          </span>
<!-- BONUS STEALTHED SUPPRESSED -->
          <span v-if= "bonusRifleValue && Math.ceil(39/Math.floor(rifleDamageValue*0.8)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))" class="text-blue-500 font-bold italic">
             &nbsp; W/BONUS: {{ Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) }}
          </span>

<!-- TTK SUPPRESSED -->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="absolute right-[3%] text-black">
            <span>
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor(rifleDamageValue*0.8)-1)).toFixed(3) }}s
            </span>
<!-- BONUS TTK SUPPRESSED -->    
            <span class="text-blue-500 font-bold italic" style="font-family: ZCOOL;" v-if="Math.ceil(39/Math.floor(rifleDamageValue*0.8)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)-1)).toFixed(3) }}s
            </span>
          </span>
          <br>

<!-- STEALTHED LOUD -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" > 
            LOUD: {{ Math.ceil(39/rifleDamageValue) }}
<!-- BONUS STEALTHED LOUD -->
            <span v-if="bonusRifleValue && Math.ceil(39/rifleDamageValue) > Math.ceil(39/(rifleDamageValue + bonusRifleValue))" class="text-blue-500 font-bold italic">
               &nbsp; W/BONUS: {{ Math.ceil(39/(rifleDamageValue + bonusRifleValue)) }}
            </span>
          </span>

<!-- TTK STEALTHED LOUD -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="absolute right-[3%] text-black">
            <span>
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/rifleDamageValue-1)).toFixed(3) }}s
            </span>
<!-- BONUS TTK STEALTHED LOUD -->
            <span class="text-blue-500 font-bold italic" v-if="Math.ceil(39/Math.floor(rifleDamageValue)) > Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue) ))">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(39/Math.floor((rifleDamageValue + bonusRifleValue)-1))).toFixed(3) }}s
            </span>
          </span>

<!-- DETECTED SENTINEL RTK AND TTK -->
          <div class="leading-tight text-center font-bold text-red-600" style="font-size: 0.7rem;">
            DETECTED: 100HP
          </div>
<!-- RTK SENTINEL SUPPRESSED -->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold">
             SUPPRESSED: {{ Math.ceil(100/Math.floor(rifleDamageValue*0.8)) }}
<!-- BONUS RTK SENTINEL SUPPRESSED -->
            <span v-if= "bonusRifleValue && Math.ceil(100/Math.floor(rifleDamageValue*0.8)) > Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))" class="text-blue-500 font-bold italic">
               &nbsp; W/BONUS: {{ Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)) }}
            </span>
          </span>
<!-- TTK SENTINEL SUPPRESSED -->
          <span class="absolute right-[3%] text-red-600 font-bold">   
<!-- GREATER THAN TTK -->
            <span v-if="(selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL') && !selectedRifle.includes('SR-3M TACTICAL')) && (Math.ceil(100/Math.floor(rifleDamageValue*0.8))) > 3"> >
            </span>
            <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)">
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor(rifleDamageValue*0.8)-1)).toFixed(3) }}s
            </span>
<!-- BONUS TTK SUPPRESSED -->
            <span v-if="bonusRifleValue && Math.ceil(100/Math.floor(rifleDamageValue*0.8)) > Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))">
              <span  v-if="(selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL') && !selectedRifle.includes('SR-3M TACTICAL')) && Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) > 3" class="text-blue-500 font-bold italic">
               &nbsp; > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)-1)).toFixed(3) }}s
              </span>
              <span  v-else="Math.ceil(100/Math.floor(rifleDamageValue*0.8)) > Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))" class="text-blue-500 font-bold italic">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)-1)).toFixed(3) }}s
              </span>
            </span>  
          </span>
          <br>
<!-- RTK SENTINEL LOUD -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold">
             LOUD: {{ Math.ceil(100/rifleDamageValue) }}
<!-- BONUS SENTINEL LOUD IF -->
            <span v-if="bonusRifleValue && Math.ceil(100/rifleDamageValue) > Math.ceil(100/(rifleDamageValue + bonusRifleValue))" class="text-blue-500 font-bold italic">
               &nbsp; W/BONUS: {{ Math.ceil(100/(rifleDamageValue + bonusRifleValue)) }}
            </span>
          </span> 
<!-- TTK SENTINEL LOUD -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="absolute right-[3%] text-red-600 font-bold"> 
            <span v-if="(selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL')) && Math.ceil(100/rifleDamageValue) > 3">
               > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor(rifleDamageValue)-1)).toFixed(3) }}s
            </span>            
            <span v-else>
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor(rifleDamageValue)-1)).toFixed(3) }}s
            </span>
<!-- BONUS TTK SENTINEL LOUD -->
            <span v-if="bonusRifleValue && Math.ceil(100/Math.floor(rifleDamageValue)) > Math.ceil(100/Math.floor(rifleDamageValue + bonusRifleValue))">
              <span v-if="(selectedRifle.includes('G36C SCOUT')) && Math.ceil(100/Math.floor(rifleDamageValue + bonusRifleValue)) > 2" class="text-blue-500 font-bold italic">
               &nbsp; > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue))-1)).toFixed(3) }}s
              </span>
              <span v-else-if="(selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL') && !selectedRifle.includes('SR-3M TACTICAL')) && Math.ceil(100/Math.floor(rifleDamageValue + bonusRifleValue)) > 3" class="text-blue-500 font-bold italic">
               &nbsp; > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue))-1)).toFixed(3) }}s
              </span>
              <span v-else class="text-blue-500 font-bold italic">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(100/Math.floor((rifleDamageValue + bonusRifleValue))-1)).toFixed(3) }}s
              </span>
            </span>
          </span>

<!-- WOLF RTK AND TTK -->
          <div class="leading-tight text-center font-light text-black rotate-[1deg] opacity-90" style="font-size: 0.8rem; font-family: arma;">WOLF PERSONNEL: 
            <div class="leading-tight text-red-600 font-bold rotate-[-1deg] opacity-120" style="font-size: 0.7rem; font-family: ZCOOL;">130HP
            </div>
          </div>

<!-- FASTEST TTK @click="selectedScopeName='DIGITAL';selectedRifle='MK14 ASSAULT'" -->
          <div class="text-right font-light translate-x-[0%] translate-y-[15%] leading-tight" style="font-size: 0.7rem; font-family: ZCOOL">FASTEST: 0.000s
          </div> 

<!-- RTK WOLF SUPPRESSED -->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="">
            SUPPRESSED: {{ Math.ceil(130/Math.floor(rifleDamageValue*0.8)) }}
<!-- BONUS RTK WOLF SUPPRESSED IF -->
            <span v-if="bonusRifleValue && !IsLoudGun(loudGuns[gameName.game],selectedRifle) && Math.ceil(130/Math.floor(rifleDamageValue*0.8)) > Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) " class="text-blue-500 font-bold italic">
               &nbsp; W/BONUS: {{ Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) }}
            </span>
          </span>

<!-- TTK WOLF SUPPRESSED-->
          <span v-if="!IsLoudGun(loudGuns[gameName.game],selectedRifle)" class="absolute right-[3%] text-black">
            <span v-if="(!selectedRifle.includes('SCORPIO ') && selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL')) && !selectedRifle.includes('SR-3M TACTICAL')">
               > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue*0.8)-1)).toFixed(3) }}s
            </span>
            <span v-else>
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue*0.8)-1)).toFixed(3) }}s
            </span>
<!-- BONUS TTK WOLF SUPPRESSED -->
            <span v-if="bonusRifleValue && Math.ceil(130/Math.floor(rifleDamageValue*0.8)) > Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 ))">
              <span v-if="(!selectedRifle.includes('SCORPIO ') && selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL')) && !selectedRifle.includes('SR-3M TACTICAL') && Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8 )) > 3" class="text-blue-500 font-bold italic leading-tight">
               &nbsp;> {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)-1)).toFixed(3) }}s
              </span>
              <span v-else class="text-blue-500 font-bold italic leading-tight">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue)*0.8)-1)).toFixed(3) }}s
              </span>
            </span>
          </span>

<!-- SLOWEST TTK @click="selectedScopeName='RU LONG-RANGE'; selectedRifle='SVD-63'" -->
          <div class="text-right font-light translate-x-[0%] translate-y-[-15%] leading-tight" style="font-size: 0.7rem; font-family: ZCOOL">SLOWEST: 1.538s
          </div>

<!-- WOLF LOUD RTK --> 
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="text-red-600 font-bold">
            LOUD: {{ Math.ceil(130/rifleDamageValue) }}
<!-- BONUS WOLF LOUD RTK -->
            <span v-if= "!selectedRifle.includes('SR-3M TACTICAL') && bonusRifleValue && Math.ceil(130/rifleDamageValue) > Math.ceil(130/(rifleDamageValue + bonusRifleValue)) " class=" text-blue-500 font-bold italic">
               &nbsp; W/BONUS: {{ Math.ceil(130/(rifleDamageValue + bonusRifleValue)) }}
            </span>
          </span>
<!-- WOLF LOUD TTK -->
          <span v-if="!IsSuppressedGun(suppressedGuns[gameName.game],selectedRifle)" class="absolute right-[3%] text-red-600 font-bold"> 
            <span v-if="(!selectedRifle.includes('SCORPIO ') && selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL')) && Math.ceil(130/rifleDamageValue) > 3"> 
              > {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue)-1)).toFixed(3) }}s
            </span>
            <span v-else>
              {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor(rifleDamageValue)-1)).toFixed(3) }}s
            </span>
<!-- BONUS WOLF TTK IF -->
            <span v-if="bonusRifleValue && Math.ceil(130/Math.floor(rifleDamageValue)) > Math.ceil(130/Math.floor(rifleDamageValue + bonusRifleValue))">
              <span v-if="(!selectedRifle.includes('SCORPIO ') && selectedRifle.includes('SCOUT') || selectedRifle.includes('TACTICAL')) && Math.ceil(130/Math.floor(rifleDamageValue + bonusRifleValue)) > 3" class="text-blue-500 font-bold italic">
               &nbsp;> {{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue))-1)).toFixed(3) }}s
              </span>
              <span v-else class="text-blue-500 font-bold italic">
               &nbsp;{{ ((60/RPM[gameName.game][GetRPMRifleName(RPMRifles, selectedRifle)])*Math.ceil(130/Math.floor((rifleDamageValue + bonusRifleValue))-1)).toFixed(3) }}s
              </span>
            </span>
          </span>
          
<!-- NEXT RIFLE BUTTONS -->
          <div class="translate-y-[0%] leading-tight ">
          <button @click="selectedRifle = getSuppRTK()" class="border border-dotted border-black hover:bg-black hover:border-white hover:text-white px-1 rounded-lg shadow-black shadow-md lowercase"  style="font-size: ;font-family:capt ;">
            ⇐ Fewer Rounds<br>To Kill  Rifles
          </button>
          <button @click="selectedRifle = getSuppTTK()" class="absolute right-0 border border-dotted border-black hover:bg-black hover:border-white hover:text-white px-1 rounded-lg shadow-black shadow-md lowercase" style="font-size: ;font-family:capt ;">
            Faster Time To<br> Kill Rifles ⇛</button>
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
          <div class="leading-tight font-thin" style="font-size: 0.6rem; font-family: capt;">- SOME RIFLES RECEIVE 'HIDDEN' BONUS DAMAGE AFTER A KILL. YOU CAN OBSERVE THIS DAMAGE BONUS IN THE LOADOUT MENU IF YOU PAUSE TO LOADOUT MENU AFTER A KILL. YOU'LL SEE THAT THE DAMAGE NUMBER FOR YOUR RIFLE IS 5 OR 10 POINTS HIGHER THAN NORMAL. FOR EXAMPLE, THE MDR NORMALLY HAS 37 DAMAGE BUT AFTER A KILL IT HAS 42 DAMAGE TEMPORARILY. BONUS DAMAGE SEEMS TO LAST FOR 10 seconds AFTER A KILL OR UNTIL YOU PAUSE TO MENU(YOU'LL SEE IT IN MENU, BUT IT RESETS TO NORMAL WHEN YOU UNPAUSE). EQUIPPING/REMOVING YOUR SUPPRESSOR OR SWITCHING WEAPONS ALSO RESETS THE DAMAGE.
          </div>
          <br>
          <div class="leading-tight translate-x-[10%] font-bold" style="font-size: 0.7rem; font-family: courier;" v-for="rifleBonus in sortedBonus" >
            {{rifleBonus.rifleName}}:<span class="text-bold italic text-blue-500" style="font-size: 0.7rem; font-family: ZCOOL;">+{{ rifleBonus.rifleValue }}</span>
          </div>
          <!-- <img src="/assets/HeavyHawk_AI_Logo.jpg"> -->
          <div @click="showBonuslist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>

<!-- RTK LIST -->
        <div v-show="showRTKlist" class="absolute top-[10px] sm:top-[20px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0deg] opacity-95" >
          
          <div class="leading-tight font-bold" style="font-size: 0.7rem; font-family: courier;">

            - Be mindful of burst fire. Some rifles actually fire 2 rounds instead of 3 when set to burst fire mode. This could mean more trigger pulls than you assume.
          </div>
          <br>
          <div class="text-black text-center rotate-[-2deg] opacity-80" style="font-size: 1rem; font-family: tops;">ROUNDS TO KILL WOLVES SUPPRESSED
          </div>
          <div class="absolute right-[0%] text-xs rotate-[2deg] opacity-75" style="font-family: arma;">
            TIME TO KILL
          </div>
          <div class="leading-tight text-right translate-x-[0%] translate-y-[100%]" style="font-size: 0.7rem; font-family: ZCOOL;" v-for="(value,property) in sortedSuppRTK">
            <div v-if="selectedRifle === property && (property.includes('G36C SCOUT')) && sortedSuppRTK[property] > 2" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light"> > {{ sortedSuppTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property && (property.includes('SCOUT') || property.includes('TACTICAL')) && !property.includes('SR-3M TACTICAL') && sortedSuppRTK[property] > 3" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light"> > {{ sortedSuppTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light"> ≈ {{ sortedSuppTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="(property.toString().includes('SCOUT') || property.toString().includes('TACTICAL')) && !property.toString().includes('SR-3M TACTICAL') && sortedSuppRTK[property] > 3" class="italic px-1 rounded bg-red-700 bg-opacity-20">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light"> > {{ sortedSuppTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else>
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="italic font-light"> ≈ {{ sortedSuppTTK[property].toFixed(3) }}
            </span>
            </div>
          </div>
          <br>
          <div class="text-red-700 text-center rotate-[-2deg] opacity-80" style="font-size: 1rem; font-family: tops;">ROUNDS TO KILL WOLVES LOUD
          </div>
          <div class="absolute right-[0%] text-xs rotate-[2deg] text-red-700 opacity-75" style="font-family: arma;">
            TIME TO KILL
          </div>
          <div class="leading-tight text-right translate-x-[0%] translate-y-[100%]" style="font-size: 0.7rem; font-family: ZCOOL;" v-for="(value,property) in sortedLoudRTK" >
            <div v-if="selectedRifle === property && (property.includes('G36C SCOUT')) && sortedLoudRTK[property] > 2" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-white italic font-light" style="font-family: ZCOOL;"> > {{ sortedLoudTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property && (property.includes('SCOUT') || property.includes('TACTICAL')) && !property.includes('SR-3M TACTICAL') && sortedLoudRTK[property] > 3" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-white italic font-light" style="font-family: ZCOOL;"> > {{ sortedLoudTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property" class="bg-black text-white px-1 rounded">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-white italic font-light" style="font-family: ZCOOL;"> ≈ {{ sortedLoudTTK[property].toFixed(3) }}
            </span>
            </div>
            <div v-else-if="property && (property.toString().includes('SCOUT') || property.toString().includes('TACTICAL')) && !property.toString().includes('SR-3M TACTICAL') && sortedLoudRTK[property] > 3" class="italic px-1 rounded bg-red-700 bg-opacity-20">
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-red-700 italic font-light" style="font-family: ZCOOL;"> > {{ sortedLoudTTK[property].toFixed(3) }}
            </span> 
            </div>
            <div v-else>
            {{property}}: {{ value }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-red-700 italic font-light" style="font-family: ZCOOL;"> ≈ {{ sortedLoudTTK[property].toFixed(3) }}
            </span> 
            </div>
          </div>
          <br>
          <div class="flex justify-center">
            <img class="object-fill h-48 w-96" src="/assets/9-bullets.gif">
          </div>
          <div @click="showRTKlist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>

<!-- TTK LIST -->
        <div v-show="showTTKlist" class="absolute top-[10px] sm:top-[20px] bg-[#eae4aa] z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg shadow-black shadow-md font-bold rotate-[0deg] opacity-95" >
          
          <div class="leading-tight font-bold" style="font-size: 0.7rem; font-family: courier;">
            
            - Time to kill values are somewhat helpful for comparison between rifles here but are only approximate (≈) as they don't account for possible differences in bullet travel time. 
          </div>
          <br>
          <div class="leading-tight font-bold italic bg-red-700 bg-opacity-20 rounded" style="font-size: 0.7rem; font-family: courier;">
            - Burst fire rifles that lack full auto may have Time To Kill values that are actually longer due to added time between trigger pulls. Watch for more than 3 rounds to kill on "Scout" or "Tactical" rifles and remember that burst mode on a few rifles is actually 2 rounds not 3.

          </div>
          <div class="text-black text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: tops;">
            TIME TO KILL WOLVES SUPPRESSED
          </div>
          <div class="absolute right-[0%] text-xs rotate-[5deg] opacity-75" style="font-family: arma;">
            ROUNDS TO KILL
          </div>

          <div v-for="(value,property) in sortedSuppTTK" class="leading-tight text-right translate-x-[0%] translate-y-[100%]" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div v-if="selectedRifle === property && (property.includes('G36C SCOUT')) && sortedSuppRTK[property] > 2" class="bg-black text-white px-1 rounded">
              {{property}} > {{value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property && (property.includes('SCOUT') || property.includes('TACTICAL')) && !property.includes('SR-3M TACTICAL') && sortedSuppRTK[property] > 3" class="bg-black text-white px-1 rounded">
              {{property}} > {{value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property" class="bg-black text-white px-1 rounded">
              {{property}} ≈ {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
            <div v-else-if="(property.toString().includes('G36C SCOUT')) && sortedSuppRTK[property] > 2" class="italic px-1 bg-red-700 bg-opacity-20">
              {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
            <div v-else-if="(property.toString().includes('SCOUT') || property.toString().includes('TACTICAL')) && !property.toString().includes('SR-3M TACTICAL') && sortedSuppRTK[property] > 3" class="italic px-1 rounded bg-red-700 bg-opacity-20">
              {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
            <div v-else>
            {{property}} ≈ {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light" style="font-family: ZCOOL;">{{ sortedSuppRTK[property] }}
            </span>
            </div>
          </div>
          <br>
          <div class="text-red-700 text-center rotate-[-1deg] opacity-80" style="font-size: 1rem; font-family: tops;">
            TIME TO KILL WOLVES LOUD
          </div>
          <div class="absolute right-[0%] text-xs text-red-700 rotate-[5deg] opacity-75" style="font-family: arma;">
            ROUNDS TO KILL
          </div>
          <div v-for="(value,property) in sortedLoudTTK" class="leading-tight text-right translate-x-[0%] translate-y-[100%]" style="font-size: 0.7rem; font-family: ZCOOL;">
            <div v-if="selectedRifle === property && (property.includes('G36C SCOUT')) && sortedLoudRTK[property] > 2" class="bg-black text-white px-1 rounded">
            {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-bold text-white" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property && (property.includes('SCOUT') || property.includes('TACTICAL')) && sortedLoudRTK[property] > 3" class="bg-black text-white px-1 rounded">
            {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-bold text-white" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
            <div v-else-if="selectedRifle === property" class="bg-black text-white px-1 rounded">
            {{property}} ≈ {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-bold text-white" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
            <div v-else-if="property.toString().includes('G36C SCOUT') && sortedLoudRTK[property] > 2" class="italic px-1 bg-red-700 bg-opacity-20">
              {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="italic font-bold text-red-700" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
            <div v-else-if="(property.toString().includes('SCOUT') || property.toString().includes('TACTICAL')) && sortedLoudRTK[property] > 3" class="italic px-1 rounded bg-red-700 bg-opacity-20">
              {{property}} > {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="italic font-bold text-red-700" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
            <div v-else>
            {{property}} ≈ {{ value.toFixed(3) }}s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="italic font-light text-red-700" style="font-family: ZCOOL;">{{ sortedLoudRTK[property] }}
            </span>
            </div>
          </div>

          <br>
          <div class="flex justify-center">
          <img class="object-fill h-48 w-96" src="/assets/yes-they-deserved-to-die.gif">
          </div>
          <div @click="showTTKlist = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer font-light" style="font-family: courier;">x</div>
        </div>


<!-- RTK BUTTON
<div v-if="gameName.game === 'Breakpoint'" @click="showRTK = !showRTK; showIntel = false; showShotguns = false; showHandguns = false" class="active:text-red-800 px-2 border text-red-800 border-red-800 hover:text-red-600 rounded-lg shadow-black shadow-md font-sans absolute top-[67%] left-[62%] rotate-[-35deg] translate-x-[25%] z-40 cursor-pointer" style="font-family: arma;">
          Damage <br>File
        </div>
        <div v-if="damage[gameName.game].hasOwnProperty(GetRifleName(rifles, selectedRifle)) && showRTK" @click="showRTK = false" class="absolute top-[100px] sm:top-[200px] bg-[#eae4aa] text-xl font-serif z-[51] w-[90%] sm:w-3/4 max-w-xl left-2/4 -translate-x-2/4 p-4 pt-8 rounded-lg" style="font-size: 1rem; font-family: courier;">

          <span class="font-bold text-black" style="font-size: 1rem; text-transform: uppercase; font-family: ;"><u>ROUNDS TO KILL SENTINEL</u></span><br>
          <span>STEALTH SUPPRESSED: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][0] }}</span><br>
          <span>STEALTH LOUD: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][1] }}</span><br>
          <span class="text-red-600"><b>DETECTED SUPPRESSED: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][2] }}</b></span><br>
          <span class="text-red-600"><b>DETECTED LOUD: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][3] }}</b></span><br>
          <span class="font-bold text-black" style="font-size: 1rem; text-transform: uppercase; font-family: ;"><u>ROUNDS TO KILL WOLVES</u></span><br>
          <span>SUPPRESSED: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][4] }}</span>&nbsp;
          <span class="text-red-600"><b>LOUD: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][5] }}</b></span><br>

          <span v-if="damage[gameName.game][GetRifleName(rifles, selectedRifle)][6]" class=" text-blue-500 font-bold" style="font-size: 1rem; text-transform: uppercase; font-family: courier;">+{{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][6] }} BONUS DAMAGE ON 2ND KILL within 10 s</span><br>

          <span v-if="damage[gameName.game][GetRifleName(rifles, selectedRifle)][7]" class="text-black" style="font-size: 0.9rem; text-transform: uppercase; font-family: courier;">SPECIAL NOTE: {{ damage[gameName.game][GetRifleName(rifles, selectedRifle)][7] }}</span><br>
          <div @click="showRTK = false" class="absolute top-[-5px] right-2 text-5xl cursor-pointer" style="font-family: courier;">x</div>
        </div>
 End RTK BUTTON -->



      <!-- RANGE LABELS -->
          <div class="text-center absolute top-[55%] left-2/4 -translate-x-2/4 text-2xl">
            <glitched-writer v-if="gameName.game === 'Breakpoint' && ranges && ranges.length==0" :text="'Sorry, not yet ranged. But try changing rails or Ballistic Advantage for a potential ranged version. Click FEEDBACK above to request a rifle addition in our Youtube comments.'" appear preset="nier" :style="getRangeStyle()" />
            <glitched-writer v-if="gameName.game === 'Wildlands' && ranges && ranges.length==0" :text="'Sorry, not yet ranged. But try changing barrels/rail or zoom for a potential ranged version. Click FEEDBACK above to request a rifle addition in our Youtube comments.'" appear preset="nier" :style="getRangeStyle()" />
          </div>
          <div v-for="(range, index) in ranges" class="absolute w-full h-full top-0 left-0" :style="getRangeStyle()">
            <div :style="getStylePosition(index)">
              <glitched-writer :text="range + 'm'" appear preset="nier" />
            </div>
          </div>
<!-- RAIL ATTACHMENTS BREAKPOINT --> 
          <div v-if="gameName.game === 'Breakpoint'" id="dropdown" class="absolute top-[25%] right-[56%] text-center leading-tight" :style='getScopeLabelStyle()'>
              RAIL:<br>
            <div class="leading-tight" style="font-size: 1rem;" @click="BA=false">
              <select class="text-center border-4 border-black border-opacity-30 bg-transparent rounded-xl p-0 hover:bg-black hover:bg-opacity-[10%] cursor-pointer" v-model=rail>
                <option style="background-color: black;" value="nil0">NONE/OTHER</option>
                <!-- <option value="nil1">PEQ-15</option>
                <option value="nil2">ATPIALx3</option> -->
                <option style="background-color: black;" v-if="fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' MAWL-DA') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' MAWL-DA BALLISTIC ADVANTAGE')" value=" MAWL-DA">MAWL-DA</option>
                <option v-else disabled class="italic" value=" MAWL-DA" >MAWL-DA</option>
                <option style="background-color: black;" v-if="fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' RANGE FINDER') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' RANGE FINDER BALLISTIC ADVANTAGE')" value=" RANGE FINDER">RANGE FINDER</option>
                <option v-else disabled class="italic" value=" RANGE FINDER">RANGE FINDER</option>
              </select>
            </div>
          </div> 
            <!-- BALLISTIC ADVANTAGE BREAKPOINT -->
            <!-- V-SHOW??? -->
          <div  v-if="gameName.game === 'Breakpoint' && rail=='nil0' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle+' BALLISTIC ADVANTAGE') || rail==' MAWL-DA' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle+' MAWL-DA'+' BALLISTIC ADVANTAGE') || rail==' RANGE FINDER' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle+' RANGE FINDER'+' BALLISTIC ADVANTAGE')" class="absolute top-[25%] left-[58%] text-center" :style='getScopeLabelStyle()' style="font-size: ;">
              <glitched-writer :text="'BALLISTIC'" appear preset="nier" />
              <br>
              <glitched-writer :text="'ADVANTAGE:'" appear preset="nier" />

            <label class="absolute top-[50%] left-[102%]">
                <input type="checkbox" class="shadow-black shadow-md h-5 w-5 accent-current cursor-pointer" v-model=BA>
                <!-- <input v-else disabled style="display: none;" type="checkbox" class="shadow-black shadow-md h-9 w-9 accent-current" v-model=BA> -->
                <!-- set unchecked??? -->
            </label>
          </div>
<!-- BARRELS WILDLANDS --> 
          <div v-if="gameName.game === 'Wildlands'" id="dropdown" class="absolute top-[25%] right-[55%] text-center leading-tight" :style='getScopeLabelStyle()'>
              BARREL:<br>
            <div class="leading-tight" style="font-size: 1rem;" @click="wlRF = 'nil0'; zoom = false">
              <select class="text-center border-4 border-black border-opacity-30 bg-transparent rounded-xl p-0 hover:bg-black hover:bg-opacity-[10%] cursor-pointer" v-model=barrel>
                <option style="background-color: rgb(0, 0, 0);" value="nil0">STANDARD BARREL</option>

                <option style="background-color: rgb(0, 0, 0);" v-if="fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL RANGE FINDER') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL ZOOMED') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL RANGE FINDER ZOOMED')" value=" SHORT BARREL">SHORT BARREL</option>

                <option v-else disabled class="italic" value=" SHORT BARREL" >SHORT BARREL</option>

                <option style="background-color: rgb(0, 0, 0);" v-if="fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL RANGE FINDER') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL ZOOMED') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL RANGE FINDER ZOOMED')" value=" LONG BARREL">LONG BARREL</option>
                
                <option v-else disabled class="italic" value=" LONG BARREL" >LONG BARREL</option>
              </select>
            </div>
          </div>
<!-- WILDLANDS RANGE FINDER wlRF -->
          <div v-if="gameName.game === 'Wildlands'" id="dropdown" class="absolute top-[25%] left-[55%] text-center leading-tight" :style='getScopeLabelStyle()'>RAIL:<br>
            <select class="text-center border-4 border-black border-opacity-30 bg-transparent rounded-xl p-0 hover:bg-black hover:bg-opacity-[10%] cursor-pointer" v-model=wlRF>
              <option style="background-color: rgb(0, 0, 0);" value="nil0">NONE/OTHER</option>

              <option style="background-color: rgb(0, 0, 0);" v-if="fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' RANGE FINDER') || barrel ==' SHORT BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL RANGE FINDER') || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' SHORT BARREL RANGE FINDER ZOOMED') || barrel ==' LONG BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL RANGE FINDER')  || fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle + ' LONG BARREL RANGE FINDER ZOOMED')" value=" RANGE FINDER">RANGE FINDER</option>

              <option v-else disabled class="italic" value=" RANGE FINDER">RANGE FINDER</option>
              </select>
          </div>
            <!-- ZOOMED WILDLANDS -->
          <div v-if="gameName.game === 'Wildlands' && selectedScopeName === 'TARS101' || selectedScopeName === 'POSP'" class="absolute top-[40%] left-[60%] text-center" :style='getScopeLabelStyle()' style="font-size: ;">
              <glitched-writer :text="'ZOOM IN:'" appear preset="nier" />

            <label class="absolute top-[0%] left-[102%]">

              <!-- <input type="checkbox" class="shadow-black shadow-md h-5 w-5 accent-current" v-model=zoom> -->

              <input v-if="barrel=='nil0' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle +' ZOOMED') || barrel=='nil0' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle +' RANGE FINDER ZOOMED') || barrel==' SHORT BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle +' SHORT BARREL ZOOMED') || barrel==' SHORT BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle +' SHORT BARREL RANGE FINDER ZOOMED') || barrel==' LONG BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle+' LONG BARREL ZOOMED') || barrel==' LONG BARREL' && fullData[gameName.game][selectedScopeName].hasOwnProperty(selectedRifle +' LONG BARREL RANGE FINDER ZOOMED')" type="checkbox" class="shadow-black shadow-md h-5 w-5 accent-current cursor-pointer" v-model=zoom>

              <input v-else disabled type="checkbox" class="shadow-black shadow-md h-9 w-9 accent-current" v-model=zoom>
                <!-- set unchecked??? -->
            </label>
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
