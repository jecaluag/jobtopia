import { cx } from "classix";
import React from "react";
import type { ClassixClassName } from "src/types/common";

interface CommonProps {
  label?: string;
  className?: ClassixClassName;
}

export type CheckboxProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "key">;

const Checkbox = ({
  label = "",
  className,
  ...props
}: CheckboxProps): JSX.Element => (
  <label
    key={`checkbox-${label}`}
    className={cx("flex cursor-pointer items-center gap-3", className)}
  >
    <input
      type="checkbox"
      className="h-4 w-4 rounded-lg checked:bg-yellow-400"
      {...props}
    />
    {label && label !== "" && <p className="text-gray-50">{label}</p>}
  </label>
);

export default Checkbox;
