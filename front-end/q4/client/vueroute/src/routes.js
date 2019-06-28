// import Home from './components/Home.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';
import BookList from './components/BookList.vue';
import BookPage from './components/BookPage.vue';

const routes = [
    { path: '/', component: BookList, name: 'BookList' },
    { path: '/book/:id', component: BookPage, name: 'book' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/*', component: Error, name: '404' },
];

export default routes;