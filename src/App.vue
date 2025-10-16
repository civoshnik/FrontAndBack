<script setup>
import List from './components/List.vue';
</script>

<template>
  <List/>
  <button class="button-add">Перейти на страницу добавления</button>
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
