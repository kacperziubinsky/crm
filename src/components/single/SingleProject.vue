<template>

    <section>
        <h2>{{ project.company }} - {{ project.name }}</h2> 
        <h4>Zadania do zrealizowania</h4>  
        <li v-for="task in project.tasks" :key="task">{{ task }}</li>
    </section>
 
</template>

<script>
export default{
    computed:{
        project(){
            const id=this.$route.params.id_projektu
            return this.$store.state.projects[id];
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
</style>