<template>
  <div class="courses">
    <h2>Daftar Kursus Populer</h2>
    <p class="desc">
      Pilih kursus yang sesuai minatmu dan mulai belajar bersama instruktur terbaik!
    </p>
    <ul>
      <li v-for="course in courses" :key="course.title" class="course-card">
        <span class="course-icon">📘</span>
        <div class="course-info">
          <h4>{{ course.title }}</h4>
          <p>{{ course.desc }}</p>
          <router-link :to="`/courses/${course.id}`" class="detail-btn">Detail</router-link>
          <button class="enroll-btn" @click="enroll(course.title)">Daftar</button>
        </div>
      </li>
    </ul>
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
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
.desc {
  color: #555;
  margin-bottom: 1.5rem;
}
.courses ul {
  padding-left: 0;
  list-style: none;
}
.course-card {
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
.course-card:hover {
  background: #e0e7ff;
  box-shadow: 0 4px 24px rgba(66, 185, 131, 0.1);
}
.course-icon {
  font-size: 2.2rem;
  margin-top: 0.3rem;
}
.course-info {
  text-align: left;
}
.course-info h4 {
  margin: 0 0 0.3rem 0;
  color: #2c3e50;
}
.course-info p {
  margin: 0 0 0.7rem 0;
  color: #666;
  font-size: 0.98rem;
}
.detail-btn {
  margin-right: 0.7rem;
  color: #42b983;
  text-decoration: underline;
  font-size: 0.98rem;
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
</style>
