// import { useCallback } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  carers: [],
  times: [],
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
  },
  fetchTimes: async () => {
    try {
      const response = await fetch('/availableSlots.json', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) throw response;
      const data = await response.json();

      set((state) => ({ times: [...state.times, ...data.UTCAvailableSlots] }));
    } catch (e) {
      console.error("from fetch times", e);
    }
  }
}));

export default useStore;