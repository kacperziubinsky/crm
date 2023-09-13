<template>
    <div>
        <h2>Status projektów</h2>

        <baseProject
        v-for="project in projects"
        :key="project.id"
        :company="project.company"
        :name="project.name"
        :tasks="project.tasks"
        >
        </baseProject>
    </div>
    
</template>


<script>
import baseProject from '../UI/baseProject.vue';
export default{
    components:{
        baseProject    
    },
    data(){
        return {
            projects: [
                {id: 0, company: 'Campus', name: 'Strona Internetowa', tasks: ['Projekt strony głównej', 'Dodać SEO', 'Stworzyć logo']},
                {id: 1, company: 'Cryo', name: 'Sklep Voucher', tasks: ['zainstalować Woocomerce', 'Dodać produkty', 'Przetestować płatność']}
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

<style scoped>
button{
    margin: auto 0;
    background-color: #D9D9D9;
    border: 0;
    border-radius: 10px;
}


</style>