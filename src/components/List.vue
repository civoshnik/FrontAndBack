<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios';

const router = useRouter()
const list = ref([])

async function Update(id)
{
    const update = await axios.patch(`/api/Usluga/${id}`)
    const response = await axios.get('/api/Usluga')
    list.value = response.data
    
}

async function Delete (id) {
    alert('Вы действительно хотите удалить услугу?')
    const del = await axios.delete(`/api/Usluga/${id}`)
    const response = await axios.get('/api/Usluga')
    list.value = response.data

}

onMounted(async() => {
    const response = await axios.get('/api/Usluga')
    list.value = response.data
})
</script>

<template>
    <div class="text-center">
        <div class="table-wrapper">
            <table class="main-table">
                <thead>
                    <tr>
                        <th>Айди услуги</th>
                        <th>Статус</th>
                        <th>Наименование</th>
                        <th>Тип услуги</th>
                        <th>Цена</th>
                        <th>Дата создания</th>
                        <th>Дата редактирования</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usluga in list" :key="usluga.id">
                        <td>{{ usluga.id }}</td>
                        <td>{{ usluga.status === 0 ? "Опубликована" : "Неопубликована" }}</td>
                        <td>{{ usluga.name }}</td>
                        <td>{{ usluga.type }}</td>
                        <td>{{ usluga.price }}</td>
                        <td>{{ usluga.createdAt }}</td>
                        <td>{{ usluga.modifiedAt }}</td>
                        <td v-if="usluga.status === 0">
                            <button @click="Update(usluga.id)">Снять с публикации</button>
                            <button @click="router.push(`edit/${usluga.id}`)">Редактировать</button>
                            <button @click="Delete(usluga.id)">Удалить</button>
                        </td>
                        <td v-else>
                            <button @click="Update(usluga.id)">Опубликовать</button>
                            <button @click="router.push(`edit/${usluga.id}`)">Редактировать</button>
                            <button @click="Delete(usluga.id)">Удалить</button>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.main-table {
    align-items: center;
    align-self: center;
    width: 100%;
    table-layout: fixed;
    width: fit-content;
    margin: 0 auto;
}
.table-wrapper {
  display: flex;
  justify-content: center;
}
.main-table td,
.main-table th {
    width: 200px;
}
</style>