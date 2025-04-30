"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext, ReactNode, useMemo } from "react";

type UserContextType = ReturnType<typeof useUser>;

interface AppContextType {
  user: UserContextType['user'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const { user } = useUser();

  const value = useMemo(() => ({ user }), [user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
