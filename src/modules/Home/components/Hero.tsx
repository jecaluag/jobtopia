import { useEffect, useMemo, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import { BOTTOM_TAGS } from "../constants";
import { Announcement } from "../../../common";

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
      <h1 className="text-[2rem] font-bold capitalize leading-normal text-grey sm:text-[3.25rem]">
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
    </section>
  );
};

export default Hero;
