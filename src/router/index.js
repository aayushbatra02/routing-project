import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");
const AboutView = () => import("../views/AboutView.vue");
const JobsView = () => import("../views/JobsView.vue");
const JobDetailView = () => import("../views/JobDetailView.vue");
const notFound = () => import("@/views/NotFound.vue");
// import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:jobId",
    name: "jobDetail",
    component: JobDetailView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
