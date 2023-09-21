<template>

    <section>
        <div>
            <h4>{{ company }} <h5> {{ name }}</h5></h4>
        <p>
            <a :href="ClientMail">{{ mail }}</a>
            
            <a :href="ClientPhone">{{ phone }}</a>
        </p>

        </div>
        <div>
            <p @click="DeleteClient">[USUŃ]</p>
        </div>

        
    </section>

</template>

<script>
export default{
    props: ['company', 'name', 'mail', 'phone', 'id'],
    computed:{
        ClientMail(){
            return "mailto:" + this.mail;
        },
        ClientPhone(){
            return "tel:" + this.phone;
        },
    },
    methods:{
        DeleteClient(){
            if(confirm("Czy jesteś pewien?") === true){
                this.$emit('delete-client', this.id);
            }
        }
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
    display: flex;
    justify-content:space-between;
    
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