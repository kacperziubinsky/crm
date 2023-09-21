<template>
    <div>
        <h2>Lista klientów</h2>

        <baseItem
        v-for="client in clients"
        :key="client.id"
        :company="client.company"
        :name="client.name"
        :mail="client.mail"
        :phone="client.phone"
        :id="client.id"
        @delete-client="deleteItem"
        ></baseItem>
    </div>

    <button @click="addClient = !addClient">Dodaj klienta</button>
    <ClientAdd v-if="addClient" @ClientData="add"></ClientAdd>
    
</template>


<script>
import baseItem from '../bases/baseItem.vue';
import ClientAdd from '../increase/addClient.vue';
export default{
    components:{
        baseItem,
        ClientAdd
    },
    data(){
        return {
            addClient: false
        }
    },
    methods:{
        add(clientCompany, clientName, clientMail, clientPhone){
            this.$store.commit('add', {
                clientCompany: clientCompany,
                clientName: clientName,
                clientMail: clientMail,
                clientPhone: clientPhone
            });
        },
        deleteItem(id){
            this.$store.commit('delete', {
                clientId: id
            });
        }
    },
    computed:{
        clients(){
            return this.$store.state.clients;
        }
    }
}

</script>

<style scoped>
button{
    margin: auto;
    background-color: #D9D9D9;
    border: 0;
    border-radius: 10px;
    margin: 0 1rem;
    font-size: 20px;
}


</style>