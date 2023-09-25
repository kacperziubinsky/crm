<template>
    <div>
        <h2>Status projektów</h2>

        <baseProject
        v-for="project in projects"
        :key="project.id"
        :company="project.company"
        :name="project.name"
        :tasks="project.tasks"
        :id="project.id"
        >
        </baseProject>
    </div>
    
</template>


<script>
import baseProject from '../bases/baseProject.vue';
export default{
    components:{
        baseProject    
    },
    data(){
        return {
            addClient: false
        }
    },
    computed:{
        projects(){
            return this.$store.state.projects;
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