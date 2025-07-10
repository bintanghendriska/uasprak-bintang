<template>
  <div class="products">
    <h2>Produk Pendukung Belajar</h2>
    <p class="desc">
      Lengkapi pengalaman belajarmu dengan produk-produk terbaik dari kami. Semua produk didesain
      untuk menunjang proses pembelajaran online yang efektif.
    </p>
    <ul>
      <li v-for="product in products" :key="product.title" class="product-card">
        <span class="product-icon">🛒</span>
        <div class="product-info">
          <h4>{{ product.title }}</h4>
          <p>{{ product.desc }}</p>
          <div class="product-meta">
            <span class="product-price">{{ product.price }}</span>
            <button class="buy-btn" @click="buy(product.title)">Beli</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = [
  {
    title: "Buku Panduan Belajar",
    desc: "Buku lengkap untuk menunjang pembelajaran.",
    price: "Rp 75.000",
  },
  {
    title: "Video Tutorial Premium",
    desc: "Akses video eksklusif dari para ahli.",
    price: "Rp 120.000",
  },
  {
    title: "Membership Komunitas",
    desc: "Gabung komunitas belajar dan diskusi.",
    price: "Rp 50.000",
  },
  {
    title: "Webinar Eksklusif",
    desc: "Ikuti webinar dengan topik menarik setiap bulan.",
    price: "Rp 100.000",
  },
];

function buy(product) {
  alert(`Anda membeli: ${product}`);
}
</script>

<style scoped>
.products {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
.desc {
  color: #555;
  margin-bottom: 1.5rem;
}
.products ul {
  padding-left: 0;
  list-style: none;
}
.product-card {
  background: #f8fafc;
  margin: 1rem 0;
  padding: 1.2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.07);
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  justify-content: flex-start;
}
.product-card:hover {
  background: #e0e7ff;
  box-shadow: 0 4px 24px rgba(66, 185, 131, 0.1);
}
.product-icon {
  font-size: 1.5rem;
  margin-top: 0.3rem;
}
.product-info {
  text-align: left;
  width: 100%;
}
.product-info h4 {
  margin: 0 0 0.3rem 0;
  color: #2c3e50;
}
.product-info p {
  margin: 0 0 0.7rem 0;
  color: #666;
  font-size: 0.98rem;
}
.product-meta {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.5rem;
}
.product-price {
  color: #42b983;
  font-weight: 600;
  font-size: 1.05rem;
}
.buy-btn {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 1.1rem;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.buy-btn:hover {
  background: #369870;
}
</style>
