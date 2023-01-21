import { useMemo, useState } from "react";
import RangeSlider from "react-range-slider-input";

import { DropdownLarge } from "src/common/Dropdown";
import { formatToCurrency } from "src/utils";
import { DEFAULT_RANGE_SLIDER_STEP, SALARY_RANGE } from "../constants";
import { Checkbox } from "src/common";

const [MIN_SALARY, MAX_SALARY] = SALARY_RANGE;

const SalaryFilter = () => {
  const [salary, setSalary] = useState<number[]>(SALARY_RANGE);
  const [finalSalary, setFinalSalary] = useState<number[]>(SALARY_RANGE);
  const [includeNoSpecified, setIncludeNoSpecified] = useState<boolean>(true);

  const handleSetIncludeNoSpecified = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    setIncludeNoSpecified(checked);
  };

  const handleClear = () => {
    setSalary(SALARY_RANGE);
    setFinalSalary(SALARY_RANGE);
    setIncludeNoSpecified(true);
  };

  const buttonTitle = useMemo(() => {
    const currentMinSalary = finalSalary[0];
    const currentMaxSalary = finalSalary[1];
    if (currentMinSalary === MIN_SALARY && currentMaxSalary === MAX_SALARY) {
      return "Salary";
    }

    return `${formatToCurrency(
      currentMinSalary,
      "compact"
    )} - ${formatToCurrency(currentMaxSalary, "compact")}`;
  }, [finalSalary]);

  return (
    <DropdownLarge
      buttonTitle={buttonTitle}
      panelTitle="Salary per month"
      onPanelButtonClick={handleClear}
    >
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
            onRangeDragEnd={() => setFinalSalary(salary)}
            onThumbDragEnd={() => setFinalSalary(salary)}
          />
        </div>
        <div className="mt-8">
          <Checkbox
            label="Include no salary specified jobs"
            checked={includeNoSpecified}
            onChange={handleSetIncludeNoSpecified}
          />
        </div>
      </div>
    </DropdownLarge>
  );
};

export default SalaryFilter;
