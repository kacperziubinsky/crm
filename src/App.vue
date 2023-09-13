<template>
  <section class="area">
        <aside>

          <the-header></the-header>

        </aside>
        
    
        <main>
            
          <router-view></router-view>

    
        </main>


    </section>
</template>

<script>
import TheHeader from './components/UI/TheMenu.vue';
export default {
  components:{
    TheHeader
  }
}
</script>

<style>     
@import url('https://fonts.googleapis.com/css2?family=Inter');
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Archivo Black', sans-serif;

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
  }
  main{
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  img{
    margin: 2rem 1rem;
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
