import { create } from 'zustand';

let toastTimeout = null;

export const useToastStore = create((set) => ({
  message: '',
  isVisible: false,
  showToast: (message) => {
    if (toastTimeout) clearTimeout(toastTimeout);
    set({ message, isVisible: true });
    toastTimeout = setTimeout(() => {
      set({ isVisible: false });
    }, 3000);
  },
  hideToast: () => {
    if (toastTimeout) clearTimeout(toastTimeout);
    set({ isVisible: false });
  },
}));

