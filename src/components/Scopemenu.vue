<script setup lang="ts">
    import { ref } from 'vue'


    defineProps<{ scopes: string[] }>()

    const emit = defineEmits(['chosenScope'])


    let id = 0
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);

    const scopeName= ref('Choose a scope');

    const changeScope = (scope: string) => {
        scopeName.value = scope;
        show.value = !show.value;
        emit('chosenScope', scopeName.value);

    }

</script>

<template>
    <div
        @click="isOpen"
        class="flex justify-end p-1 text-cyan-300 hover:text-cyan-200 hover:bg-opacity-[90%] bg-slate-900 bg-opacity-75 rounded-md hover:cursor-pointer z-50"
        >
        <span class="mr-2">{{scopeName}}</span>
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
    <div class="grid grid-cols-1 md:w-[15rem] w-[15rem] bg-black bg-opacity-0 z-50 absolute right-2/5">
        <div
        v-show="show"
        v-for="(scope) in scopes" :key="scope"
        class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black"
        >
        <div @click="changeScope(scope)" class="px-4 md:py-0 py-2 my-0 bg-slate-900 opacity-80 md:text-[.85rem] text-base text-cyan-300 z-50 hover:bg-cyan-700 hover:text-indigo-100">{{scope}}</div>

        </div>
    </div>
</template>
