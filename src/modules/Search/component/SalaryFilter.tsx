import { useState } from "react";
import RangeSlider from "react-range-slider-input";

import { DropdownLarge } from "src/common/Dropdown";
import { formatToCurrency } from "src/utils";
import { DEFAULT_RANGE_SLIDER_STEP, SALARY_RANGE } from "../constants";
import { Checkbox } from "src/common";

const [MIN_SALARY, MAX_SALARY] = SALARY_RANGE;

const SalaryFilter = () => {
  const [salary, setSalary] = useState<number[]>(SALARY_RANGE);
  const [includeNoSpecified, setIncludeNoSpecified] = useState<boolean>(true);

  const handleSetIncludeNoSpecified = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    setIncludeNoSpecified(checked);
  };

  const handleClear = () => {
    setSalary(SALARY_RANGE);
    setIncludeNoSpecified(true);
  };

  return (
    <DropdownLarge buttonTitle="Salary" onClear={handleClear}>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p>{formatToCurrency(salary[0])}</p>
          <p>{`${formatToCurrency(salary[1])}${
            salary[1] === MAX_SALARY ? "+" : ""
          }`}</p>
        </div>
        <div className="mt-8">
          <RangeSlider
            min={MIN_SALARY}
            max={MAX_SALARY}
            value={salary}
            defaultValue={MAX_SALARY}
            step={DEFAULT_RANGE_SLIDER_STEP}
            onInput={setSalary}
            onRangeDragEnd={() => console.log("onRangeDragEnd")}
            onThumbDragEnd={() => console.log("onThumbDragEnd")}
          />
        </div>
        <div className="mt-8">
          <Checkbox
            label="Include no salary specified jobs"
            defaultChecked={includeNoSpecified}
            checked={includeNoSpecified}
            onChange={handleSetIncludeNoSpecified}
          />
        </div>
      </div>
    </DropdownLarge>
  );
};

export default SalaryFilter;
