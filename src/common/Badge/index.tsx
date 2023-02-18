import { XMarkIcon } from "@heroicons/react/24/solid";
import { cx } from "classix";

import type { ClassixClassName } from "src/types/common";

export interface BadgeProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: ClassixClassName;
  style?: React.CSSProperties;
}

const Badge = ({
  children,
  className = "bg-primaryLighten100 text-primary",
  style,
  onClose,
}: BadgeProps): JSX.Element => {
  return (
    <div
      className={cx("mr-3 flex w-max rounded-full px-3 py-1", className)}
      style={style}
    >
      <div className="flex items-center">
        {children}
        {onClose && (
          <button className="py-full flex-1 pl-2" onClick={onClose}>
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Badge;
