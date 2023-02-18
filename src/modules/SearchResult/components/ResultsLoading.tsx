import { SKELETON_ITEM_NO } from "../constants";

export interface ResultsLoadingProps {
  count?: number;
}

const ResultsLoading = ({ count = SKELETON_ITEM_NO }: ResultsLoadingProps) => (
  <>
    {Array(count)
      .fill(count)
      .map((_, index) => (
        <div
          key={index}
          className="my-5 h-56 w-full animate-pulse rounded-2xl bg-dimBlack"
        ></div>
      ))}
  </>
);

export default ResultsLoading;
