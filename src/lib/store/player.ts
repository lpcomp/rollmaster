import { create } from 'zustand';

type PlayerState = {
    currentPlayerName: string;
    updatePlayerName: (newPlayer: string) => void;
}

export const usePlayer = create<PlayerState>((set) => ({
    currentPlayerName: '',
    updatePlayerName: (newPlayer) => set({ currentPlayerName: newPlayer })
}));