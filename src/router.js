import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main';
import Form from './components/Form';
import Filme from './components/Filme';
import EditarFilme from './components/EditarFilme';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
        {
            path: "/filme/:id",
            name: 'filme',
            component: Filme,
            children: [
                {
                    path: 'edit',
                    name: 'editar-filme',
                    component: EditarFilme
                }
            ]
        }
    ]
});