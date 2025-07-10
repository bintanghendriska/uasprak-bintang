<template>
  <div class="home-view">
    <div class="home-hero">
      <h1>Selamat Datang di <span class="brand">E-Learning</span>!</h1>
      <p class="desc">
        Platform pembelajaran online interaktif yang membantu kamu meningkatkan pengetahuan dan
        skill di era digital.
      </p>
      <router-link to="/courses" class="cta-btn">Mulai Belajar</router-link>
    </div>
    <div class="home-features">
      <h2>Mengapa Memilih Kami?</h2>
      <ul>
        <li><b>Materi Berkualitas:</b> Disusun oleh instruktur berpengalaman.</li>
        <li><b>Belajar Fleksibel:</b> Akses kursus kapan saja, di mana saja.</li>
        <li><b>Sertifikat Resmi:</b> Dapatkan sertifikat setelah menyelesaikan kursus.</li>
        <li><b>Komunitas Aktif:</b> Diskusi dan networking dengan peserta lain.</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home-view {
  max-width: 700px;
  margin: 2rem auto;
  text-align: center;
}
.home-hero {
  background: #f8fafc;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  margin-bottom: 2rem;
}
.brand {
  color: #42b983;
}
.desc {
  margin: 1rem 0 2rem 0;
  color: #555;
  font-size: 1.15rem;
}
.cta-btn {
  display: inline-block;
  background: #42b983;
  color: #fff;
  padding: 0.8rem 2.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #369870;
}
.home-features {
  margin-top: 2.5rem;
  text-align: left;
}
.home-features h2 {
  color: #42b983;
  margin-bottom: 1rem;
  text-align: center;
}
.home-features ul {
  list-style: disc inside;
  color: #333;
  font-size: 1.08rem;
  margin: 0 auto;
  max-width: 500px;
}
.home-features li {
  margin-bottom: 0.7rem;
}
</style>
