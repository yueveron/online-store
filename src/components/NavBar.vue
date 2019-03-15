<template>
  <nav>
    <router-link :to="{ name:'home' }">Home</router-link>
    <router-link :to="{ name: 'my-cart' }">My Cart</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
