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
        class="flex items-center justify-end p-2 text-black bg-slate-200 bg-opacity-75 rounded-md hover:cursor-pointer"
        >
        <span class="mr-2">{{scopeName}}</span>
        <svg
        class="w-5 h-5 text-slate-900"
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
    <div class="grid grid-cols-1 md:w-[15rem] w-[15rem] bg-black">
        <div
        v-show="show"
        v-for="(scope) in scopes" :key="scope"
        class="right-0 py-0 mt-0 rounded-sm shadow-xl shadow-black"
        >
        <div @click="changeScope(scope)" class="px-4 md:py-0 py-2 md:my-0 my-1 bg-slate-100 md:text-[.85rem] text-base text-slate-900  hover:bg-green-800 hover:text-indigo-100">{{scope}}</div>

        </div>
    </div>
</template>
