<template>
  <div class="courses">
    <div class="courses-header">
      <h2>Daftar Kursus Populer</h2>
      <p class="desc">
        Pilih kursus yang sesuai minatmu dan mulai belajar bersama instruktur terbaik!
      </p>
    </div>
    <div class="course-grid">
      <div v-for="course in courses" :key="course.title" class="course-card">
        <div class="course-icon">📘</div>
        <div class="course-info">
          <h4>{{ course.title }}</h4>
          <p>{{ course.desc }}</p>
          <div class="course-actions">
            <router-link :to="`/courses/${course.id}`" class="detail-btn">Detail</router-link>
            <button class="enroll-btn" @click="enroll(course.title)">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const courses = [
  { id: 1, title: "Web Development Dasar", desc: "Belajar HTML, CSS, dan JavaScript dari nol." },
  {
    id: 2,
    title: "Desain UI/UX",
    desc: "Pelajari prinsip desain antarmuka dan pengalaman pengguna.",
  },
  { id: 3, title: "Data Science Pemula", desc: "Dasar-dasar analisis data dan visualisasi." },
  {
    id: 4,
    title: "Bahasa Inggris Profesional",
    desc: "Tingkatkan kemampuan bahasa Inggris untuk dunia kerja.",
  },
  { id: 5, title: "Manajemen Proyek", desc: "Teknik dan tools manajemen proyek modern." },
];

function enroll(course) {
  alert(`Anda mendaftar ke kursus: ${course}`);
}
</script>

<style scoped>
.courses {
  max-width: 950px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.courses-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.courses-header h2 {
  color: #42b983;
  margin-bottom: 0.7rem;
}
.desc {
  color: #555;
  margin-bottom: 1.5rem;
}
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.course-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  cursor: pointer;
}
.course-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 8px 32px rgba(66, 185, 131, 0.13);
}
.course-icon {
  font-size: 2.5rem;
  margin-bottom: 1.1rem;
  color: #42b983;
}
.course-info {
  text-align: center;
  width: 100%;
}
.course-info h4 {
  margin: 0 0 0.3rem 0;
  color: #2c3e50;
  font-size: 1.18rem;
}
.course-info p {
  margin: 0 0 1.1rem 0;
  color: #666;
  font-size: 1.01rem;
}
.course-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.detail-btn {
  background: #fff;
  color: #42b983;
  border: 1.5px solid #42b983;
  border-radius: 6px;
  padding: 0.4rem 1.1rem;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.detail-btn:hover {
  background: #42b983;
  color: #fff;
}
.enroll-btn {
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
.enroll-btn:hover {
  background: #369870;
}
@media (max-width: 600px) {
  .course-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}
</style>
