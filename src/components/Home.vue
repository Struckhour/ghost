<template>
    <body class="bg-slate-900 w-screen h-screen">
        <h1 class="text-white text-center text-4xl w-2/5 m-auto border-b border-green-200">The Ultimate Ghost Recon Bullet Drop Compendium</h1>
        <h2 class="text-green-200 mt-6 text-center text-xl">Choose a game</h2>
        <div class="h-96 sm:w-[48rem] w-full m-auto mt-4 grid sm:grid-cols-2 grid-cols-1 gap-2">
            <router-link to="/breakpoint">
                <img src="../assets/breakpoint.jpg"  class="h-72 w-72 m-auto object-cover opacity-90 hover:opacity-100 hover:border-8 hover:border-black rounded-full">
            </router-link>
            <router-link to="/wildlands">
                <img src="../assets/wildlands.jpg" class="w-72 h-72 object-cover opacity-90 hover:opacity-100 m-auto hover:border-8 hover:border-black rounded-full">
            </router-link>
        </div>
    </body>
    
</template>