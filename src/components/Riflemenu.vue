<script setup lang="ts">
    import { ref } from 'vue'
    

    defineProps<{ rifles: string[]}>()

    const emit = defineEmits(['selected'])
    

    let id = 0
    let show2 = ref(false);
    const isOpen2 = () => (show2.value = !show2.value);

    const rifleName= ref('Rifles');

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
                        class="flex items-center p-2 text-black bg-slate-100 rounded-md"
                    >
                        <span class="mr-4">{{rifleName}}</span>
                        <svg
                        class="w-5 h-5 text-slate-900 dark:text-white"
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
                    <div class="grid md:grid-cols-2 grid-cols-1 md:w-[30rem] w-[15rem] bg-black -translate-x-[4rem]">
                        <div
                        v-show="show2"
                        v-for="(rifle) in rifles" :key="rifle"
                        class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black "
                        >
                        <div @click="changeRifle(rifle)" class="px-4 md:py-0 py-4 md:my-0 my-2 bg-slate-100 md:text-[.85rem] text-base text-slate-900 hover:bg-green-800 hover:text-indigo-100">{{rifle}}</div>

                        </div>
                    </div>
                    
</template>