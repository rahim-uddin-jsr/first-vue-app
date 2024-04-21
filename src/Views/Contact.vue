<script setup>
import { useCounterStore } from "../store/counter.js";
const useCounter =useCounterStore();

</script>
<template>
    <h2>Contact</h2>
    <p>counter value is {{ useCounter.count5 }} / {{ useCounter.doubleCount }}</p>
    <button @click="useCounter.increment">Increment By</button>
</template>