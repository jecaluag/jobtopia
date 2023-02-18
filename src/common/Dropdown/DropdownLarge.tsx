import { cx } from "classix";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

import useDropdown from "./useDropdown";
import type { MaxHeightProps } from "./types";

interface CommonProps {
  buttonTitle: string;
  panelTitle?: string;
  panelButtonTitle?: string;
  children: React.ReactNode | React.ReactNode[];
  onPanelButtonClick: () => void;
  onClick?: () => void;
}

export type DropdownLargeProps = CommonProps & MaxHeightProps;

const DropdownLarge = ({
  buttonTitle,
  panelTitle,
  children,
  panelButtonTitle = "Clear",
  hasMaxHeight = false,
  maxHeight = "max-h-60",
  onPanelButtonClick,
  onClick: customOnClick,
}: DropdownLargeProps): JSX.Element => {
  const { isOpen, onButtonClick, panelRef } = useDropdown(customOnClick);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center rounded-lg bg-dimBlack py-2 px-4 font-medium text-gray-50 ring-zinc-500 hover:bg-dimBlackLighten focus:ring-2"
        onClick={onButtonClick}
      >
        <span>{buttonTitle}</span>
        <ChevronDownIcon
          className={cx(
            "ml-3 h-4 w-4 text-gray-50 transition",
            isOpen && "rotate-180"
          )}
        />
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
                onClick={onPanelButtonClick}
              >
                {panelButtonTitle}
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
