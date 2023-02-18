import SearchFilter from "./SearchFilter";
import SearchResultList from "./SearchResultList";

const SeachResult = (): JSX.Element => {
  return (
    <section className="mt-8">
      <div className="flex w-full items-center justify-between py-3">
        <>
          <h2 className="text-2xl font-bold text-gray-50">612 Results</h2>
          {/* Loading Result Count */}
          {/* <div className="h-6 w-32 animate-pulse rounded-full bg-zinc-700" /> */}
        </>
        <SearchFilter />
      </div>
      <hr className="h-[1px] border-none bg-dimBlackLighten" />
      <SearchResultList />
    </section>
  );
};

export default SeachResult;
