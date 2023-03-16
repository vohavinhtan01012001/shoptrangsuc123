import Blog from "../components/frontend/Blog";
import Contact from "../components/frontend/Contact";
import Home from "../components/frontend/Home";
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import ProductDetail from "../components/frontend/ProductDetail";
import Cart from "../components/frontend/Cart";
import Category from "../components/frontend/Category";
import Checkout from "../components/frontend/Checkout";
import ProductAdmin from "../components/backend/ProductAdmin";
import CategoryAdmin from "../components/backend/CategoryAdmin";
import ProductEditAdmin from "../components/backend/ProductEditAdmin";
import CategoryEditAdmin from "../components/backend/CategoryEditAdmin";
import ProductAddAdmin from "../components/backend/ProductAddAdmin";
import CategoryAddAdmin from "../components/backend/CategoryAddAdmin";

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
        path:'/category/:id',
        component:Category,
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/register',
        component:Register,
    },
    {
        path:'/productdetail/:id',
        component:ProductDetail,
    },
    {
        path:'/cart',
        component:Cart,
    },
    {
        path:'/pay',
        component:Checkout,
    },
]

const privateRoutes = [
    {
        path:'/admin/product',
        component:ProductAdmin,
    },
    {
        path:'/admin/category',
        component:CategoryAdmin,
    },
    {
        path:'/admin/productedit/:id',
        component:ProductEditAdmin,
    },
    {
        path:'/admin/categoryedit/:id',
        component:CategoryEditAdmin,
    },
    {
        path:'/admin/productaddadmin',
        component:ProductAddAdmin,
    }, 
    {
        path:'/admin/categoryaddadmin',
        component:CategoryAddAdmin,
    }, 
];

export { publicRoutes,privateRoutes};