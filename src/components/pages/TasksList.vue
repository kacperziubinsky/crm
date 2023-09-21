<template>
    <div>
        <h2>Lista Działań</h2>

        <baseTask
        v-for="client in clients"
        :key="client.id"
        :id="client.id"
        :company="client.company"
        :task="client.task"
        @change-task="newTask"
        ></baseTask>
    </div>


    
</template>


<script>
import baseTask from '../bases/baseTask.vue';
export default{
    components:{
        baseTask
    },
    data(){
        return {
            addClient: false
        }
    },
    methods:{
        newTask(name, task){
            const client = this.clients.find(client => client.company.trim() === name);
            client.task = task;

        },
    },
    computed:{
        clients(){
            return this.$store.state.clients;
        }
    }
}

</script>
