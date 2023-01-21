import { useMemo, useState } from "react";

import { DropdownLarge } from "src/common/Dropdown";
import { WORK_TYPES } from "../constants";
import { Checkbox } from "src/common";
import { referenceSorting } from "src/utils";

const WorkTypesFilter = (): JSX.Element => {
  const [selectedWorkTypes, setSelectedWorkTypes] =
    useState<string[]>(WORK_TYPES);

  const buttonTitle = useMemo(() => {
    if (selectedWorkTypes.length === 0) {
      return "No Work Type";
    }
    if (selectedWorkTypes.length === WORK_TYPES.length) {
      return "Work Type";
    }
    if (selectedWorkTypes.length === 1) {
      return `${selectedWorkTypes[0] || ""}`;
    }

    const [first = "", ...rest] = selectedWorkTypes;

    return `${first} + ${rest.length} more`;
  }, [selectedWorkTypes]);

  const handleWorkTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedWorkTypes.includes(value)) {
      setSelectedWorkTypes((prev) =>
        referenceSorting(
          prev.filter((workType) => workType !== value),
          WORK_TYPES
        )
      );

      return;
    }

    setSelectedWorkTypes((prev) =>
      referenceSorting([...prev, value], WORK_TYPES)
    );
  };

  return (
    <DropdownLarge
      buttonTitle={buttonTitle}
      onPanelButtonClick={() => setSelectedWorkTypes(WORK_TYPES)}
      panelTitle="Work Type"
      panelButtonTitle="Select All"
    >
      <div className="w-full">
        {WORK_TYPES.map((workType, index) => (
          <Checkbox
            key={workType}
            className={index !== WORK_TYPES.length - 1 && "mb-3"}
            label={workType}
            value={workType}
            checked={selectedWorkTypes.includes(workType)}
            onChange={handleWorkTypeChange}
          />
        ))}
      </div>
    </DropdownLarge>
  );
};

export default WorkTypesFilter;
