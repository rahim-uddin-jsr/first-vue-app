<script setup>
import { inject } from 'vue';

const massage=inject('massage')
</script>
<template>
<h6 class="mt-5">Advice From grandpa -> {{ massage }}</h6>
</template>