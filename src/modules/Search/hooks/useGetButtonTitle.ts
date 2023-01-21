import { useMemo } from "react";

export default function useGetButtonTitle(
  values: string[],
  defaultLength: number,
  title: string
): string {
  return useMemo(() => {
    if (values.length === 0) {
      return `No ${title}`;
    }
    if (values.length === defaultLength) {
      return title;
    }
    if (values.length === 1) {
      return `${values[0] || ""}`;
    }

    const [first = "", ...rest] = values;

    return `${first} + ${rest.length} more`;
  }, [values, defaultLength, title]);
}
