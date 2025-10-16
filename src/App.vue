<script setup>
import List from './components/List.vue';

function ShowAddPage()
{

}
</script>

<template>
  <div v-if="!ShowAddPage">
  <List/>
  <button class="button-add">Перейти на страницу добавления</button>
  </div>
  <div v-else>
  <button class="button-add">Назад</button>
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
</style>
