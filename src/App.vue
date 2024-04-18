<template>
    <h1>{{ courseName }}</h1>
    <h3> Course by {{ mentor }}</h3>
    <p>Give Initial Value</p>
    <input type="number" v-model="count">
    <br><br>
    <h2>{{ count }} / {{ checkOddEven }} </h2>
    <button @click="decrement">-</button> 
    <button @click="increment">+</button>

    
</template>

<!-- <script>
export default{
    data(){
        return{
            courseName:"Vue js 3",
            mentor:'Rahim Uddin',
            count:0,
        }
    }
}
</script> -->
<!-- <script>
export default{
    setup(){
        let count=0;
        const courseName="Vue js 3";
        const mentor="Mentor";
    return {count, courseName, mentor};
    }
}
</script> -->
<script setup>

import { ref,computed,watch } from 'vue';

let count = ref(0);
const courseName = ref("Vue js 3");
const mentor = ref("Mentor");

const increment=() =>count.value++; 
const decrement=() =>count.value--; 

const checkOddEven=computed(()=>{
    return count.value % 2 ===0 ? 'even' : 'even';
})

watch(()=>count.value,(newValue, oldValue)=>{
    if (newValue ===10 ) {
     alert('new value is 10');
    }
})
// function increment () { 
//     count.value++;
//  }
// function decrement () { 
//     count.value--;
//  }
</script>