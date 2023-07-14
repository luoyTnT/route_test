import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes: [
        {
            name: 'About',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: "关于" }
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'News',
                    path: 'news',
                    component: News
                },
                {
                    name: 'Message',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'Detail',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

router.beforeEach((to, _from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('auth')) {
            next()
        } else {
            alert('无权限查看')
        }
    } else {
        next()
    }
})

export default router