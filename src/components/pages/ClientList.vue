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
        ></baseItem>
    </div>

    <button @click="addClient = !addClient">Dodaj klienta</button>
    <ClientAdd v-if="addClient" @ClientData="add"></ClientAdd>
    
</template>


<script>
import baseItem from '../UI/baseItem.vue';
import ClientAdd from '../UI/addClient.vue';
export default{
    components:{
        baseItem,
        ClientAdd
    },
    data(){
        return {
            clients: [
                {id: 0, company: 'Campus', name: 'Wojciech', mail: 'kontakt@campus.pl', phone: '+48 343 232 123'},
                {id: 1, company: 'CRR', name: 'Zbigniew', mail: 'kontakt@crr.pl', phone: '+48 123 123 123'}
            ],
            addClient: false
        }
    },
    methods:{
        add(clientCompany, clientName, clientMail, clientPhone){
            const today = new Date();
            const data = {
                id: today.getTime(),
                company: clientCompany,
                name: clientName,
                mail: clientMail,
                phone: clientPhone
            };
            this.clients.push(data);
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