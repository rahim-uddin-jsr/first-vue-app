<script setup>
import { useRouter } from 'vue-router';


const router=useRouter()
const goHome=()=>{
    router.push({name:'home'})
}
</script>
<template>
    <h2>Single User</h2>
    <h6>User Id is {{  $route.params.id }}</h6>
    <button @click="goHome">Back to Home</button>
</template>