<script setup>
import { ref } from 'vue';
import AddPage from './components/AddPage.vue';
import List from './components/List.vue';

const showAddPage = ref(false)
function ShowAddPage()
{
  showAddPage.value = !showAddPage.value
}
</script>

<template>
  <div v-if="!showAddPage">
  <List/>
  <button @click="ShowAddPage" class="button-add">Перейти на страницу добавления</button>
  </div>
  <div v-else>
  <AddPage/>
  <button @click="ShowAddPage" class="button-back">Назад</button>
  </div>
</template>

<style scoped>
.button-add {
    background-color: green;
    border-radius: 10px;
    margin: 10px;
}
.button-add:hover {
    font-size: 17px;
    background-color: darkgreen;
}
.button-back {
    background-color: green;
    border-radius: 10px;
    margin: 10px;
}
.button-back:hover {
    font-size: 17px;
    background-color: darkgreen;
}
</style>
