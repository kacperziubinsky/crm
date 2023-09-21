<template>

    <section>
        <h4>{{ task }}</h4>

        <h5>{{ date }}</h5>
    </section>

</template>

<script>
export default{
    props: ['task', 'date']
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

</style>