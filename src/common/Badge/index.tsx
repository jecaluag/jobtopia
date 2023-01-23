import { XMarkIcon } from "@heroicons/react/24/solid";
import { cx } from "classix";

import type { ClassixClassName } from "src/types/common";

export interface BadgeProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: ClassixClassName;
}

const Badge = ({
  children,
  className = "bg-primaryLighten100 text-primary hover:text-primaryLighten",
  onClose,
}: BadgeProps): JSX.Element => {
  return (
    <div className={cx("mr-3 w-max rounded-full px-3 py-1", className)}>
      <div className="flex items-center">
        <span>{children}</span>
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
