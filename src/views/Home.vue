<template>
  <div class="home">
    <section>
      <h1>Welcome</h1>
    </section>
    <section>
      <h2>Hot New Items</h2>
      <ul class="p-card-list">
        <li v-for="product in products" :key="product.id" class="p-card-list-item">
          <router-link :to="{ name: 'product-detail', params: { id: product.id }}" class="p-card">
            <img :src="makeImagePath(product)" alt="" class="p-card__image">
            <p class="p-card__title">{{ product.name }}</p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { imagePath } from '@/mixins/imagePath.js';

export default {
  name: 'home',
  mixins: [ imagePath ],
  computed: {
    products() {
      return this.$store.state.products
    }
  }
};
</script>
<style>
.p-card-list {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.p-card-list-item {
  width: 33.33%;
}
.p-card {
  text-decoration: none;
  color: black;
}
.p-card__image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

</style>
