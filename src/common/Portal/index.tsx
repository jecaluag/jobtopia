import type { ReactNode } from "react";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className="fixed top-0 left-0 z-50 block h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] pt-[100px] backdrop-blur">
          {children}
        </div>,
        ref.current
      )
    : null;
};
