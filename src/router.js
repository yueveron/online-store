import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
import MyCart from './views/MyCart.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: Product,
    },
    {
      path: '/my-cart',
      name: 'my-cart',
      component: MyCart,
    },
  ],
});
