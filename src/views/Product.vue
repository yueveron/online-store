<template>
  <div>
    <div class="product-wrapper">
      <img :src="makeImagePath(product)" alt="" class="product-image">
      <section class="product-info">
        <h1>{{product.name}}</h1>
        <button @click="addToCart">Add to Cart</button>
        <p>Price: ${{ product.price }}</p>
        <p>Size: {{ product.size }}</p>
        <p>Color: {{ product.color }}</p>
        <p>{{ product.quantity }} left in stock</p>
        <p>Details:</p>
        <ul>
          <li v-for="(detail, index) in productDetailLabels" :key="index">
            <p>{{ properCase(detail) }}: {{ properCase(product.details[detail]) }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js';
import { textFormatting } from '@/mixins/textFormatting.js';

export default {
  name: 'product',
  mixins: [imagePath, textFormatting],
  data() {
    return {
      product: this.$store.getters.getProductById(this.$route.params.id)
    }
  },
  computed: {
    productDetailLabels() {
      return Object.keys(this.product.details);
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.product)
    }
  }
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
}

.product-image,
.product-info {
  width: 50%;
}
</style>
