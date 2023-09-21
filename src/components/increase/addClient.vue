<template>
    <form @submit.prevent="addClient">
        <label for="company">Firma</label>
        <input type="text" name="firma" v-model.trim="company">

        <label for="name">Imię i nazwisko</label>
        <input type="text" name="name" v-model.trim="name">

        <label for="mail">E-mail</label>
        <input type="email" name="mail" v-model.trim="mail">

        <label for="phone">Telefon</label>
        <input type="number" name="phone" v-model.number="phone">

        <input type="submit" value="DODAJ">

    </form>
</template>


<script>
export default{
    data() {
        return {
            company: '',
            name: '',
            mail: '',
            phone: ''
        }
    },
    methods:{
        addClient(){
            this.$emit('ClientData', this.company, this.name, this.mail, this.phone)
        }
    }
}

</script>


<style>
form{
    background-color:  #5A1853;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    color: white !important;
}

label, input{
    margin-right: 1rem;
}

input[type=submit]{
    background-color: yellow;
    border: 0;
    border-radius: 10px;
}
label,input{
    margin: 1rem;
    max-width: 100%;
    display: inline;
}

@media only screen and (max-width: 1440px) {
    label,input{
        display: block;
    }
}

</style>