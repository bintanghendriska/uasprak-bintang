<template>
  <div class="products-page">
    <h1 class="title">Produk Pendukung Belajar</h1>
    <p class="desc">Lengkapi pengalaman belajarmu dengan produk-produk terbaik dari kami.</p>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img v-if="product.image" :src="product.image" class="product-img" alt="product" />
          <img
            v-else
            src="https://via.placeholder.com/90x90?text=Product"
            class="product-img"
            alt="product"
          />
          <h2 class="product-title">{{ product.name }}</h2>
          <p class="product-desc">{{ product.description }}</p>
          <div class="product-meta">
            <span class="product-price">Rp {{ product.price.toLocaleString() }}</span>
            <button class="buy-btn" @click="buy(product.name)">Beli</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchProducts } from "../services/productService";

const products = ref([]);
const loading = ref(true);
const error = ref(null);

function buy(name) {
  alert(`Anda membeli: ${name}`);
}

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (err) {
    error.value = "Gagal memuat produk";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem 1rem;
  background: linear-gradient(135deg, #f6f8fc 60%, #e0e7ff 100%);
  min-height: 100vh;
}
.title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2d8cf0;
}
.desc {
  text-align: center;
  color: #555;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}
.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem 2rem; /* Tambah gap antar card */
}
.product-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.1);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem; /* Tambah jarak bawah antar card */
}
.product-card:hover {
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.18);
  transform: translateY(-4px) scale(1.03);
}
.product-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.1);
}
.product-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #222;
}
.product-desc {
  color: #666;
  font-size: 1.02rem;
  margin-bottom: 1.1rem;
  min-height: 40px;
}
.product-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.5rem;
}
.product-price {
  color: #2d8cf0;
  font-weight: 700;
  font-size: 1.1rem;
}
.buy-btn {
  background: linear-gradient(90deg, #2d8cf0 0%, #42b983 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
}
.buy-btn:hover {
  background: linear-gradient(90deg, #42b983 0%, #2d8cf0 100%);
  box-shadow: 0 4px 16px rgba(44, 62, 80, 0.13);
}
</style>
