<template>
  <div class="about">
    <section class="about-hero">
      <div class="about-hero-content">
        <div class="about-hero-icon">🌐</div>
        <h1>Tentang <span class="brand">E-Learning</span></h1>
        <p class="about-hero-tagline">
          Belajar tanpa batas, bersama para ahli terbaik di bidangnya.
        </p>
      </div>
    </section>
    <div class="about-card fade-in">
      <section class="visi-misi">
        <div class="visi-misi-icon">🌟</div>
        <div>
          <h3><span class="icon">🎯</span> Visi</h3>
          <p>Menjadi platform pembelajaran online terbaik di Indonesia.</p>
          <h3><span class="icon">🚀</span> Misi</h3>
          <div class="misi-list">
            <div class="misi-card"><span>📚</span> Akses pendidikan berkualitas untuk semua.</div>
            <div class="misi-card"><span>💡</span> Mendukung pengembangan skill masa depan.</div>
            <div class="misi-card">
              <span>🤝</span> Menghubungkan peserta dengan instruktur profesional.
            </div>
          </div>
        </div>
      </section>
      <div class="divider"></div>
      <h3 class="guru-title">Guru Besar</h3>
      <div class="guru-list">
        <div class="guru-card fade-in" v-for="guru in gurus" :key="guru.name">
          <div class="guru-badge">Guru Besar</div>
          <div class="guru-img-wrap">
            <img :src="guru.img" :alt="guru.name" class="guru-img" />
          </div>
          <div class="guru-info">
            <h4>{{ guru.name }}</h4>
            <p class="guru-field">{{ guru.field }}</p>
            <p class="guru-desc">{{ guru.desc }}</p>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <section class="team-section fade-in">
        <div class="team-icon">👨‍💻</div>
        <h3>Tim Kami</h3>
        <p>
          Kami terdiri dari pengembang, instruktur, dan praktisi pendidikan yang berkomitmen
          menghadirkan pengalaman belajar terbaik untuk Anda.
        </p>
      </section>
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
  max-width: 1000px;
  margin: 2.5rem auto;
  padding: 0 1rem 2rem 1rem;
}
.about-hero {
  background: linear-gradient(120deg, #42b983 0%, #e0e7ff 100%);
  border-radius: 22px 22px 0 0;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.1);
  margin-bottom: 2.5rem;
  text-align: center;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  color: #fff;
  position: relative;
}
.about-hero-icon {
  font-size: 3.2rem;
  margin-bottom: 0.7rem;
  filter: drop-shadow(0 2px 8px #42b98333);
}
.about-hero-tagline {
  color: #e0e7ff;
  font-size: 1.18rem;
  margin-top: 0.7rem;
}
.about-title {
  color: #42b983;
  font-size: 2.1rem;
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
}
.brand {
  color: #1e90ff;
}
.about-card {
  background: #f8fafc;
  border-radius: 0 0 22px 22px;
  box-shadow: 0 4px 32px rgba(44, 62, 80, 0.08);
  padding: 2.7rem 2rem 2.5rem 2rem;
  width: 100%;
  display: inline-block;
  animation: fadeIn 0.7s;
}
.visi-misi {
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.06);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
  justify-content: center;
  position: relative;
}
.visi-misi-icon {
  font-size: 2.5rem;
  margin-top: 0.2rem;
  color: #42b983;
}
.visi-misi h3 {
  color: #42b983;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.icon {
  font-size: 1.2rem;
}
.misi-list {
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.misi-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
  padding: 0.8rem 1.1rem;
  color: #2c3e50;
  font-size: 1.01rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 180px;
  border-left: 4px solid #42b983;
  transition: box-shadow 0.18s;
}
.misi-card:hover {
  box-shadow: 0 6px 18px rgba(66, 185, 131, 0.13);
}
.divider {
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #42b983 0%, #1e90ff 100%);
  border-radius: 2px;
  margin: 2.5rem 0 2.2rem 0;
  opacity: 0.18;
}
.guru-title {
  color: #1e90ff;
  margin: 2.5rem 0 1.2rem 0;
  font-size: 1.3rem;
  letter-spacing: 1px;
}
.guru-list {
  display: flex;
  gap: 2.2rem;
  margin: 0 0 2.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
}
.guru-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.09);
  padding: 1.7rem 1.2rem 1.2rem 1.2rem;
  width: 230px;
  text-align: center;
  transition: transform 0.18s, box-shadow 0.18s;
  cursor: pointer;
  border: 2px solid #e0e7ff;
  position: relative;
  animation: fadeIn 1s;
}
.guru-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 10px 36px rgba(66, 185, 131, 0.15);
  border-color: #42b983;
}
.guru-badge {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #42b983 0%, #1e90ff 100%);
  color: #fff;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.3rem 1.1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px #42b98322;
  letter-spacing: 1px;
}
.guru-img-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
  border-radius: 50%;
  padding: 7px;
  box-shadow: 0 2px 8px #42b98322;
}
.guru-img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b983;
  background: #e0e7ff;
}
.guru-info h4 {
  margin: 0.2rem 0 0.2rem 0;
  color: #1e90ff;
  font-size: 1.13rem;
  font-weight: 700;
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
.team-section {
  margin-top: 2.5rem;
  background: #e0e7ff;
  border-radius: 12px;
  padding: 1.3rem 1rem 1.1rem 1rem;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.06);
  text-align: center;
}
.team-icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #42b983;
}
.fade-in {
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 700px) {
  .about-card {
    padding: 1.2rem 0.3rem 1.2rem 0.3rem;
  }
  .about-hero {
    padding: 1.2rem 0.3rem 1.2rem 0.3rem;
  }
  .visi-misi {
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
  .guru-list {
    gap: 1rem;
  }
  .guru-card {
    width: 100%;
    min-width: 0;
  }
}
</style>
