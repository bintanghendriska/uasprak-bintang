<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const emit = defineEmits(["login-success"]);

const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const route = useRoute();

function onLogin() {
  if (username.value === "demo" && password.value === "demo") {
    error.value = "";
    localStorage.setItem("isLoggedIn", "true");
    emit("login-success");
    // Redirect ke halaman home ("/")
    router.replace("/");
  } else {
    error.value = "Username atau password salah.";
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-brand">
      <span class="login-logo">🔐</span>
      <h1>E-Learning</h1>
      <p class="login-sub">Selamat datang! Silakan login untuk melanjutkan.</p>
    </div>
    <form class="login-form" @submit.prevent="onLogin">
      <div>
        <label for="username">Username</label>
        <input id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="login-error">{{ error }}</p>
      <p class="login-demo">Demo: user <b>demo</b> | pass <b>demo</b></p>
    </form>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0e7ff 0%, #42b983 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}
.login-brand {
  text-align: center;
  margin-bottom: 2.5rem;
}
.login-logo {
  font-size: 3.5rem;
  display: block;
  margin-bottom: 0.5rem;
}
.login-brand h1 {
  color: #fff;
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}
.login-sub {
  color: #e0e7ff;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}
.login-form {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.1);
  padding: 2.2rem 2rem 1.5rem 2rem;
  min-width: 320px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.login-form label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 500;
  color: #2c3e50;
}
.login-form input {
  width: 100%;
  padding: 0.7rem;
  border: 1.5px solid #ccc;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  background: #f8fafc;
  transition: border 0.2s;
}
.login-form input:focus {
  border: 1.5px solid #42b983;
  outline: none;
}
.login-form button {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.9rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background 0.2s;
}
.login-form button:hover {
  background: #369870;
}
.login-error {
  color: #e74c3c;
  margin-bottom: 0.7rem;
  text-align: center;
}
.login-demo {
  color: #888;
  font-size: 0.98rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>
