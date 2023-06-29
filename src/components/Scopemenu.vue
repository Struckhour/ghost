<script setup lang="ts">
    import { ref, computed } from 'vue'
    import fullData from '../assets/data';
 

    const props = defineProps<{ scopes: string[]; show: boolean; rifleMenu: boolean; selectedScopeName: string; selectedRifle: string; gameName: string  }>()

    const emit = defineEmits(['chosenScope', 'menuClicked', 'rifleMenu'])

    let shower = ref(props.show);
    let rifleMenu = ref(props.rifleMenu);

    const isOpen = () => {
      shower.value = !shower.value;
      emit('menuClicked', shower.value);
      rifleMenu.value = false;
      emit('rifleMenu', rifleMenu.value);
    };

    const scopeName= ref(props.selectedScopeName);
    // let scopeName = computed(() => {
    //   return ref(props.selectedScopeName);
    // })
    const changeScope = (scope: string) => {
        scopeName.value = scope;
        shower.value = !shower.value;
        emit('menuClicked', shower.value)
        emit('chosenScope', scopeName.value);

    }
    const greyScopes = computed(() => {
        let tempArray = []
        for (let scope of props.scopes){
          if (fullData[props.gameName][scope].hasOwnProperty(props.selectedRifle)){
            tempArray.push(true)
          } else{
            tempArray.push(false)
          }
        }
        return tempArray
    })
</script>

<template>
    <div
        @click="isOpen"
        class="flex justify-start px-1 text-cyan-300 hover:text-cyan-200 hover:bg-opacity-[90%] bg-slate-900 bg-opacity-75 rounded-md hover:cursor-pointer z-50 border-slate-600 border"
        >
        <span class="mr-2">{{selectedScopeName}}</span>
        <svg
        class="w-5 h-5 text-cyan-300"
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
    </div>

    <!-- Dropdown menu -->
    <div class="grid grid-cols-1 md:w-[12rem] w-[12rem] bg-black bg-opacity-0 z-50 absolute right-2/5 -translate-x-[2rem]">
        <div
        v-show="props.show"
        v-for="(scope,index) in scopes" :key="scope"
        class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black"
        >
        <div v-if="greyScopes[index]" @click="changeScope(scope)" class="cursor-pointer px-4 md:py-0 py-2 my-0 bg-slate-900 opacity-80 md:text-[.85rem] text-base text-cyan-300 z-50 hover:bg-cyan-700 hover:text-indigo-100">{{scope}}
        </div>
        <div v-else class="cursor-pointer px-4 md:py-0 py-2 my-0 bg-slate-700 opacity-80 md:text-[.85rem] text-base text-gray-500 z-50 font-light italic">{{scope}}
        </div>
        </div>
    </div>
</template>
