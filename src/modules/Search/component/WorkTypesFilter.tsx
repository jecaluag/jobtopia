import { useState } from "react";

import { DropdownLarge } from "src/common/Dropdown";
import { WORK_TYPES } from "../constants";
import { Checkbox } from "src/common";

const WorkTypesFilter = (): JSX.Element => {
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);

  const handleWorkTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedWorkTypes.includes(value)) {
      setSelectedWorkTypes((prev) =>
        prev.filter((workType) => workType !== value)
      );

      return;
    }

    setSelectedWorkTypes((prev) => [...prev, value]);
  };

  return (
    <DropdownLarge
      buttonTitle="Work Type"
      onClear={() => setSelectedWorkTypes([])}
      panelTitle="Work Types"
    >
      <div className="w-full">
        {WORK_TYPES.map((workType, index) => (
          <Checkbox
            key={workType}
            className={index !== WORK_TYPES.length - 1 && "mb-3"}
            label={workType}
            value={workType}
            defaultChecked={selectedWorkTypes.includes(workType)}
            onChange={handleWorkTypeChange}
          />
        ))}
      </div>
    </DropdownLarge>
  );
};

export default WorkTypesFilter;
