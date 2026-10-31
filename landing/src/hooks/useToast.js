import { useToastStore } from '../store/useToastStore';

export function useToast() {
  const message = useToastStore((state) => state.message);
  const isVisible = useToastStore((state) => state.isVisible);
  const showToast = useToastStore((state) => state.showToast);
  const hideToast = useToastStore((state) => state.hideToast);

  return { message, isVisible, showToast, hideToast };
}

