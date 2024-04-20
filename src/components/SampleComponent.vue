    <script setup>
import { ref } from 'vue';
const props = defineProps(['title', 'subtitle'])
let awesome=ref('');
    </script>
<template >
    <div class="border rounded w-75 mx-auto px-4 py-2 mt-2 text-center">
        <h2 class="text-center">{{ title }}</h2>
        <h5 class="text-center">{{ subtitle }}</h5>
        <button class="btn btn-info" @click="awesome = !awesome">Toggle</button>
        
        <h1 v-if="awesome">Vue is awesome</h1>
        <h1 v-else>Oh no 😢</h1>
    </div>
    </template>
