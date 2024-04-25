import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: {},
  updateUser: (newUser) => set({ user: newUser }),
  deleteUser: () => set({ user: {} }),
}))