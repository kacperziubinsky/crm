<template>
    <div>
        <h2>Notatki</h2>

        <baseNote
        v-for="note in notes"
        :key="note.id"
        :date="note.id"
        :author="note.author"
        :text="note.text"
        >
        </baseNote>
    </div>
    
</template>


<script>
import baseNote from '../UI/baseNote.vue';
export default{
    components:{
        baseNote,
    },
    data(){
        return {
            notes: [
                {id: '1.9.2023', author: 'Kacper', text: 'Randomowa treść here!'},
                {id: '13.9.2023', author: 'Piotr', text: 'Losowa treść tutaj!'}
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
    margin: auto;
    background-color: #D9D9D9;
    border: 0;
    border-radius: 10px;
    margin: 0 1rem;
    font-size: 20px;
}


</style>