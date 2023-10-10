import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPageSecond";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: '/about', component: About, id:1},
    { path: '/posts', component: Posts, id:2},
    { path: '/posts/:id', component: PostIdPage, id:3},
    { path: '/*', component: Posts, id:4},
]
export const publicRoutes = [
    { path: '/login', component: Login, id:1},
    { path: '/*', component: Login, id:2},

]