import SearchFilter from "./SearchFilter";
import SearchInput from "./SearchInput";
import Tags from "./Tags";

const Search = () => (
  <section className="mt-12 flex flex-col rounded-lg bg-[#1c1c1c] p-3 sm:p-4">
    {/* <h1 className="mb-5 text-3xl font-bold text-gray-50">Find Jobs</h1> */}
    <SearchInput />
    <SearchFilter />
    <Tags />
  </section>
);

export default Search;
