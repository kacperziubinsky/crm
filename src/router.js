import { createRouter, createWebHistory } from 'vue-router';

import ClientList from './components/pages/ClientList.vue';
import TasksList from './components/pages/TasksList.vue';
import NotFound from './components/pages/NotFound.vue';
import ProjectsList from './components/pages/ProjectsList.vue';
import Calendar from './components/pages/TheCalendar.vue';
import Chat from './components/pages/UsersChat.vue';
import SingleProject from './components/single/SingleProject.vue';

const router = createRouter({
    base: '/app',
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/tasks' },
        { path: '/clients', component: ClientList },
        { path: '/tasks', component: TasksList },
        { path: '/projects', component: ProjectsList},
        { path: '/project/:id_projektu', component: SingleProject }, // Dodaj trasę dla pojedynczego projektu
        { path: '/calendar', component: Calendar},
        { path: '/chat', component: Chat },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;