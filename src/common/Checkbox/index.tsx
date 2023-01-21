import { cx } from "classix";
import React from "react";

interface CommonProps {
  label?: string;
  className?: string | boolean | null | undefined;
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
      className="h-4 w-4 rounded-lg checked:bg-primary"
      {...props}
    />
    {label && label !== "" && <p className="text-gray-50">{label}</p>}
  </label>
);

export default Checkbox;
