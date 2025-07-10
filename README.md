# uasprak

## Deskripsi Project

**uasprak** adalah aplikasi E-Learning berbasis web yang dibangun menggunakan Vue 3 dan Vite. Aplikasi ini menyediakan fitur daftar kursus, detail kursus, produk, profil pengguna, serta sistem autentikasi login/logout. Project ini juga mendukung penggunaan mock REST API menggunakan `json-server` dengan file `db.json` untuk simulasi data backend selama pengembangan.

## Fitur Utama

- Autentikasi login/logout sederhana
- Navigasi dengan Navbar dinamis (Login/Logout)
- Daftar kursus dan detail kursus
- Halaman produk
- Halaman profil pengguna
- Halaman about
- Routing dinamis dengan Vue Router
- Layout utama dengan header, konten, dan footer
- Konsumsi data dari mock API (`db.json` via json-server)

## Teknologi yang Digunakan

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [json-server](https://github.com/typicode/json-server) (mock REST API)
- [Axios](https://axios-http.com/) (HTTP client)

## Cara Menjalankan Project Secara Lokal

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Jalankan development server:**
   ```sh
   npm run dev
   ```
3. **Akses aplikasi di browser:**
   Buka [http://localhost:5173](http://localhost:5173)

## Menggunakan Mock API dengan db.json

1. **Install json-server (sekali saja):**
   ```sh
   npm install -D json-server
   ```
2. **Jalankan json-server:**
   ```sh
   npx json-server --watch db.json --port 3000
   ```
3. **Akses endpoint API:**
   - Contoh: `http://localhost:3000/products`, `http://localhost:3000/users`, dll (sesuai isi db.json)

## Cara Deploy ke Vercel

1. Pastikan semua dependencies (termasuk axios) sudah diinstall dan di-commit ke repo.
2. Push project ke GitHub.
3. Hubungkan repo ke [Vercel](https://vercel.com/) dan deploy.
4. Untuk API berbasis db.json, gunakan solusi backend terpisah (karena Vercel hanya untuk frontend static). Untuk demo lokal, gunakan json-server.

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
