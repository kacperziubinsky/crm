<template>

    <section>
        <div class="info">
            <h2>{{ project.company }} - {{ project.name }}</h2> 
        </div>

        <div class="tasks">
            <h4>Zadania do zrealizowania</h4>  
            <li v-for="task in project.tasks" :key="task">{{ task }}</li>
        </div>

        <div class="edit">
            <li class="del" @click="deleteProject">USUŃ PROJEKT</li>
        </div>

    </section>
 
</template>

<script>
import router from '@/router';

export default{
    computed:{
        project(){
            const id=this.$route.params.id_projektu
            return this.$store.state.projects[id];
        }
    },
    methods:{
        deleteProject(){
            this.$store.commit('deleteProject', this.project.id);
            router.push('/projects')
        }
    }

}
</script>


<style scoped>
section{
    text-align: center;
}
li{
    list-style-type: none;
    padding: 1rem;
    background-color: aquamarine;
    margin: 1rem 0;
    border-radius: 2rem;

}
.del{
    background-color: red;
    color: white;
}
.tasks{
    text-align: center;
}
.edit{
    margin-top: 5rem;
}
</style>