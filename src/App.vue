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

import { ref,computed,watch, provide } from 'vue';
import SampleComponent from './components/SampleComponent.vue';
import ListRendering from './components/ListRendering.vue';
import Counter from './components/Counter.vue';
let count = ref(0);
const courseName = ref("Vue js 3");
const mentor = ref("Mentor");
let count1 = ref(0);

const increment=() =>count.value++; 
const decrement=() =>count.value--; 

const checkOddEven=computed(()=>{
    return count.value % 2 ===0 ? 'even' : 'odd';
})

provide('massage','Always be Honest!')

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
<template>
<ListRendering>
    <h6>A Test Slot</h6>
</ListRendering>
<SampleComponent title="Sample Component" subtitle="A sample subtitle"/>
<Counter :count1="count1" @increase-by="(n)=>count1+=n" @decrement-by="(n)=>count1-=n"/>
<!-- <SampleComponent title="Sample Component 2"/> -->

    <h1 :class="{'text-primary':checkOddEven=='even', 'text-info':checkOddEven=='odd'}">{{ courseName }}</h1>
    <h3> Course by {{ mentor }}</h3>
    <p>Give Initial Value</p>
    <input aria-label="count value" type="number" v-model="count">
    <br><br>
    <h2>{{ count }} / {{ checkOddEven }} </h2>
    <button @click="decrement">-</button> 
    <button @click="increment">+</button>

    
</template>

