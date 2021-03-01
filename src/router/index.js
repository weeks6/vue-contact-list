import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "../views/Contacts";
import ContactDetails from "../views/ContactDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Contacts,
    meta: { title: "Контакты" },
  },
  {
    path: "/:id",
    name: "Details",
    component: ContactDetails,
    meta: { title: "Контакты" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
