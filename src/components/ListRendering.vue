
<template lang="">
    <div class="text-center border px-5 py-2 mt-2 w-75 mx-auto">
        <h2>List Rendering</h2>
        <!-- <li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li> -->
<slot></slot>
<ol>
    <li class='text-start' v-for="(item,i) in items">
        {{ item.message }}
    </li>
</ol>
</div>
</template>

<script setup>
import { ref } from 'vue';

const parentMessage = ref('Parent');
const items = ref(
    [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'ren' },
        { message: 'tom' },
        { message: 'ami' },
        { message: 'tmi' },
         ])
</script>