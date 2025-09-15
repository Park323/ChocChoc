import { MacPlatform } from "./mac.js";
import { WindowsPlatform } from "./windows.js";
import type { PlatformBehavior } from "./types.js";

export function createPlatform(): PlatformBehavior {
  switch (process.platform) {
    case "darwin":
      return new MacPlatform();
    case "win32":
      return new WindowsPlatform();
    default:
      throw new Error(`Unsupported platform: ${process.platform}`);
  }
}
