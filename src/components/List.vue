<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const list = ref([])

async function Update(id)
{
    const update = await axios.patch(`/api/Usluga/${id}`)
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
        <div>
            <table>
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
                        <td>{{ usluga.status }}</td>
                        <td>{{ usluga.name }}</td>
                        <td>{{ usluga.type }}</td>
                        <td>{{ usluga.price }}</td>
                        <td>{{ usluga.createdAt }}</td>
                        <td>{{ usluga.modifiedAt }}</td>
                        <td>
                            <button @click="Update(usluga.id)">Изменить статус</button>
                            <button>Редактировать</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>