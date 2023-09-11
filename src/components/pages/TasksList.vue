<template>
    <div>
        <h2>Lista Działań</h2>

        <baseTask
        v-for="client in clients"
        :key="client.id"
        :company="client.company"
        :task="client.task"
        @change-task="newTask"
        ></baseTask>
    </div>


    
</template>


<script>
import baseTask from '../UI/baseTask.vue';
export default{
    components:{
        baseTask
    },
    data(){
        return {
            clients: [
                {id: 0, company: 'Campus', name: 'Wojciech', mail: 'kontakt@campus.pl', phone: '+48 343 232 123', task: 'Zadzwonić, zbałamucić'},
                {id: 1, company: 'CRR', name: 'Zbigniew', mail: 'kontakt@crr.pl', phone: '+48 123 123 123', task: 'Żądać kasy!'}
            ],
            addClient: false
        }
    },
    methods:{
        newTask(name, task){
            const client = this.clients.find(client => client.company.trim() === name);
            client.task = task;

        }
    }
}

</script>
