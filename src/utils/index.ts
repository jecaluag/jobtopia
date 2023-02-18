import Color from "color";
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

export const getSeachItemColor = (color: string | null) => {
  if (!color) {
    return { tagBgColor: "#2B2B2B", tagBorderColor: "#adadad", isBgDark: true };
  }

  const isBgDark = Color(color).isDark();
  const tagBgColor = isBgDark
    ? Color(color).lighten(0.25).hexa()
    : Color(color).darken(0.25).hexa();
  const tagBorderColor = isBgDark
    ? Color(color).lighten(0.5).hexa()
    : Color(color).darken(0.5).hexa();

  return {
    tagBgColor,
    tagBorderColor,
    isBgDark,
  };
};
