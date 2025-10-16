<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const list = ref([])

const id = ref("")
const name = ref("")
const type = ref("")
const price = ref("")

async function Post() {
    const fulldata = {
        id: parseInt(id.value),
        name: name.value,
        type: type.value,
        price: parseFloat(price.value)
    }
const response = await axios.post('api/Usluga', fulldata)

}
</script>


<template>
<div class="text-center">
    <h1>Страница добавления услуги</h1>
    <p><input type="text" v-model="name" placeholder="Введите айди услуги"/></p>
    <p><input type="text" v-model="name" placeholder="Введите наименование услуги"/></p>
    <p><input type="text" v-model="type" placeholder="Введите тип услуги"/></p>
    <p><input type="text" v-model="price" placeholder="Введите цену"/></p>
    <button @click="Post">Добавить!</button>
  </div>
</template>

<style scoped>
input {
    width: 300px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid gray;
    font-size: 16px;
}
input:focus {
    background-color: black;
}
input:hover {
    padding:11px;
}
</style>