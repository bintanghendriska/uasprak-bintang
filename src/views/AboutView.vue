<template>
  <div class="about">
    <div class="about-card">
      <h2>Tentang E-Learning</h2>
      <p class="desc">
        E-Learning adalah platform pembelajaran online yang bertujuan membantu siapa saja untuk
        belajar secara fleksibel, efektif, dan menyenangkan.
      </p>
      <div class="about-section">
        <h3>Visi</h3>
        <p>Menjadi platform pembelajaran online terbaik di Indonesia.</p>
        <h3>Misi</h3>
        <ul>
          <li>Menyediakan akses pendidikan berkualitas untuk semua.</li>
          <li>Mendukung pengembangan skill masa depan.</li>
          <li>Menghubungkan peserta dengan instruktur profesional.</li>
        </ul>
        <h3>Tim Kami</h3>
        <p>
          Kami terdiri dari pengembang, instruktur, dan praktisi pendidikan yang berkomitmen
          menghadirkan pengalaman belajar terbaik untuk Anda.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about {
  max-width: 700px;
  margin: 2rem auto;
  text-align: center;
}
.about-card {
  background: #f8fafc;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  display: inline-block;
  width: 100%;
}
.desc {
  color: #555;
  margin-bottom: 1.5rem;
}
.about-section {
  margin-top: 2rem;
  text-align: left;
}
.about-section h3 {
  margin-bottom: 0.3rem;
  color: #42b983;
}
.about-section ul {
  margin: 0 0 1.2rem 1.2rem;
  padding: 0;
}
</style>
