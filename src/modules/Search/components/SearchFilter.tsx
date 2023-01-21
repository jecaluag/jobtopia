import SalaryFilter from "./SalaryFilter";
import WorkTypesFilter from "./WorkTypesFilter";
import YearsOfExpFilter from "./YearsOfExpFilter";

const SearchFilter = () => {
  return (
    <div className="flex w-full items-center justify-between">
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
  );
};

export default SearchFilter;
