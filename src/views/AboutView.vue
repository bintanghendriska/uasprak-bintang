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
        <h3>Guru Besar</h3>
        <div class="guru-list">
          <div class="guru-card" v-for="guru in gurus" :key="guru.name">
            <img :src="guru.img" :alt="guru.name" class="guru-img" />
            <div class="guru-info">
              <h4>{{ guru.name }}</h4>
              <p class="guru-field">{{ guru.field }}</p>
              <p class="guru-desc">{{ guru.desc }}</p>
            </div>
          </div>
        </div>
        <h3>Tim Kami</h3>
        <p>
          Kami terdiri dari pengembang, instruktur, dan praktisi pendidikan yang berkomitmen
          menghadirkan pengalaman belajar terbaik untuk Anda.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import guru1 from "@/assets/guru/guru1.webp";
import guru2 from "@/assets/guru/guru2.jpeg";
import guru3 from "@/assets/guru/guru3.jpeg";

const gurus = [
  {
    img: guru1,
    name: "Dr. Andi Wijaya",
    field: "Web Development",
    desc: "Pakar pengembangan web dengan pengalaman lebih dari 15 tahun di industri teknologi.",
  },
  {
    img: guru2,
    name: "Prof. Siti Rahmawati",
    field: "UI/UX & Desain",
    desc: "Dosen dan praktisi desain UI/UX, aktif membimbing startup dan komunitas kreatif.",
  },
  {
    img: guru3,
    name: "Dr. Budi Santoso",
    field: "Data Science",
    desc: "Ahli data science dan machine learning, penulis buku best seller analisis data.",
  },
];
</script>

<style scoped>
.about {
  max-width: 900px;
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
.guru-list {
  display: flex;
  gap: 2rem;
  margin: 2rem 0 2.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
}
.guru-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.07);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  width: 220px;
  text-align: center;
  transition: transform 0.18s, box-shadow 0.18s;
}
.guru-card:hover {
  transform: translateY(-7px) scale(1.04);
  box-shadow: 0 8px 32px rgba(66, 185, 131, 0.13);
}
.guru-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #42b983;
  background: #e0e7ff;
}
.guru-info h4 {
  margin: 0.2rem 0 0.2rem 0;
  color: #2c3e50;
}
.guru-field {
  color: #42b983;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.guru-desc {
  color: #555;
  font-size: 0.98rem;
}
</style>
