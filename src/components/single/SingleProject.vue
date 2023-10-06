<template>

    <section>
        <div class="info">
            <h2>{{ project.company }} - {{ project.name }}</h2> 
        </div>

        <div class="tasksss">
            <h4>Zadania do zrealizowania</h4>  
            <ul>
                <li v-for="task in project.tasks" :key="task">{{ task }}
                    <span>[USUŃ]</span>
                </li>
            </ul>

        </div>

        <div class="edit">
            <ul>
                <li class="add">DODAJ ZADANIE</li>
                <li>
                    <textarea name="" id="" v-model="value"></textarea>
                    <br>
                    <button @click="addTask">DODAJ</button>
                </li>
                <li class="del" @click="deleteProject">USUŃ PROJEKT</li>
            </ul>
        </div>

    </section>
 
</template>
s
<script>
import router from '@/router';

export default{
    data(){
        return {
            value: ''
        }
    },
    computed:{
        project(){
            const id= this.$route.params.id_projektu
            const project = this.$store.state.projects.find(p => p.id === Number(id));
            return project || {}
        }
    },
    methods:{
        deleteProject(){
            this.$store.commit('deleteProject', this.project.id);
            router.push('/projects')
        },
        addTask(){
            this.$store.commit('addTask', this.project.id, this.value);
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
.add{
    background-color: green;
    color: white;

}

.edit{
    margin-top: 5rem;

}
ul{
    margin: auto auto;
    width: 60%;
}
textarea{
    width: 70%;
}
</style>