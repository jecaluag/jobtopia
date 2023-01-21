import { FunnelIcon } from "@heroicons/react/24/outline";
import { useBreakpoint } from "src/hooks";

import SalaryFilter from "./SalaryFilter";
import WorkTypesFilter from "./WorkTypesFilter";
import YearsOfExpFilter from "./YearsOfExpFilter";

const SearchFilter = () => {
  const isSmOrLarger = useBreakpoint("sm");

  return (
    <>
      <div className="mt-1 hidden w-full items-center justify-between sm:flex">
        <div className="mt-2 flex gap-2">
          <WorkTypesFilter />
          <SalaryFilter />
          <YearsOfExpFilter />
        </div>
        <button
          type="button"
          className="font-medium text-secondary hover:text-secondaryLighten100"
        >
          Clear
        </button>
      </div>
      {!isSmOrLarger && (
        <button
          type="button"
          className="mt-3 flex items-center justify-center gap-3 rounded-lg bg-dimBlack py-2.5 text-gray-50 ring-zinc-500 ring-zinc-500 hover:bg-dimBlackLighten focus:ring-2 focus:ring-2"
        >
          <FunnelIcon className="h-4 w-4 text-gray-50" />
          <span>More Filters</span>
        </button>
      )}
    </>
  );
};

export default SearchFilter;
