// import { useCallback } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  carers: [],
  fetchCarers: async () => {
    try {
      const response = await fetch('/carers.json', {
        method: "GET",
        headers: {
           "Content-Type": "application/json",
        }
      });
      if (!response.ok) throw response;
      const data = await response.json();
      
      set((state) => ({ carers: [...state.carers, ...data.carers] }));
    } catch (e) {
      console.error("from, state", e);
    }
  }
}));

export default useStore;