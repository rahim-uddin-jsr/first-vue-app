
<template>
    <div class="border w-25 mx-auto text-center p-4 mt-2 rounded card">
        <h2 class="mb-3">Counter</h2>
        <!-- <p>Give Initial Value</p> -->
        <!-- <input type="number" v-model="count"> -->
        <div class="d-flex justify-content-evenly w-75 mx-auto  ">

            <button class="btn btn-dark" @click="$emit('decrementBy',1)">-</button>
            <h2>{{ count1 }} </h2>
            <button class="btn btn-dark" @click="$emit('increaseBy',1)">+</button>
        </div>
        <DeepChildComponent/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DeepChildComponent from './DeepChildComponent.vue';
const props=defineProps(['count1']);
const increment1 = () => count1.value++;
const decrement1 = () => count1.value--; 
</script>