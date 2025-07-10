<template>
  <div class="main-layout">
    <header>
      <Navbar />
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 E-Learning. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main-content {
  flex: 1;
  padding: 2.5rem 1rem;
  max-width: 900px;
  margin: 2rem auto 1.5rem auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.08);
  min-height: 60vh;
}

footer {
  background: transparent;
  color: #888;
  font-size: 1rem;
  padding: 1.5rem 0 1rem 0;
  text-align: center;
  border-top: none;
}
</style>
