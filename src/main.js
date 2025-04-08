import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue'; // Import ContactView
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faBriefcase, faGraduationCap);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView, // Add the Contact route
    }
  ],
});

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(router).mount('#app');