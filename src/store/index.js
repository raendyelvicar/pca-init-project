import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const API_URL = "https://fakestoreapi.com"
const HEADERS = {accept: "application/json"}

export default new Vuex.Store({
  state: {
    products:[],
  },
  mutations: {
    setProducts(state, payload){
      state.products.push(payload);
    }
  },
  actions: {
    async setProducts(state){
      try {
        const products = await axios.get(API_URL + "/products" , {HEADERS});
        const prod = products.data;
        state.commit("setProducts", prod);
        
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
  getters: {
    getAllProducts(state){
      return state.products[0]
    }
  }
})
