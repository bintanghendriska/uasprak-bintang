<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-icon">🎓</div>
        <h1>Selamat Datang di <span class="brand">E-Learning</span>!</h1>
        <p class="desc">
          Platform pembelajaran online interaktif yang membantu kamu meningkatkan pengetahuan dan
          skill di era digital.
        </p>
        <router-link to="/courses" class="cta-btn">Mulai Belajar</router-link>
      </div>
    </section>
    <section class="features">
      <h2>Mengapa Memilih Kami?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h3>Materi Berkualitas</h3>
          <p>Disusun oleh instruktur berpengalaman dan praktisi industri.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⏰</div>
          <h3>Belajar Fleksibel</h3>
          <p>Akses kursus kapan saja, di mana saja, sesuai waktu kamu.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎓</div>
          <h3>Sertifikat Resmi</h3>
          <p>Dapatkan sertifikat setelah menyelesaikan kursus pilihanmu.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤝</div>
          <h3>Komunitas Aktif</h3>
          <p>Diskusi, networking, dan belajar bersama peserta lain.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.home-view {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  padding-bottom: 2rem;
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  background: linear-gradient(120deg, #42b983 0%, #e0e7ff 100%);
  border-radius: 0 0 32px 32px;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.07);
  margin-bottom: 2.5rem;
}
.hero-content {
  text-align: center;
  padding: 3rem 1.5rem 2.5rem 1.5rem;
  color: #fff;
}
.hero-icon {
  font-size: 4rem;
  margin-bottom: 1.2rem;
  filter: drop-shadow(0 2px 8px #42b98333);
}
.brand {
  color: #fff700;
  text-shadow: 0 2px 8px #42b98333;
}
.desc {
  margin: 1.2rem 0 2rem 0;
  color: #f8fafc;
  font-size: 1.18rem;
}
.cta-btn {
  display: inline-block;
  background: #fff;
  color: #42b983;
  padding: 0.9rem 2.4rem;
  border-radius: 10px;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.1);
  transition: background 0.2s, color 0.2s;
}
.cta-btn:hover {
  background: #42b983;
  color: #fff;
}
.features {
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
}
.features h2 {
  color: #42b983;
  margin-bottom: 2rem;
  text-align: center;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  text-align: center;
  transition: transform 0.18s, box-shadow 0.18s;
  cursor: pointer;
}
.feature-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 8px 32px rgba(66, 185, 131, 0.13);
}
.feature-icon {
  font-size: 2.3rem;
  margin-bottom: 0.7rem;
  color: #42b983;
}
@media (max-width: 600px) {
  .hero-content {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
  }
  .features {
    padding: 0 0.2rem;
  }
}
</style>
