import { useRef, useState } from "react";
import { cx } from "classix";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";

import { sleep } from "src/utils";
import SearchSuggestion from "./SearchSuggestion";

const SearchInput = () => {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputSectionRef = useRef<HTMLDivElement | null>(null);

  const handleBlurInput = async (): Promise<void> => {
    await sleep(100);
    setIsFocused(false);
  };

  return (
    <div className="mt-10 w-full rounded-lg border-0 border-grey bg-greyDark">
      <div className="flex items-center">
        {/* Search Input */}
        <div
          ref={inputSectionRef}
          className="relative h-full w-full whitespace-nowrap after:absolute after:top-[5px] after:right-0 after:h-[80%] after:w-[1px] after:bg-dimBlackLighten after:content-['']"
        >
          <div
            className="m-0 p-0 text-left text-base leading-[1em] text-black"
            aria-expanded="true"
            aria-haspopup="listbox"
          >
            <form
              className={cx(
                "relative m-0 flex w-full items-center rounded-lg leading-[1em] ring-zinc-500",
                isFocused && "ring-2"
              )}
            >
              <div className="flex h-11 w-11 shrink-0 items-center pl-3 pr-2">
                <MagnifyingGlassIcon className="text-secondary" />
              </div>
              <div className="relative h-full w-full">
                <input
                  ref={inputRef}
                  type="text"
                  className="h-10 w-full rounded-lg bg-greyDark bg-none pl-3 text-gray-50 outline-none  placeholder:text-zinc-400 "
                  placeholder="Search Remote Jobs..."
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => void handleBlurInput()}
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
              </div>
              {query.length > 0 && (
                <button
                  type="button"
                  className="flex h-11 w-11 items-center text-slate-400 hover:text-dimBlackLighten"
                  onClick={() => setQuery("")}
                >
                  <XMarkIcon className="px-2.5" />
                </button>
              )}
            </form>
          </div>
          <AnimatePresence initial={false}>
            {isFocused && (
              <SearchSuggestion inputSectionRef={inputSectionRef} />
            )}
          </AnimatePresence>
        </div>
        {/* Categories */}
        <div className="h-full w-1/2 whitespace-nowrap">
          <div className="h-full w-full">
            <select
              name="categories"
              className="w-full cursor-pointer appearance-none bg-greyDark pl-4 text-gray-50 outline-none"
            >
              <option>All Categories</option>
              <option>Software Development</option>
              <option>Product</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
