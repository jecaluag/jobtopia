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
      className="group my-5 flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl"
    >
      <div
        className={`flex-1 overflow-hidden px-10 py-6 text-white`}
        style={{ backgroundColor: result.bgColor ?? "#1c1c1c" }}
      >
        <div className="flex gap-4">
          <div className="h-14 w-14 rounded-lg bg-dimBlack p-3">
            <Image
              alt="company-lgoo"
              src={result.company.logo}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex h-full w-full items-center">
            <div
              className={cx(
                "flex flex-1 flex-col justify-between",
                isBgDark ? "text-white" : "text-dimBlack"
              )}
            >
              <h3 className="text-xl font-semibold">{result.jobTitle}</h3>
              <p className="text-lg">{result.company.name}</p>
            </div>
            <div className="hidden gap-2 group-hover:flex">
              <button
                className={cx(
                  "rounded-md px-6 py-2 font-bold hover:ring-2 active:ring-4",
                  isBgDark
                    ? "bg-white text-dimBlack ring-zinc-400 hover:bg-gray-50"
                    : "bg-dimBlack text-white ring-zinc-500 hover:bg-dimBlackLighten"
                )}
              >
                Apply
              </button>
              <button
                className={cx(
                  "flex items-center gap-1 rounded-md border px-6 py-2 font-bold hover:opacity-75",
                  isBgDark
                    ? "border-white text-white"
                    : "border-dimBlack text-dimBlack"
                )}
              >
                <span>View Job</span>
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
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6667 2.83334L3.33335 12.1667"
                    stroke={isBgDark ? "white" : "#2B2B2B"}
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6667 9.68V2.83334H5.82002"
                    stroke={isBgDark ? "white" : "#2B2B2B"}
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap">
          {result.isFeatured && (
            <Badge
              className={cx(isBgDark ? "text-white" : "text-dimBlack")}
              style={{
                backgroundColor: tagBgColor,
                border: `2px solid ${tagBorderColor}`,
              }}
            >
              <div className="flex w-full items-center gap-3 px-2 text-sm font-semibold">
                <span>Featured</span>
              </div>
            </Badge>
          )}
          <Badge
            className={cx(isBgDark ? "text-white" : "text-dimBlack")}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
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
            className={cx(isBgDark ? "text-white" : "text-dimBlack")}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
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
            className={cx(isBgDark ? "text-white" : "text-dimBlack")}
            style={{
              backgroundColor: tagBgColor,
              border: `1px solid ${tagBorderColor}`,
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

        <div className="mt-4">
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

      <div className="bg-white py-4 px-10 text-dimBlack">
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
              <h4 className="text-lg font-bold">₱ {result.salary}/mo</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
