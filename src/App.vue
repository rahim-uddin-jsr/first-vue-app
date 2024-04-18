<template>
    <h1>{{ courseName }}</h1>
    <h3> Course by {{ mentor }}</h3>
    <h2>{{ count }}</h2>
    <button @click="count++" >+</button>
    <button @click="count--" >-</button>
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
import { ref } from 'vue';

        let count= ref(0)
        const courseName=ref("Vue js 3");
        const mentor=ref("Mentor");
</script>