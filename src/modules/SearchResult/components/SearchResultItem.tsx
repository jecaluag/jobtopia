import Image from "next/image";
import { BriefcaseIcon, ClockIcon, TagIcon } from "@heroicons/react/24/outline";
import { cx } from "classix";

import { Badge } from "src/common";
import { getSeachItemColor } from "src/utils";
import type { SearchResult } from "../types";

export interface SearchResultItemProps {
  result: SearchResult;
}

const SearchResultItem = ({ result }: SearchResultItemProps) => {
  const { tagBgColor, tagBorderColor, isBgDark } = getSeachItemColor(
    result.bgColor ?? ""
  );

  return (
    <div
      key={result.id}
      role="listitem"
      className={cx(
        "group my-5 flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl hover:brightness-110",
        result.isFeatured
          ? "background-animate bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500"
          : "bg-white"
      )}
    >
      <div
        className={`flex-1 overflow-hidden rounded-2xl px-6 py-6 text-white sm:px-10`}
        style={{
          backgroundColor: result.bgColor ?? "#1c1c1c",
          width: "calc(100% - 6px)",
          height: "calc(100% - 6px)",
          margin: 3,
        }}
      >
        <div className="flex gap-3 sm:gap-4">
          <div className="flex h-14 w-14 min-w-[3.5rem] items-center justify-center rounded-lg bg-dimBlack p-3">
            <Image
              alt="company-lgoo"
              src={result.company.logo}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div
            className="flex h-full items-center"
            style={{
              width: "calc(100% - 4.2rem)",
            }}
          >
            <div
              className={cx(
                "flex flex-col justify-between overflow-hidden",
                isBgDark ? "text-white" : "text-dimBlack"
              )}
            >
              <h3 className="truncate text-lg font-semibold sm:text-xl">
                {result.jobTitle}
              </h3>
              <p className="text-base sm:text-lg">{result.company.name}</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="hidden gap-2 group-hover:flex">
              <button
                className={cx(
                  "h-12 rounded-md px-6 py-2 font-bold hover:ring-2 active:ring-4",
                  isBgDark
                    ? "bg-white text-dimBlack ring-zinc-400 hover:bg-gray-50"
                    : "bg-dimBlack text-white ring-zinc-500 hover:bg-dimBlackLighten"
                )}
              >
                Apply
              </button>
              <button
                className={cx(
                  "flex h-12 items-center gap-1 rounded-md border px-6 py-2 font-bold hover:opacity-75",
                  isBgDark
                    ? "border-white text-white"
                    : "border-dimBlack text-dimBlack"
                )}
              >
                <span className="whitespace-nowrap">View Job</span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6667 15.1667H2.33335"
                    stroke={isBgDark ? "white" : "#2B2B2B"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 2.83334L3.33335 12.1667"
                    stroke={isBgDark ? "white" : "#2B2B2B"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 9.68V2.83334H5.82002"
                    stroke={isBgDark ? "white" : "#2B2B2B"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-nowrap overflow-x-auto pb-3">
          {result.isFeatured && (
            <Badge
              className={cx(
                "mr-1 text-sm sm:mr-3",
                isBgDark ? "text-white" : "text-dimBlack"
              )}
              style={{
                backgroundColor: tagBgColor,
                border: `2px solid ${tagBorderColor}`,
                flex: "0 0 auto",
              }}
            >
              <div className="flex w-full items-center gap-3 px-2 text-sm font-semibold">
                <span>Featured</span>
              </div>
            </Badge>
          )}
          <Badge
            className={cx(
              "mr-1 text-sm sm:mr-3",
              isBgDark ? "text-white" : "text-dimBlack"
            )}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
              flex: "0 0 auto",
            }}
          >
            <div className="flex w-full items-center gap-2 px-2 text-sm">
              <ClockIcon
                className={cx(
                  "h-[18px] w-[18px]",
                  isBgDark ? "text-white" : "text-dimBlack"
                )}
              />
              <span>{result.jobType}</span>
            </div>
          </Badge>
          <Badge
            className={cx(
              "mr-1 text-sm sm:mr-3",
              isBgDark ? "text-white" : "text-dimBlack"
            )}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
              flex: "0 0 auto",
            }}
          >
            <div className="flex w-full items-center gap-2 px-2 text-sm">
              <BriefcaseIcon
                className={cx(
                  "h-5 w-5",
                  isBgDark ? "text-white" : "text-dimBlack"
                )}
              />
              <span>{result.experienceLevel}</span>
            </div>
          </Badge>
          <Badge
            className={cx(
              "mr-1 text-sm sm:mr-3",
              isBgDark ? "text-white" : "text-dimBlack"
            )}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
              flex: "0 0 auto",
            }}
          >
            <div className="flex w-full items-center gap-2 px-2 text-sm">
              <TagIcon
                className={cx(
                  "h-5 w-5",
                  isBgDark ? "text-white" : "text-dimBlack"
                )}
              />
              <span>{result.category}</span>
            </div>
          </Badge>
        </div>

        <div className="mt-2 sm:mt-3">
          <p
            className={cx(
              "text-base",
              isBgDark ? "text-white" : "text-dimBlack"
            )}
          >
            {" "}
            {result.shortDescription}{" "}
            {/* <span className="underline">Read More</span> */}
          </p>
        </div>
      </div>

      <div className="mt-[1px] rounded-b-2xl bg-white py-4 px-6 text-dimBlack sm:px-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-dimBlack"
            >
              <title>history</title>
              <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
            </svg>
            <span>Posted 2 days ago</span>
          </div>
          <div>
            {result.salary && (
              <h4 className="text-base font-bold sm:text-lg">
                ₱ {result.salary}/mo
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
