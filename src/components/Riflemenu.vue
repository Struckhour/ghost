<script setup lang="ts">
    import { ref, computed } from 'vue'
    import sezzing from '../assets/sezzing';
    import { useRouter } from 'vue-router';


    const searchQuery = ref('');


    const props = defineProps<{ rifles: string[], rifleTitle: string, showMenu: boolean, scopeMenu: boolean, selectedScope:string, gameName:string}>()

    const emit = defineEmits(['selected', 'rifleMenuClicked', 'scopeMenu'])

    let showMenu = ref(props.showMenu);

    let scopeMenu = ref(props.scopeMenu);

    const addSpaceList = ['416', '516', '553'];

    const router = useRouter();

    const isOpen2 = () => {
      showMenu.value = !showMenu.value;
      emit('rifleMenuClicked', showMenu.value)
      scopeMenu.value = false;
      emit('scopeMenu', scopeMenu.value);
    // Toggle showSearchBar when clicking on the dropdown toggle button
      // showSearchBar.value = showMenu.value;
    }

    const rifleTitle1 = computed(() => {
      return ref(props.rifleTitle);
    })

    const rifleName = ref('Pick a rifle')

    const changeRifle = (rifle: string) => {
        rifleName.value = rifle;
        emit('selected', rifleName.value)
        showMenu.value = !showMenu.value;
        emit('rifleMenuClicked', showMenu.value);
        window.scrollTo({ top: 0, behavior: "smooth" });
        router.push(`/${props.gameName}/${rifle}`)
    }

    const computedRifles = computed(() => {
    const query = searchQuery.value.toLowerCase();
      return props.rifles.filter((rifle) =>
        rifle.toLowerCase().includes(query));
    });

    const clearSearch = () => {
    searchQuery.value = '';
  }

</script>

<template>
    <!-- Dropdown toggle button -->
  <button id="dropdown-rifles"
      @click="isOpen2"
      class="flex justify-end mr-0 px-1 text-cyan-300 bg-slate-900 hover:text-cyan-200 hover:bg-opacity-[90%] bg-opacity-80 rounded-md border-slate-600 border" style="">

      <span class="mr-4">{{rifleTitle1.value}}</span>
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
  </button>

    <!-- Search bar -->
    <input
    v-show="props.showMenu"
    v-model="searchQuery"
    type="text"
    class="w-full px-2 py-1 mt-1 text-cyan-300 uppercase bg-black border border-gray-300 rounded-md focus:outline-none focus:border-cyan-300"
    placeholder="Search..."
  />

  <!-- Dropdown menu -->
  <div id="riflemenu" class="grid grid-rows-30 grid-cols-1 md:grid-cols-2 md:w-[25rem] w-[14rem] bg-slate-900 bg-opacity-10 -translate-x-[0rem] z-40 absolute text-center">

      <div
      v-show="props.showMenu"

      v-for="(rifle) in computedRifles"

      :key="rifle"
      class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black bg-slate-900 bg-opacity-80"
      >
        <div v-if="sezzing[gameName][selectedScope].hasOwnProperty(rifle)" @click="changeRifle(rifle)" class="cursor-pointer px-4 md:py-0 py-2 md:my-0 my-1  z-40 md:text-[.85rem] text-base text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black">
          {{rifle}}
        </div>
        <!-- ADD BELOW TO CLEAR SEARCH BAR ON RIFLE CLICK clearSearch(); -->
        <div @click="changeRifle(rifle);" class="cursor-pointer px-4 md:py-0 py-2 md:my-0 my-1  z-40 md:text-[.85rem] text-base text-cyan-300 hover:bg-cyan-700 hover:text-indigo-100">
          {{rifle}}
        </div>
      </div>
  </div>

</template>
