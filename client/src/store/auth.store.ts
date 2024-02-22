import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState["isAuthenticated"]) => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false
} satisfies Pick<AuthStore, keyof AuthState>;

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      ...initialState,
      setIsAuthenticated: isAuthenticated => {
        set(() => ({ isAuthenticated }));
      },
      logout: () => {
        set(() => ({ isAuthenticated: false }));
      }
    }),
    {
      name: "auth"
    }
  )
);
