import { useAuthStore } from '../store/useAuthStore';

export function useAuth() {
  const mode = useAuthStore((state) => state.mode);
  const setMode = useAuthStore((state) => state.setMode);
  const isLoading = useAuthStore((state) => state.isLoading);
  const selectedTrack = useAuthStore((state) => state.selectedTrack);
  const setSelectedTrack = useAuthStore((state) => state.setSelectedTrack);
  const user = useAuthStore((state) => state.user);
  const signIn = useAuthStore((state) => state.signIn);
  const signUp = useAuthStore((state) => state.signUp);
  const signOut = useAuthStore((state) => state.signOut);

  return {
    mode,
    setMode,
    isLoading,
    selectedTrack,
    setSelectedTrack,
    user,
    signIn,
    signUp,
    signOut,
  };
}

