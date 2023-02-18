import { SAMPLE_RESULTS } from "../constants";
import ResultsLoading from "./ResultsLoading";
import SearchResultItem from "./SearchResultItem";

const SearchResultList = () => {
  return (
    <div role="list" className="mt-8">
      {SAMPLE_RESULTS.map((result) => (
        <SearchResultItem key={result.id} result={result} />
      ))}
      <ResultsLoading count={5} />
    </div>
  );
};

export default SearchResultList;
