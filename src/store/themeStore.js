import { create } from 'zustand';

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem('theme-preference');
  const isDarkMode = savedTheme !== null ? JSON.parse(savedTheme) : false;

  // Set the initial theme class on HTML element
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return {
    isDarkMode,
    toggleTheme: () => set((state) => {
      const newTheme = !state.isDarkMode;
      localStorage.setItem('theme-preference', JSON.stringify(newTheme));
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { isDarkMode: newTheme };
    }),
  };
});
