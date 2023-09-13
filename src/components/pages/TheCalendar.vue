<template>
    <div class="grid">
        <div class="box">
            <h2>Nadchodzące</h2>

            <baseDate
            v-for="task in calendars"
            :key="task.date"
            :task="task.task"
            :date="task.date"
            >
            </baseDate>
        </div>
        
        <div class="box">
            <h2>Zrealizowano</h2>

            <baseDate
            v-for="task in calendars"
            :key="task.date"
            :task="task.task"
            :date="task.date"
            >
            </baseDate>
     
        </div>
    </div>


    
</template>


<script>
import baseDate from '../UI/baseDate.vue';
export default{
    components:{
        baseDate
    },
    data(){
        return {
            calendars: [
                {date: '12.9.2023 14:00', task: 'Zadzwonić do Campus'},
                {date: '12.9.2023 15:00', task: 'Ochzanić Kacpra'}
            ],
            addClient: false
        }
    },
    methods:{
        coming(){

        }
    }
}

</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>
