/**
 * Kadex Debug Utility
 * Used to provide clear diagnostic logs in development mode.
 */

export function debugLog(scope: string, data: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`%c[Kadex:${scope}]`, "color: #e11d2e; font-weight: bold;", data);
  }
}

export function debugError(scope: string, error: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.error(`%c[Kadex:ERROR:${scope}]`, "background: #e11d2e; color: white; font-weight: bold; padding: 2px 4px; border-radius: 2px;", error);
  }
}
