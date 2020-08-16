import VueRouter from 'vue-router'
import List from '@/components/List'
import View from '@/components/View'
import Add from '@/components/Add'
import Edit from '@/components/Edit'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/view/:id',
            name: 'View',
            component: View
        },
        {
            path: '/add',
            name: 'Add',
            component: Add
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        }
    ]
})