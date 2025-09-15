import { app } from "electron";
import type { PlatformBehavior } from "./types.js";

export class WindowsPlatform implements PlatformBehavior {
  async requestPermissions(): Promise<void> {
    // Windows는 별도의 카메라 권한 요청이 필요 없음
    return Promise.resolve();
  }

  getWindowOptions(): Electron.BrowserWindowConstructorOptions {
    return {
      width: 640,
      height: 900,
      frame: false,
      transparent: true,
      opacity: 0.95,
      hasShadow: false,
      thickFrame: true, // Windows에서는 true로 설정
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
    // Windows 특화 설정
    app.setAppUserModelId(process.execPath); // Windows 알림 용 앱 ID 설정

    // 시스템 트레이 동작 최적화
    if (process.platform === "win32") {
      app.setLoginItemSettings({
        openAtLogin: true,
        path: process.execPath,
        // args: ["--hidden"], // 시작 시 숨김 상태로
      });
    }
  }
}
