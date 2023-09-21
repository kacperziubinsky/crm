<template>

    <section>
        
        <router-link to="/tasks" class="router-link"><img src="@/assets/tasks.png" alt=""><p>Zadania</p></router-link>
        <router-link to="/clients" class="router-link"><img src="@/assets/clients.png" alt=""><p>Klienci</p></router-link>
        <router-link to="/projects" class="router-link"><img src="@/assets/projects.png" alt=""><p>Projekty</p></router-link>
        <router-link to="/calendar" class="router-link"><img src="@/assets/calendar.png" alt=""><p>Kalendarz</p></router-link>
        <RouterLink to="/chat" class="router-link"><img src="@/assets/chat.png" alt=""><p>Notatki</p></RouterLink>
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

.router-link{
    text-align: center;
    display: block;
    text-decoration: none;
    color: white;
}
@media only screen and (max-width: 876px) {
    section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img{
        height: 42px;
    }
    p{
        font-size: 0.75rem;
    }
  
  }
</style>