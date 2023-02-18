import { useRef, useState } from "react";
import { useOnClickOutside } from "src/hooks";
import type { Item } from "./types";

export default function useDropdown(
  customOnClick?: () => void,
  customOnClickItem?: (item: Item) => void
) {
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const isEmmitingRef = useRef<boolean>(false);

  const onButtonClick = () => {
    if (isEmmitingRef.current) return;
    setIsOpen((prev) => !prev);
    customOnClick && customOnClick();
  };

  const onClickItem = (item: Item) => {
    customOnClickItem && customOnClickItem(item);
    setIsOpen(false);
  };

  useOnClickOutside(panelRef, () => {
    isEmmitingRef.current = true;
    setIsOpen(false);
    setTimeout(() => {
      isEmmitingRef.current = false;
    }, 100);
  });

  return {
    isOpen,
    onButtonClick,
    onClickItem,
    panelRef,
  };
}
