<template>
  <section class="area">
        <aside>


          <img src="@/assets/tasks.png" alt="">
          <img src="@/assets/clients.png" alt="">
          <img src="@/assets/projects.png" alt="">
          <img src="@/assets/calendar.png" alt="">



        </aside>
        
    
        <main>
            
          <ClientList/>

    
        </main>


    </section>
</template>

<script>
import ClientList from './components/pages/TasksList.vue';
export default {
  components:{
    ClientList
  }
}
</script>

<style>     
  *{
    box-sizing: border-box;
    margin: 0;
  }
  h2{
    text-align: center;
    margin: 2rem 0;
  }
  .area{
    height: 100vh;
    display: flex;
  }
  aside{
    height: 100%;
    background-color: #822378;
    text-align: center;
    gap: 33px;
    display: grid;
  }
  main{
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  img{
    margin: 2rem 0;
  }


  @media only screen and (max-width: 876px) {
    .area{
        display: flex;
        flex-direction: column-reverse;
    }
    aside{
        width: 100vw;
        display: inline-block;
        height: 15vh;
    }
    main{
        width: 100vw;

        
    }
    img{
      margin: 1rem 0.25rem;
  }
  }
</style>
