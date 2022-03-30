<script setup lang="ts">
    import { ref, computed } from 'vue'


    const props = defineProps<{ rifles: string[], rifleTitle: string}>()

    const emit = defineEmits(['selected'])


    let id = 0
    let show2 = ref(false);
    const isOpen2 = () => (show2.value = !show2.value);

    const rifleTitle1 = computed(() => {
      return ref(props.rifleTitle);
    })

    const rifleName = ref('Pick a rifle')

    const changeRifle = (rifle: string) => {
        rifleName.value = rifle;
        emit('selected', rifleName.value)
        show2.value = !show2.value;
    }




</script>

<template>
    <!-- Dropdown toggle button -->
                    <button
                        @click="isOpen2"
                        class="flex justify-end mr-0 p-2 text-cyan-300 bg-slate-900 hover:text-cyan-200 hover:bg-opacity-[90%] bg-opacity-80 rounded-md border-slate-800 border"
                    >
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

                    <!-- Dropdown menu -->
                    <div class="grid md:grid-cols-2 grid-cols-1 md:w-[30rem] w-[15rem] bg-black bg-opacity-0 -translate-x-[4rem] z-49">
                        <div
                        v-show="show2"
                        v-for="(rifle) in rifles" :key="rifle"
                        class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black "
                        >
                        <div @click="changeRifle(rifle)" class="px-4 md:py-0 py-2 md:my-0 my-1 bg-slate-900 bg-opacity-80 md:text-[.85rem] text-base text-cyan-300 hover:bg-cyan-700 hover:text-indigo-100">{{rifle}}</div>

                        </div>
                    </div>

</template>
