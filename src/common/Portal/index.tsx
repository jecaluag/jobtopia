import type { ReactNode } from "react";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classix";

export interface PortalProps {
  children: ReactNode;
  isBackdropBlurred?: boolean;
  isBackdropDimmed?: boolean;
  useDirectChildren?: boolean;
}

const Portal = ({
  children,
  isBackdropBlurred = true,
  isBackdropDimmed = true,
  useDirectChildren = false,
}: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        !useDirectChildren ? (
          <div
            className={cx(
              "fixed top-0 left-0 z-50 block h-full w-full overflow-auto pt-[100px]",
              isBackdropBlurred && "backdrop-blur",
              isBackdropDimmed && "bg-[rgba(0,0,0,0.4)]"
            )}
          >
            {children}
          </div>
        ) : (
          children
        ),
        ref.current
      )
    : null;
};

export default Portal;
