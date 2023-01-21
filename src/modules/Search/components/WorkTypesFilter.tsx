import { useState } from "react";

import { DropdownLarge } from "src/common/Dropdown";
import { WORK_TYPES } from "../constants";
import { Checkbox } from "src/common";
import { referenceSorting } from "src/utils";
import useGetButtonTitle from "../hooks/useGetButtonTitle";

const WorkTypesFilter = (): JSX.Element => {
  const [selectedWorkTypes, setSelectedWorkTypes] =
    useState<string[]>(WORK_TYPES);

  const buttonTitle = useGetButtonTitle(
    selectedWorkTypes,
    WORK_TYPES.length,
    "Work Type"
  );

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
