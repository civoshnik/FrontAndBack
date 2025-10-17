<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
   <router-view />
   <div v-if="$route.path === '/'">
  <button @click="router.push('/add')" class="button-add">Перейти на страницу добавления</button>
  </div>
  <div v-else>
  <button @click="router.back()" class="button-back">Назад</button>
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
