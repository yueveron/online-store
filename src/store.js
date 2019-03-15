import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional: "Some colors feature different-colored yarns for a heathered effect."
        },
        images: [
          './assets/53362-white.jpeg',
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          './assets/53363-red.jpeg',
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32,
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          './assets/53364-navy.jpeg',
        ]
      },
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cart.indexOf(payload);
      state.cart.splice(indexToDelete, 1);
    }
  },
  actions: {
    addToCart ({commit}, payload) {
      commit('addToCart', payload)
    },
    removeFromCart({commit}, payload) {
      commit('removeFromCart', payload)
    }
  },
  getters: {
    getProductById: state => (id) => {
      return state.products.find(p => p.id === Number(id))
    }
  }
});
