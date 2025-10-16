<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const list = ref([])
onMounted(async() => {
    const response = await axios.get('api/Usluga')
    list.value = response.data
})
</script>

<template>

</template>

<style scoped>
</style>