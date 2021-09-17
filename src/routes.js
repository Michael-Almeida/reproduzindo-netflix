import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Titulos from "./pages/Titulos.vue";
import TitulosDetail from "./pages/TitulosDetail.vue";

const routes = [
    { path: "/", component: Home, name: 'home' },
    { path: "/titulos", component: Titulos, name: "titulos" },
    { path: "/titulos/:id", component: TitulosDetail, name: "titulos-detalhe" },
]

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;