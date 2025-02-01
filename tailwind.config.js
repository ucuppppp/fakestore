module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#213547',  // Menambahkan warna kustom
        },
      },
    },
    plugins: [],
    darkMode: 'class',  // Menggunakan preferensi tema pengguna (light/dark)
  }
  