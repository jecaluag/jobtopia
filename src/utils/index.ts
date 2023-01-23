import type { Notation } from "./types";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor = 20
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}

export function formatToCurrency(
  value?: number,
  notation: Notation = "standard"
): string {
  if (value == null) return "₱0.00";

  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: notation,
  }).format(value);
}

export function referenceSorting<T>(array: T[], ref: T[]): T[] {
  return array.sort((a, b) => ref.indexOf(a) - ref.indexOf(b));
}

export const isBrowser = typeof window !== "undefined";
