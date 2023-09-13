<template>

    <section>
        <h4>{{ date }} <h5> {{ author }}</h5></h4>
        <p>
            {{ text }}
        </p>
    </section>

</template>

<script>
export default{
    props: ['date', 'author', 'text'],
    computed:{
        ClientMail(){
            return "mailto:" + this.mail;
        },
        ClientPhone(){
            return "tel:" + this.phone;
        },
    }
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