import { useEffect, useMemo, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import { BOTTOM_TAGS } from "../constants";
import { Announcement } from "../../../common";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Hero = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);

  const tag = useMemo(() => BOTTOM_TAGS[index % BOTTOM_TAGS.length], [index]);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3500);

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="flex flex-col py-14 sm:py-20">
      <Announcement />
      <h1 className="text-s text-[2rem] font-bold capitalize leading-normal text-grey sm:text-[3.25rem]">
        Find your perfect remote job in the philippines.
      </h1>
      {/* eslint-disable */}
      <TextTransition
        springConfig={presets.stiff}
        direction="down"
        inline
        className="text-[2rem] font-bold capitalize leading-normal text-white sm:text-[3.25rem]"
      >
        {tag}.
      </TextTransition>
      <p className="mt-5 text-[18px] leading-relaxed text-grey sm:mt-6 sm:text-[22px] sm:leading-normal">
        Find your dream job and work from the comfort of your own home on
        JobTopia.
        <br />
        Your go-to destination for remote job opportunities in the Philippines.
      </p>
      <div className="mt-8">
        <button className="flex items-center gap-3 rounded-md bg-secondary px-5 py-3 text-base font-semibold ring-secondaryLighten100 hover:bg-secondaryLighten focus:ring-2 sm:px-8 sm:py-3 sm:text-[18px]">
          <span>Get Job Updates</span>
          <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
