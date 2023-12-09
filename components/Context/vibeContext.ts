import React from 'react';

interface VibeContextType {
  vibe: string | null;
  setVibe: React.Dispatch<React.SetStateAction<string | null>>;
}

export const VibeContext = React.createContext<VibeContextType | undefined>(undefined);
