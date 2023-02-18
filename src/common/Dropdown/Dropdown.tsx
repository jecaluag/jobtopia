import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cx } from "classix";
import { AnimatePresence, motion } from "framer-motion";

import type { Item, MaxHeightProps } from "./types";
import useDropdown from "./useDropdown";

interface CommonProps {
  buttonTitle: string;
  items: Item[];
  selectedId?: string;
  onClick?: () => void;
  onClickItem?: (item: Item) => void;
}

export type DropdownProps = CommonProps & MaxHeightProps;

const Dropdown = ({
  buttonTitle,
  items,
  hasMaxHeight = false,
  maxHeight = "max-h-60",
  onClick: customOnClick,
  onClickItem: customClickItem,
  selectedId,
}: DropdownProps): JSX.Element => {
  const { isOpen, onButtonClick, onClickItem, panelRef } = useDropdown(
    customOnClick,
    customClickItem
  );

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
            className="r-0 absolute top-[50px] w-52 rounded-md bg-dimBlack text-gray-50"
          >
            <ul
              className={cx("overflow-y-auto p-3", hasMaxHeight && maxHeight)}
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  role="button"
                  onClick={() => onClickItem(item)}
                  className={cx(
                    "rounded px-2 py-2 hover:bg-dimBlackLighten",
                    selectedId === item.id &&
                      "bg-dimBlackLighten hover:brightness-125"
                  )}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
