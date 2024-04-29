import { createRouter, createWebHashHistory } from "vue-router";

import NotFound from "@/views/NotFound.vue"; // Import the NotFound component directly


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    children: [
      {
        path: "",
        name: "jobs",
        component: () => import("@/views/JobsView.vue"),
      },
      {
        path: ":jobId",
        name: "jobDetail",
        component: () => import("@/views/JobDetailView.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
