import { cx } from "classix";
import React from "react";

interface CommonProps {
  label?: string;
  className?: string | boolean | null | undefined;
  key?: string;
}

export type CheckboxProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const Checkbox = ({
  key,
  label,
  className,
  ...props
}: CheckboxProps): JSX.Element => (
  <label
    key={key}
    className={cx("flex cursor-pointer items-center gap-3", className)}
  >
    <input
      type="checkbox"
      className="h-4 w-4 rounded-lg checked:bg-primary"
      {...props}
    />
    {label && <p className="text-gray-50">{label}</p>}
  </label>
);

export default Checkbox;
