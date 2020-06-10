export default [
    {name: 'home', path: '/', meta: {title: '首页', group: ''}, component: () => import(/* webpackChunkName: "group-index" */ './views/home')},
    {name: 'index', path: '/index', meta: {title: '首页', group: ''}, component: () => import(/* webpackChunkName: "group-index" */ './views/index.vue')},
    // {name: 'auth', path: '/auth', meta: {title: '登陆', group: ''}, component: () => import('./views/auth.vue')},
    {name: '404', path: '*', meta: {title: '404', group: ''}, component: () => import('./views/404.vue')}
];
