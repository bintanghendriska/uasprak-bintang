<template>
  <div class="profile-view">
    <h2>Profil Pengguna</h2>
    <div class="profile-card">
      <div class="profile-avatar">
        <img :src="user.avatar || defaultAvatar" alt="Avatar" />
      </div>
      <div v-if="!editMode">
        <p><b>Nama:</b> {{ user.name }}</p>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Role:</b> {{ user.role }}</p>
        <p><b>Tanggal Gabung:</b> {{ user.joined }}</p>
        <p><b>Bio:</b> {{ user.bio }}</p>
        <button class="edit-btn" @click="editMode = true">Edit Profil</button>
      </div>
      <form v-else @submit.prevent="saveProfile" class="profile-form">
        <div>
          <label>Nama</label>
          <input v-model="editUser.name" required />
        </div>
        <div>
          <label>Email</label>
          <input v-model="editUser.email" type="email" required />
        </div>
        <div>
          <label>Bio</label>
          <textarea v-model="editUser.bio" rows="3" />
        </div>
        <div>
          <label>Foto Profil</label>
          <input type="file" @change="onAvatarChange" accept="image/*" />
        </div>
        <button type="submit">Simpan</button>
        <button type="button" class="cancel-btn" @click="editMode = false">Batal</button>
      </form>
    </div>
    <div class="profile-info">
      <p>
        Lengkapi data profil Anda agar instruktur dan peserta lain dapat mengenal Anda lebih baik.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import profileImg from "../assets/profil.jpeg";

const defaultAvatar = profileImg;

const user = ref({
  name: "Demo User",
  email: "demo@elearning.com",
  bio: "Selamat datang di platform e-learning kami! Silakan lengkapi profil Anda untuk pengalaman belajar yang lebih baik.",
  role: "Peserta",
  joined: "2024-06-01",
  avatar: "",
});

const editMode = ref(false);
const editUser = ref({ ...user.value });

function saveProfile() {
  user.value = { ...editUser.value };
  editMode.value = false;
}

function onAvatarChange(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      editUser.value.avatar = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Reset edit form jika batal
watch(editMode, (val) => {
  if (val) {
    editUser.value = { ...user.value };
  }
});
</script>

<style scoped>
.profile-view {
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
}
.profile-card {
  background: #f8fafc;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.07);
  padding: 2rem 1.5rem;
  margin-top: 1.5rem;
  text-align: left;
}
.profile-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}
.profile-avatar img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b983;
  background: #e0e7ff;
}
.profile-card p {
  margin: 0.7rem 0;
  font-size: 1.08rem;
}
.profile-form {
  margin-top: 1rem;
}
.profile-form label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: 500;
  color: #2c3e50;
}
.profile-form input,
.profile-form textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  transition: border 0.2s;
}
.profile-form input:focus,
.profile-form textarea:focus {
  border: 1.5px solid #42b983;
  outline: none;
}
.edit-btn,
.profile-form button,
.cancel-btn {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.7rem;
  margin-bottom: 0.5rem;
  transition: background 0.2s;
}
.cancel-btn {
  background: #e74c3c;
}
.edit-btn:hover,
.profile-form button:hover {
  background: #369870;
}
.cancel-btn:hover {
  background: #c0392b;
}
.profile-info {
  margin-top: 2rem;
  color: #555;
  font-size: 1.05rem;
  text-align: center;
}
</style>
