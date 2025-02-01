import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userCredential) => {
    // Simpan data user ke localStorage
    localStorage.setItem("userCredential", JSON.stringify(userCredential));

    // Perbarui state
    set({ user: userCredential, isAuthenticated: true });
  },

  logout: () => {
    // Hapus data user dari localStorage
    localStorage.removeItem("userCredential");

    // Perbarui state
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: () => {
    // Ambil data user dari localStorage
    const userCredential = localStorage.getItem("userCredential");

    if (userCredential) {
      const userData = JSON.parse(userCredential);
      set({ user: userData, isAuthenticated: true });
    } else {
      set({ user: null, isAuthenticated: false });
    }
  },
}));