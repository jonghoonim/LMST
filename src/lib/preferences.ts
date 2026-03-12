// Cross-device preferences storage & sync
// Uses localStorage for persistence + base64 sync codes for cross-device transfer

export interface UserPreferences {
  skipIntro: boolean;
  recentLogs: string[]; // recently viewed project IDs
  deviceLabel: string; // user-set device name e.g. "DESKTOP_01", "MOBILE_01"
  lastSync: number; // timestamp of last sync
}

const STORAGE_KEY = "lmst_prefs_v1";
const MAX_RECENT_LOGS = 10;

export const DEFAULT_PREFERENCES: UserPreferences = {
  skipIntro: false,
  recentLogs: [],
  deviceLabel: "",
  lastSync: 0,
};

function detectDeviceType(): string {
  if (typeof window === "undefined") return "UNKNOWN";
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return "MOBILE";
  return "DESKTOP";
}

export function getDefaultDeviceLabel(): string {
  const type = detectDeviceType();
  return `${type}_${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export function loadPreferences(): UserPreferences {
  if (typeof window === "undefined") return { ...DEFAULT_PREFERENCES };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(prefs: UserPreferences): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // storage full or blocked
  }
}

export function addRecentLog(prefs: UserPreferences, logId: string): UserPreferences {
  const filtered = prefs.recentLogs.filter((id) => id !== logId);
  const recentLogs = [logId, ...filtered].slice(0, MAX_RECENT_LOGS);
  return { ...prefs, recentLogs };
}

// Encode preferences to a shareable sync code
export function exportSyncCode(prefs: UserPreferences): string {
  const payload = {
    ...prefs,
    lastSync: Date.now(),
  };
  const json = JSON.stringify(payload);
  return btoa(unescape(encodeURIComponent(json)));
}

// Decode a sync code back to preferences
export function importSyncCode(code: string): UserPreferences | null {
  try {
    const json = decodeURIComponent(escape(atob(code.trim())));
    const parsed = JSON.parse(json);
    return { ...DEFAULT_PREFERENCES, ...parsed };
  } catch {
    return null;
  }
}
