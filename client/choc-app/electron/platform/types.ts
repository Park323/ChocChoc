import type { BrowserWindowConstructorOptions } from "electron";

/**
 * 플랫폼별 애플리케이션 동작을 정의하는 인터페이스입니다.
 * 각 운영체제에서 필요한 권한 요청, 윈도우 옵션, 추가 초기화 작업 등을
 * 이 인터페이스를 구현하여 처리할 수 있습니다.
 */
export interface PlatformBehavior {
  /**
   * 플랫폼에서 앱이 정상적으로 동작하기 위해 필요한 권한을 요청합니다.
   * 애플리케이션 시작 시 한 번 호출되어야 합니다.
   */
  requestPermissions(): Promise<void>;

  /**
   * 플랫폼에 맞는 메인 윈도우 옵션을 반환합니다.
   * BrowserWindow 생성 시 사용됩니다.
   */
  getWindowOptions(): BrowserWindowConstructorOptions;

  /**
   * 플랫폼 특화 추가 초기화 작업을 수행합니다.
   * 특별한 초기화가 필요한 경우에만 구현하며,
   * 필요 없다면 생략할 수 있습니다.
   */
  setupPlatformSpecific?(): void;
}
