import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cx } from "classix";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";

interface CommonProps {
  buttonTitle: string;
  panelTitle?: string;
  children: React.ReactNode | React.ReactNode[];
  onClear: () => void;
  onClick?: () => void;
}

type MaxHeightProps =
  | {
      hasMaxHeight?: false;
      maxHeight?: never;
    }
  | {
      hasMaxHeight: true;
      maxHeight?: string;
    };

export type DropdownLargeProps = CommonProps & MaxHeightProps;

const DropdownLarge = ({
  buttonTitle,
  panelTitle,
  children,
  hasMaxHeight = false,
  maxHeight = "max-h-60",
  onClear,
  onClick,
}: DropdownLargeProps): JSX.Element => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isEmmitingRef = useRef<boolean>(false);

  const handleButtonClick = () => {
    if (isEmmitingRef.current) return;
    setIsOpen((prev) => !prev);
    onClick && onClick();
  };

  useOnClickOutside(panelRef, () => {
    isEmmitingRef.current = true;
    setIsOpen(false);
    setTimeout(() => {
      isEmmitingRef.current = false;
    }, 100);
  });

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center rounded-lg bg-dimBlack py-2 px-4 font-medium text-gray-50 ring-zinc-500 hover:bg-dimBlackLighten focus:ring-2"
        onClick={handleButtonClick}
      >
        <span>{buttonTitle}</span>
        <ChevronDownIcon className="ml-3 h-4 w-4 text-gray-50" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute top-[50px] w-80 rounded-md bg-dimBlack text-gray-50"
          >
            <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-3 text-sm">
              <span>{panelTitle || buttonTitle}</span>
              <button
                type="button"
                className="hover:underline"
                onClick={onClear}
              >
                Clear
              </button>
            </div>
            <div
              className={cx(
                "overflow-y-auto px-4 py-3",
                hasMaxHeight && maxHeight
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLarge;
