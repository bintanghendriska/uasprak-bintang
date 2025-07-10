import { defineStore } from 'pinia';
import productService from '@/services/productService';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await productService.getProducts();
        this.products = response.data;
      } catch (error) {
        this.error = 'Failed to fetch products';
      } finally {
        this.loading = false;
      }
    }
  }
});
