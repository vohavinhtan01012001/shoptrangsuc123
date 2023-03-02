import Blog from "../components/frontend/Blog";
import Contact from "../components/frontend/Contact";
import Home from "../components/frontend/Home";
import ShopSilver from "../components/frontend/ShopSilver";

const publicRoutes = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/blog',
        component:Blog,
    },
    {
        path:'/contact',
        component:Contact,
    },
    {
        path:'/shopsilvers',
        component:ShopSilver,
    },
]

const privateRoutes = [];

export { publicRoutes,privateRoutes};