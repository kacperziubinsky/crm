<template>

    <RouterLink :to="showAll">

        <section>

            <h4>{{ company }} <h5> {{ name }}</h5></h4>

         </section>

    </RouterLink>


</template>

<script>
import { RouterLink } from 'vue-router';

export default{
    props: ['company', 'name', 'tasks', 'id'],
    computed: {
        showAll() {
            return '/project/' + this.id
        }
    },
    components: { RouterLink }
}
</script>

<style scoped>
section{
    background-color:  #5A1853;;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    color: white !important;
}
a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
}
h4,h5{
    display: inline;
    
}

</style>