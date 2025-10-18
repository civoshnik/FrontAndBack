<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const router = useRouter()
const id = route.params.id

const list = ref([])

const name = ref("")
const type = ref("")
const price = ref("")


async function Update() {
    const fulldata = {
        id: parseInt(id),
        name: name.value,
        type: type.value,
        price: parseFloat(price.value)
    }
    const response = await axios.put(`/api/Usluga/${id}`, fulldata)
    name.value = ""
    type.value = ""
    price.value = ""
    router.push('/')
}
onMounted(async () => {
    const response = await axios.get(`/api/Usluga/${id}`)
    const usluga = response.data
    name.value = usluga.name
    type.value = usluga.type
    price.value = usluga.price
})
</script>


<template>
<div class="text-center">
    <h1>Страница редактирования услуги</h1>
    <p><input type="text" v-model="name" placeholder="Введите наименование услуги"/></p>
    <p><input type="text" v-model="type" placeholder="Введите тип услуги"/></p>
    <p><input type="text" v-model="price" placeholder="Введите цену"/></p>
    <button @click="Update">Отредактиовать!</button>
  </div>
</template>

<style scoped>

</style>