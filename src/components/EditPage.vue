<script setup>
import { ref, onMounted } from 'vue';
import VueRouter from 'vue-router'
import axios from 'axios';

const list = ref([])

const name = ref("")
const type = ref("")
const price = ref("")


async function Update() {
    const fulldata = {
        name: name.value,
        type: type.value,
        price: parseFloat(price.value)
    }
    const response = await axios.put('/api/put', fulldata)
   name = ""
   type = ""
   price = "" 
}
</script>


<template>
<div class="text-center">
    <h1>Страница редактирования услуги</h1>
    <p><input type="text" v-model="name" placeholder="Введите наименование услуги"/></p>
    <p><input type="text" v-model="type" placeholder="Введите тип услуги"/></p>
    <p><input type="text" v-model="price" placeholder="Введите цену"/></p>
    <button @click="Update">Добавить!</button>
  </div>
</template>

<style scoped>

</style>