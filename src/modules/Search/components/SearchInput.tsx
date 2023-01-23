import { useRef, useState } from "react";
import { cx } from "classix";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";

import { sleep } from "src/utils";
import SearchSuggestion from "./SearchSuggestion";
import { useBreakpoint } from "src/hooks";
import { SEARCH_INPUT_PLACEHOLDER } from "../constants";

const SearchInput = () => {
  const isSmOrLarger = useBreakpoint("sm");
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputSectionRef = useRef<HTMLDivElement | null>(null);

  const handleBlurInput = async (): Promise<void> => {
    await sleep(100);
    setIsFocused(false);
  };

  return (
    <>
      <div className="w-full rounded-lg border-0 border-grey bg-greyDark">
        <div className="flex items-center">
          {/* Search Input */}
          <div
            ref={inputSectionRef}
            className={cx(
              "relative h-full w-full whitespace-nowrap",
              isSmOrLarger &&
                "after:absolute after:top-[5px] after:right-0 after:h-[80%] after:w-[1px] after:bg-dimBlackLighten after:content-['']"
            )}
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
                <div className="smLh-11 flex h-10 w-10 shrink-0 items-center pl-2.5 pr-2  sm:w-11 sm:pl-3 sm:pr-2">
                  <MagnifyingGlassIcon className="text-secondary" />
                </div>
                <div className="relative h-full w-full">
                  <input
                    ref={inputRef}
                    type="text"
                    className="h-10 w-full rounded-lg bg-greyDark bg-none pl-0 text-gray-50 outline-none placeholder:truncate placeholder:text-zinc-400 sm:h-12  sm:pl-3 "
                    placeholder={SEARCH_INPUT_PLACEHOLDER}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => void handleBlurInput()}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                </div>
                {query.length > 0 ? (
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center text-slate-400 hover:text-dimBlackLighten"
                    onClick={() => setQuery("")}
                  >
                    <XMarkIcon className="px-2.5" />
                  </button>
                ) : (
                  <div className="w-6" />
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
          <div className="hidden h-full w-1/2 whitespace-nowrap sm:block">
            <div className="h-full w-full">
              <select
                name="categories"
                className="select-default w-full cursor-pointer appearance-none bg-greyDark pl-4 text-gray-50 outline-none"
              >
                <option>All Categories</option>
                <option>Software Development</option>
                <option>Product</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {!isSmOrLarger && (
        <div className="mt-3 w-full rounded-lg border-0 border-grey bg-greyDark">
          <select
            name="categories"
            className="mobile w-full cursor-pointer appearance-none rounded-lg bg-greyDark py-3 pl-4 text-gray-50 outline-none"
          >
            <option>All Categories</option>
            <option>Software Development</option>
            <option>Product</option>
          </select>
        </div>
      )}
    </>
  );
};

export default SearchInput;
