import { useState } from "react";
import { Checkbox } from "src/common";
import { DropdownLarge } from "src/common/Dropdown";
import { referenceSorting } from "src/utils";
import { EXPERIENCE_LEVELS } from "../constants";
import useGetButtonTitle from "../hooks/useGetButtonTitle";

const YearsOfExpFilter = () => {
  const [selectedExpLevels, setSelectedExpLevels] =
    useState<string[]>(EXPERIENCE_LEVELS);

  const buttonTitle = useGetButtonTitle(
    selectedExpLevels,
    EXPERIENCE_LEVELS.length,
    "Experience Level"
  );

  const handleExpLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedExpLevels.includes(value)) {
      setSelectedExpLevels((prev) =>
        referenceSorting(
          prev.filter((expLevel) => expLevel !== value),
          EXPERIENCE_LEVELS
        )
      );

      return;
    }

    setSelectedExpLevels((prev) =>
      referenceSorting([...prev, value], EXPERIENCE_LEVELS)
    );
  };

  return (
    <DropdownLarge
      buttonTitle={buttonTitle}
      panelTitle="Experience Level"
      panelButtonTitle="Select All"
      onPanelButtonClick={() => setSelectedExpLevels(EXPERIENCE_LEVELS)}
    >
      <div className="w-full">
        {EXPERIENCE_LEVELS.map((expLevel, index) => (
          <Checkbox
            key={expLevel}
            className={index !== EXPERIENCE_LEVELS.length - 1 && "mb-3"}
            label={expLevel}
            value={expLevel}
            checked={selectedExpLevels.includes(expLevel)}
            onChange={handleExpLevelChange}
          />
        ))}
      </div>
    </DropdownLarge>
  );
};

export default YearsOfExpFilter;
