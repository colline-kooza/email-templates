// store/useAuthStore.ts
import { create } from 'zustand';

type AuthStep = 'email' | 'password' | 'signup' | 'verify';

interface AuthState {
  isLoading: boolean;
  authStep: AuthStep;
  email: string;
  name: string;
  password: string;
  verificationToken: string;
  error: string | null;
  
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setVerificationToken: (token: string) => void;
  setAuthStep: (step: AuthStep) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  authStep: 'email',
  email: '',
  name: '',
  password: '',
  verificationToken: '',
  error: null,
  
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
  setPassword: (password) => set({ password }),
  setVerificationToken: (token) => set({ verificationToken: token }),
  setAuthStep: (step) => set({ authStep: step }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set({
    authStep: 'email',
    email: '',
    name: '',
    password: '',
    verificationToken: '',
    error: null
  })
}));