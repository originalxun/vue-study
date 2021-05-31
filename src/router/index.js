import Vue from 'vue'
import Router from 'vue-router'

/*import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'*/

const Home = () =>
    import ('../components/Home');
const About = () =>
    import ('../components/About');
const User = () =>
    import ('../components/User');
const Profile = () =>
    import ('../components/profile');
const News = () =>
    import ('../components/HomeNews');
const Message = () =>
    import ('../components/HomeMessage');
// 导入路由对象，并且调用Vue.use(Router)
Vue.use(Router);


// 创建路由实例，并传入路由映射配置
const routes = [{
        path: '/home',
        component: Home,
        children: [
            // {
            //     path:'',
            //     redirect:{
            //         name:'news'
            //     }
            // },
            {
                path: 'news',
                component: News
            },
            {
                path: 'message',
                component: Message
            }
        ]
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    }
];

// eslint-disable-next-line no-undef

// eslint-disable-next-line no-unused-vars
/*const router = new Router({
    routes
});*/
// 在Vue实例中挂载创建的路由实例
export default new Router({
    routes
})