import * as SplashScreen from 'expo-splash-screen';
import { create } from 'zustand';

import { migrate } from './database/migrate';

type AppState = {
  isReady: boolean;
  init: () => Promise<void>;
};

export const useApp = create<AppState>(set => ({
  isReady: false,
  async init() {
    try {
      await migrate();
    } catch (error) {
      console.error('Failed to migrate database', error);
    } finally {
      await SplashScreen.hideAsync();
      set({ isReady: true });
    }
  },
}));
