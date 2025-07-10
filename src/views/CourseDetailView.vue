<template>
  <div class="course-detail">
    <div v-if="!course">Kursus tidak ditemukan.</div>
    <div v-else>
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <h2>Modules</h2>
      <ul>
        <li v-for="module in course.modules" :key="module.id">
          <h3>{{ module.title }}</h3>
          <p>{{ module.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const course = ref(null);

// Data dummy kursus
const dummyCourses = [
  {
    id: "1",
    title: "Web Development Dasar",
    description: "Belajar HTML, CSS, dan JavaScript dari nol.",
    modules: [
      { id: 1, title: "Pengenalan Web", content: "Dasar-dasar web dan internet." },
      { id: 2, title: "HTML & CSS", content: "Belajar struktur dan style halaman web." },
      { id: 3, title: "JavaScript Dasar", content: "Interaktivitas pada web." },
    ],
  },
  {
    id: "2",
    title: "Desain UI/UX",
    description: "Pelajari prinsip desain antarmuka dan pengalaman pengguna.",
    modules: [
      { id: 1, title: "Dasar UI", content: "Elemen visual dan layout." },
      { id: 2, title: "Dasar UX", content: "Pengalaman pengguna dan usability." },
    ],
  },
  {
    id: "3",
    title: "Data Science Pemula",
    description: "Dasar-dasar analisis data dan visualisasi.",
    modules: [
      { id: 1, title: "Pengenalan Data", content: "Jenis data dan sumber data." },
      { id: 2, title: "Visualisasi Data", content: "Membuat grafik dan chart." },
    ],
  },
  {
    id: "4",
    title: "Bahasa Inggris Profesional",
    description: "Tingkatkan kemampuan bahasa Inggris untuk dunia kerja.",
    modules: [
      { id: 1, title: "Speaking", content: "Latihan berbicara." },
      { id: 2, title: "Writing", content: "Latihan menulis." },
    ],
  },
  {
    id: "5",
    title: "Manajemen Proyek",
    description: "Teknik dan tools manajemen proyek modern.",
    modules: [
      { id: 1, title: "Dasar Manajemen", content: "Konsep dan peran manajer." },
      { id: 2, title: "Tools Proyek", content: "Penggunaan tools digital." },
    ],
  },
];

onMounted(() => {
  course.value = dummyCourses.find((c) => c.id === route.params.id);
});
</script>

<style scoped>
.course-detail ul {
  list-style-type: none;
  padding: 0;
}

.course-detail li {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
</style>
