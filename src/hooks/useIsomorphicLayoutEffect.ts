import { useEffect, useLayoutEffect } from "react";
import { isBrowser } from "src/utils";

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
