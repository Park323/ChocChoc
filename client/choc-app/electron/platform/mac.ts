import { systemPreferences, app } from "electron";
import type { PlatformBehavior } from "./types.js";

export class MacPlatform implements PlatformBehavior {
  async requestPermissions(): Promise<void> {
    try {
      await systemPreferences.askForMediaAccess("camera");
    } catch (e) {
      console.error(e);
    }
  }

  getWindowOptions(): Electron.BrowserWindowConstructorOptions {
    return {
      width: 640,
      height: 900,
      frame: false,
      transparent: true,
      opacity: 0.95,
      hasShadow: false,
      thickFrame: false,
      resizable: true,
      movable: true,
      alwaysOnTop: true,
      skipTaskbar: true,
      fullscreenable: false,
      minimizable: false,
      maximizable: false,
    };
  }

  getInitialTrayImage(): string {
    return "eye-open.png";
  }

  setupPlatformSpecific(): void {
    // Mac 특화 설정 (예: Dock 숨기기)
    if (app.dock) {
      app.dock.hide();
    }
  }
}
