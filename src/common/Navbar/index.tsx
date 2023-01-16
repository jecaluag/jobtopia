import React, { useState } from "react";
import { NAV_LINKS } from "./constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="fixed z-20 w-[inherit] max-w-[inherit] bg-dark">
      <div className="flex w-full items-center justify-between py-3 px-5 md:py-6 lg:px-0">
        <Link legacyBehavior href="/">
          <a className="flex">
            <p className="text-gradient text-3xl font-black">JOBTOPIA</p>
            <span className="text-white">.ph</span>
          </a>
        </Link>

        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {NAV_LINKS.map((nav, index) => (
            <Link legacyBehavior key={nav.id} href={`#${nav.id}`}>
              <a
                className={`cursor-pointer text-[16px] ${
                  index === NAV_LINKS.length - 1 ? "mr-0" : "mr-10"
                } ${
                  nav.id === "post"
                    ? " rounded-md bg-secondary py-1 px-3 font-semibold hover:opacity-80"
                    : "font-semibold text-white hover:text-dimWhite"
                }`}
              >
                {nav.title}
              </a>
            </Link>
          ))}
        </ul>

        <ul className="flex flex-1 items-center justify-end sm:hidden">
          <div className="rounded-full p-2 hover:bg-dimBlack">
            <Bars3Icon
              onClick={() => setToggle((val) => !val)}
              className="h-[28px] w-[28px] cursor-pointer text-white"
            />
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute inset-x-0 top-4 mx-auto -mt-1 w-3/4 min-w-[95%] rounded-lg bg-dimBlack px-6 pt-6 pb-8 shadow-xl`}
          >
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex items-center justify-between">
                <Link legacyBehavior href="/">
                  <a className="flex">
                    <p className="text-gradient text-2xl font-black">
                      JOBTOPIA
                    </p>
                    <span className="text-white">.ph</span>
                  </a>
                </Link>
                <div className="rounded-full p-2 hover:bg-dark">
                  <XMarkIcon
                    onClick={() => setToggle((val) => !val)}
                    className="h-[28px] w-[28px] cursor-pointer text-white"
                  />
                </div>
              </div>
              <ul className="flex flex-1 list-none flex-col justify-end">
                {NAV_LINKS.map((nav, index) => (
                  <Link legacyBehavior key={nav.id} href={`#${nav.id}`}>
                    <a
                      className={`w-full cursor-pointer text-[16px] font-semibold text-white hover:text-dimWhite ${
                        index === NAV_LINKS.length - 1 ? "mb-0" : "mb-6"
                      }`}
                    >
                      {nav.title}
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
