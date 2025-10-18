<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import * as yup from 'yup'
import { useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const router = useRouter()
const id = route.params.id

const validation = yup.object({
    name: yup.string().required('Наименование должно быть обязательным'),
    type: yup.string().required('Тип должен быть обязательным'),
    price: yup.number().required('Цена должна быть обязательная').positive('Цена должна быть больше 0')
})

const errors = ref({
    name: "",
    type: "",
    price: ""
})



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
    try {
        await validation.validate(fulldata, { abortEarly : false })
        errors.value = {}
    const response = await axios.put(`/api/Usluga/${id}`, fulldata)
    name.value = ""
    type.value = ""
    price.value = ""
    router.push('/')
    }
    catch (err) {
        if(err.inner) {
            errors.value = {}
            err.inner.forEach(e => {
                errors.value[e.path] = e.message
            });
        }
    }
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
    <p style="color: red;">{{ errors.name }}</p>
    <p><input type="text" v-model="name" placeholder="Введите наименование услуги"/></p>
    <p style="color: red;">{{ errors.type }}</p>
    <p><input type="text" v-model="type" placeholder="Введите тип услуги"/></p>
    <p style="color: red;">{{ errors.price }}</p>
    <p><input type="text" v-model="price" placeholder="Введите цену"/></p>
    <button @click="Update">Отредактиовать!</button>
  </div>
</template>

<style scoped>

</style>