import { Theme } from "@shared/dist";

export const createSettingsComposable = () => {
  return ({ store }: { store: SettingsStore }) => {
    const initializeSettings = () => {};

    const resolveThemeName = (theme: Theme): string => {
      if (theme === Theme.Auto) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
      }

      return Theme[theme].toLowerCase();
    };

    initializeSettings();

    return {
      resolveThemeName,
    };
  };
};

export const useSettingsComposable = createSettingsComposable();
