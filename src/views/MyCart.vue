<template>
  <div>
    <h1>My Cart</h1>
    <p>{{ cartItemCount }} items</p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }}
        <button @click="removeFromCart(item)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { imagePath } from '@/mixins/imagePath.js';

export default {
  name: 'MyCart',
  mixins: [ imagePath ],
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    cartItemCount() {
      return this.cartItems.length
    }
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch('removeFromCart', item)
    }
  }
};
</script>

<style></style>
