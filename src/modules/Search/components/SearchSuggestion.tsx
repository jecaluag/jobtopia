import { BuildingOfficeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { Portal } from "../../../common";
import type { SearchSuggestionProps } from "../types";

const sampleSkills = ["React", "Software", "Developer", "Frontend", "Backend"];
const sampleCompanies = ["Google", "Facebook", "Amazon", "Microsoft", "Apple"];

const SearchSuggestion = ({
  inputSectionRef,
}: SearchSuggestionProps): JSX.Element => {
  return (
    <Portal
      useDirectChildren
      isBackdropBlurred={false}
      isBackdropDimmed={false}
    >
      <motion.div
        className="absolute z-10 h-auto rounded border border-dimBlackLighten bg-greyDark text-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        style={{
          width: inputSectionRef.current?.clientWidth,
          top: (inputSectionRef.current?.offsetTop || 0) + 52,
          left: inputSectionRef.current?.offsetLeft || 0,
        }}
      >
        <div className="overflow-y-auto overflow-x-hidden py-2">
          <section className="relative m-0 w-full px-2 pb-2">
            <div className="my-2 flex items-center gap-2">
              <Cog6ToothIcon className="h-4 w-4" />
              <strong>Skills</strong>
            </div>
            <ul className="w-full">
              {sampleSkills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-pointer rounded py-2 px-1 text-sm hover:bg-primaryLighten100 hover:text-greyDark"
                  role="option"
                  aria-selected="false"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          <section className="relative m-0 w-full border-t border-dimBlackLighten p-2">
            <div className="my-2 flex items-center gap-2">
              <BuildingOfficeIcon className="h-4 w-4" />
              <strong>Companies</strong>
            </div>
            <ul className="w-full">
              {sampleCompanies.map((company) => (
                <li
                  key={company}
                  className="cursor-pointer rounded py-2 px-1 text-sm hover:bg-secondaryLighten100 hover:text-greyDark"
                  role="option"
                  aria-selected="false"
                >
                  {company}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </Portal>
  );
};

export default SearchSuggestion;
