export const imagePath = {
  methods: {
    makeImagePath(product) {
      return require(`../assets/img/products/${product.id}-${product.color}.jpeg`);
    }
  }
}
