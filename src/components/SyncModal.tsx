"use client";

import { useState } from "react";
import { usePreferences } from "./PreferencesProvider";
import { exportSyncCode, importSyncCode } from "@/lib/preferences";

interface SyncModalProps {
  onClose: () => void;
}

export function SyncModal({ onClose }: SyncModalProps) {
  const { prefs, updatePrefs } = usePreferences();
  const [mode, setMode] = useState<"menu" | "export" | "import" | "settings">("menu");
  const [importCode, setImportCode] = useState("");
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const syncCode = exportSyncCode(prefs);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(syncCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select the text
    }
  };

  const handleImport = () => {
    const imported = importSyncCode(importCode);
    if (imported) {
      // Keep current device label, merge the rest
      updatePrefs({
        ...imported,
        deviceLabel: prefs.deviceLabel,
        lastSync: Date.now(),
      });
      setImportStatus("success");
    } else {
      setImportStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#F4F4F4] border border-black w-[90vw] max-w-md font-mono text-xs sm:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-black px-3 py-2 bg-black text-white">
          <span className="uppercase tracking-wider">SYNC_PREFERENCES</span>
          <button onClick={onClose} className="hover:opacity-50 text-sm">
            [X]
          </button>
        </div>

        <div className="p-4 space-y-3">
          {/* Device info */}
          <div className="text-black/50">
            &gt; DEVICE: {prefs.deviceLabel}
            <br />
            &gt; STORED_PREFS: {prefs.recentLogs.length} RECENT_LOGS
            <br />
            &gt; SKIP_INTRO: {prefs.skipIntro ? "TRUE" : "FALSE"}
            {prefs.lastSync > 0 && (
              <>
                <br />
                &gt; LAST_SYNC: {new Date(prefs.lastSync).toLocaleString()}
              </>
            )}
          </div>

          {mode === "menu" && (
            <div className="space-y-2 pt-2">
              <button
                onClick={() => setMode("export")}
                className="block w-full text-left px-3 py-2 border border-black/20 hover:bg-[#00FF00] hover:text-black transition-colors"
              >
                &gt; EXPORT — 이 기기의 설정을 내보내기
              </button>
              <button
                onClick={() => setMode("import")}
                className="block w-full text-left px-3 py-2 border border-black/20 hover:bg-[#00FF00] hover:text-black transition-colors"
              >
                &gt; IMPORT — 다른 기기의 설정 불러오기
              </button>
              <button
                onClick={() => setMode("settings")}
                className="block w-full text-left px-3 py-2 border border-black/20 hover:bg-[#00FF00] hover:text-black transition-colors"
              >
                &gt; SETTINGS — 환경설정
              </button>
            </div>
          )}

          {mode === "export" && (
            <div className="space-y-3 pt-2">
              <div className="text-black/60">
                &gt; 아래 코드를 다른 기기에서 붙여넣으세요
              </div>
              <div className="bg-white border border-black/20 p-3 break-all text-[10px] sm:text-xs max-h-24 overflow-y-auto select-all">
                {syncCode}
              </div>
              <button
                onClick={handleCopy}
                className="w-full px-3 py-2 border border-black hover:bg-[#00FF00] transition-colors"
              >
                {copied ? "COPIED!" : "COPY_TO_CLIPBOARD"}
              </button>
              <button
                onClick={() => setMode("menu")}
                className="text-black/40 hover:text-black"
              >
                &lt; BACK
              </button>
            </div>
          )}

          {mode === "import" && (
            <div className="space-y-3 pt-2">
              <div className="text-black/60">
                &gt; 다른 기기에서 내보낸 코드를 붙여넣으세요
              </div>
              <textarea
                value={importCode}
                onChange={(e) => {
                  setImportCode(e.target.value);
                  setImportStatus("idle");
                }}
                placeholder="PASTE_SYNC_CODE_HERE..."
                className="w-full bg-white border border-black/20 p-3 text-[10px] sm:text-xs h-20 resize-none font-mono focus:outline-none focus:border-black"
              />
              {importStatus === "success" && (
                <div className="text-green-600 font-bold">
                  &gt; SYNC_COMPLETE — 설정이 동기화되었습니다
                </div>
              )}
              {importStatus === "error" && (
                <div className="text-red-600 font-bold">
                  &gt; SYNC_ERROR — 유효하지 않은 코드입니다
                </div>
              )}
              <button
                onClick={handleImport}
                disabled={!importCode.trim()}
                className="w-full px-3 py-2 border border-black hover:bg-[#00FF00] transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
              >
                IMPORT_PREFERENCES
              </button>
              <button
                onClick={() => setMode("menu")}
                className="text-black/40 hover:text-black"
              >
                &lt; BACK
              </button>
            </div>
          )}

          {mode === "settings" && (
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-3 px-3 py-2 border border-black/20 hover:bg-black/5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.skipIntro}
                  onChange={(e) => updatePrefs({ skipIntro: e.target.checked })}
                  className="accent-black"
                />
                <span>SKIP_BOOT_SEQUENCE (인트로 건너뛰기)</span>
              </label>
              <div className="px-3 py-2 border border-black/20">
                <div className="text-black/50 mb-1">DEVICE_LABEL:</div>
                <input
                  type="text"
                  value={prefs.deviceLabel}
                  onChange={(e) =>
                    updatePrefs({
                      deviceLabel: e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, "_"),
                    })
                  }
                  maxLength={20}
                  className="w-full bg-white border border-black/20 px-2 py-1 font-mono text-xs focus:outline-none focus:border-black uppercase"
                />
              </div>
              {prefs.recentLogs.length > 0 && (
                <div className="px-3 py-2 border border-black/20">
                  <div className="text-black/50 mb-1">RECENT_LOGS:</div>
                  <div className="text-[10px] text-black/60">
                    {prefs.recentLogs.join(" → ")}
                  </div>
                </div>
              )}
              <button
                onClick={() => setMode("menu")}
                className="text-black/40 hover:text-black"
              >
                &lt; BACK
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
