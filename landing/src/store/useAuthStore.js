import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  mode: 'signIn', // 'signIn' | 'signUp'
  isLoading: false,
  selectedTrack: 'fin',
  user: null,

  setMode: (mode) => set({ mode }),
  setSelectedTrack: (track) => set({ selectedTrack: track }),

  signIn: async (email, password) => {
    set({ isLoading: true });
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      isLoading: false,
      user: { email, name: email.split('@')[0] },
    });
    return true;
  },

  signUp: async (name, email, password, track) => {
    set({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      isLoading: false,
      user: { name, email, track },
    });
    return true;
  },

  signOut: () => set({ user: null }),
}));

