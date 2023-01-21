import SearchFilter from "./SearchFilter";
import SearchInput from "./SearchInput";

const Search = () => (
  <div className="flex flex-col px-12">
    {/* Search Query and Category Section */}
    <SearchInput />
    <SearchFilter />
  </div>
);

export default Search;
