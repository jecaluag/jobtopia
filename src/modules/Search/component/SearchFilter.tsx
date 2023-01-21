import SalaryFilter from "./SalaryFilter";
import WorkTypesFilter from "./WorkTypesFilter";

const SearchFilter = () => {
  return (
    <div className="flex w-full items-center">
      <div className="mt-2 flex gap-2">
        <WorkTypesFilter />
        <SalaryFilter />
      </div>
    </div>
  );
};

export default SearchFilter;
