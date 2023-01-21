import create from "@kodingdotninja/use-tailwind-breakpoint";
import { useLayoutEffect } from "react";

import screens from "tailwind.screens";

// eslint-disable-next-line
const { useBreakpoint: _useBreakPoint } = create(screens);

export const useBreakpoint = (
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"
) => {
  const isBreakpointOrLarger = _useBreakPoint(breakpoint);

  // Workaround for a bug with the use-tailwind-breakpoint library.
  useLayoutEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return isBreakpointOrLarger;
};

export default useBreakpoint;
