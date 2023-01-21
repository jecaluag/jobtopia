import React, { useCallback, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { NAV_LINKS } from "./constants";
import MobileNav from "./mobile";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setToggle((val) => !val);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 0));

  return (
    <>
      <motion.nav
        initial={{ height: 96 }}
        animate={{
          height: isScrolled ? 64 : 96,
        }}
        className="fixed z-20 w-[inherit] max-w-[inherit] bg-dark"
      >
        <div className="flex h-full w-full items-center justify-between py-3 px-5 md:py-6 lg:px-0">
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
                  className={`cursor-pointer text-[16px] text-white ${
                    index === NAV_LINKS.length - 1 ? "mr-0" : "mr-10"
                  } ${
                    nav.id === "post"
                      ? "rounded-md bg-primary py-1 px-3 font-semibold hover:bg-primaryLighten"
                      : "font-semibold hover:text-dimWhite"
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

            <MobileNav {...{ toggle, handleToggle }} />
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
