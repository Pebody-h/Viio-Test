import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  products: [],
  updateProducts: (newProducts) => set({ products: newProducts }),
}))
