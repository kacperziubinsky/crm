<template>

    <section>
        
        <router-link to="/tasks"><img src="@/assets/tasks.png" alt=""></router-link>
        <router-link to="/clients"><img src="@/assets/clients.png" alt=""></router-link>
        <router-link to="/projects"><img src="@/assets/projects.png" alt=""></router-link>
        <router-link to="/calendar"><img src="@/assets/calendar.png" alt=""></router-link>
        <RouterLink to="/chat"><img src="@/assets/chat.png" alt=""></RouterLink>
    </section>
        
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
}
img{
    height: 64px;
}
@media only screen and (max-width: 876px) {
    section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
  
  }
</style>