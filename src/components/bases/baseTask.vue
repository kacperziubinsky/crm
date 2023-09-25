<template>

    <section>
        <h4>{{ company }}</h4>
        <p>
            {{ task }}
        </p>

        <div class="nav">        
            <p @click="edit = !edit">[EDYTUJ]</p>
            <span v-if="edit" @click="edit = !edit">[ANULUJ]</span>
        </div>

        <div v-if="edit">
            <textarea v-model="newTask"  rows="3"></textarea>
            <button @click="change">Zatwierdź</button>
        </div>
    </section>

</template>

<script>
export default{
    data() {
        return {
            edit:false,
            newTask: ''
        }
    },
    props: ['company', 'task'],
    methods:{
        change(){
            this.$emit('change-task', this.company, this.newTask);
            this.edit=false;
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
}
a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
}
textarea{
    width: 100%;
}
.nav span,
.nav p{
    display: inline-block;
    margin-right: 1rem;
}
</style>