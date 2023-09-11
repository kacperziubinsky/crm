<template>

    <section>
        <h4>{{ company }}</h4>
        <p @click="edit = !edit">
            {{ task }}
        </p>
        <textarea v-if="edit" v-on:keyup.enter="change"  v-model="newTask"  rows="5"></textarea>
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
</style>