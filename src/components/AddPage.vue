<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import axios from 'axios';

const router = useRouter()

const errors = ref({
    name: "",
    type: "",
    price: ""

})

const validation = yup.object({
    name: yup.string().required('Наименование должно быть обязательным'),
    type: yup.string().required('Тип должен быть обязательным'),
    price: yup.number().typeError('Цена должна быть число').positive('Цена должна быть больше 0')
})


const list = ref([])

const name = ref("")
const type = ref("")
const price = ref("")

async function Post() {
    const fulldata = {
        name: name.value,
        type: type.value,
        price: parseFloat(price.value)
    }
    try {
        await validation.validate(fulldata, { abortEarly: false})
        errors.value = {}
        const response = await axios.post('api/Usluga', fulldata)
    name.value = ""
    type.value = ""
    price.value = ""
    router.push('/')
    }
    catch (err){
        if(err.inner) {
            errors.value = {}
            err.inner.forEach(e => {
                errors.value[e.path] = e.message
            });
        }

    }
    

}
</script>


<template>
<div class="text-center">
    <h1>Страница добавления услуги</h1>
    <p style="color: red;">{{ errors.name }}</p>
    <p><input type="text" v-model="name" placeholder="Введите наименование услуги"/></p>
    <p style="color: red;">{{ errors.type }}</p>
    <p><input type="text" v-model="type" placeholder="Введите тип услуги"/></p>
    <p style="color: red;">{{ errors.price }}</p>
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