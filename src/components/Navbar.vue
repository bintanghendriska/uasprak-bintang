<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo"><span>📚</span> <span class="brand">E-Learning</span></div>
      <ul class="navbar-menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/courses">Courses</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
      <router-link v-if="!isLoggedIn" to="/login" class="login-btn">Login</router-link>
      <button v-else class="login-btn" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  isLoggedIn.value = false;
  router.replace("/login");
}
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
}
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}
.navbar-logo {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  gap: 0.5rem;
}
.brand {
  letter-spacing: 1px;
}
.navbar-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-menu li {
  font-size: 1.1rem;
}
.navbar-menu a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
  padding: 0.4rem 1rem;
  border-radius: 6px;
}
.navbar-menu a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
  background: #fff;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.08);
}
.navbar-menu a:hover {
  color: #42b983;
  background: rgba(255, 255, 255, 0.08);
}
.login-btn {
  background: #42b983;
  color: #fff;
  padding: 0.45rem 1.3rem;
  border-radius: 7px;
  font-weight: 600;
  font-size: 1.05rem;
  margin-left: 2rem;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.08);
  border: none;
  display: inline-block;
}
.login-btn:hover {
  background: #369870;
}
@media (max-width: 700px) {
  .navbar-container {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
  }
  .navbar-menu {
    gap: 1rem;
  }
  .login-btn {
    margin-left: 0;
    margin-top: 0.7rem;
    width: 100%;
    text-align: center;
  }
}
</style>
