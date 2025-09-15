import type { BrowserWindowConstructorOptions } from "electron";

export interface PlatformBehavior {
  requestPermissions(): Promise<void>;
  getWindowOptions(): BrowserWindowConstructorOptions;
  setupPlatformSpecific?(): void;
}
