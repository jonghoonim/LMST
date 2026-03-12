"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  type UserPreferences,
  DEFAULT_PREFERENCES,
  loadPreferences,
  savePreferences,
  addRecentLog,
  getDefaultDeviceLabel,
} from "@/lib/preferences";

interface PreferencesContextValue {
  prefs: UserPreferences;
  updatePrefs: (partial: Partial<UserPreferences>) => void;
  trackLog: (logId: string) => void;
  isLoaded: boolean;
}

const PreferencesContext = createContext<PreferencesContextValue>({
  prefs: DEFAULT_PREFERENCES,
  updatePrefs: () => {},
  trackLog: () => {},
  isLoaded: false,
});

export function usePreferences() {
  return useContext(PreferencesContext);
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = loadPreferences();
    // Auto-assign device label if empty
    if (!loaded.deviceLabel) {
      loaded.deviceLabel = getDefaultDeviceLabel();
    }
    setPrefs(loaded);
    savePreferences(loaded);
    setIsLoaded(true);
  }, []);

  const updatePrefs = useCallback(
    (partial: Partial<UserPreferences>) => {
      setPrefs((prev) => {
        const next = { ...prev, ...partial };
        savePreferences(next);
        return next;
      });
    },
    []
  );

  const trackLog = useCallback(
    (logId: string) => {
      setPrefs((prev) => {
        const next = addRecentLog(prev, logId);
        savePreferences(next);
        return next;
      });
    },
    []
  );

  return (
    <PreferencesContext.Provider value={{ prefs, updatePrefs, trackLog, isLoaded }}>
      {children}
    </PreferencesContext.Provider>
  );
}
