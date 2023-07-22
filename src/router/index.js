import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from "@/views/ProjectsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import HobbiesView from "@/views/HobbiesView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: HobbiesView
  },
  {
    path: '/aboutme',
    name: 'about',
    component: AboutMeView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  }
]

const router = new VueRouter({
  routes
})

export default router
