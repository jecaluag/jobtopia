import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Portal from "../Portal";
import { NAV_LINKS } from "./constants";

export interface MobileNavProps {
  toggle: boolean;
  handleToggle: () => void;
}

const MobileNav = ({
  toggle,
  handleToggle,
}: MobileNavProps): JSX.Element | null => {
  if (!toggle) return null;

  return (
    <Portal>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } absolute inset-x-0 top-4 z-30 mx-auto -mt-1 w-3/4 min-w-[95%] rounded-lg bg-dimBlack pt-6 pb-8 shadow-xl`}
      >
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center justify-between  px-6 ">
            <Link legacyBehavior href="/">
              <a className="flex">
                <p className="text-gradient text-2xl font-black">JOBTOPIA</p>
                <span className="text-white">.ph</span>
              </a>
            </Link>
            <div className="rounded-full p-2 hover:bg-dimBlackLighten">
              <XMarkIcon
                onClick={handleToggle}
                className="h-[28px] w-[28px] cursor-pointer text-white"
              />
            </div>
          </div>
          <ul className="mx-3 flex flex-1 list-none flex-col justify-end ">
            {NAV_LINKS.map((nav, index) => (
              <Link legacyBehavior key={nav.id} href={`#${nav.id}`}>
                <a
                  className={`w-full cursor-pointer rounded-md px-3 py-2 text-[16px] font-semibold text-white hover:bg-dimBlackLighten ${
                    index === NAV_LINKS.length - 1 ? "mb-0" : "mb-2"
                  }`}
                >
                  {nav.title}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Portal>
  );
};

export default MobileNav;
