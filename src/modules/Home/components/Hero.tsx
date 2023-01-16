import { useEffect, useMemo, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import { BOTTOM_TAGS } from "../constants";
import { Announcement } from "../../../common";

const Hero = () => {
  const [index, setIndex] = useState<number>(0);

  const tag = useMemo(() => BOTTOM_TAGS[index % BOTTOM_TAGS.length], [index]);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3500);

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="flex flex-col py-14 sm:py-20">
      <Announcement />
      <h1 className="text-[3.25rem] font-bold capitalize text-grey">
        Find your perfect remote job in the philippines.
      </h1>
      {/* eslint-disable */}
      <TextTransition
        springConfig={presets.stiff}
        direction="down"
        inline
        className="block text-[3.25rem] font-bold capitalize text-white"
      >
        {tag}.
      </TextTransition>
      <p className="mt-5 text-[22px] leading-normal text-grey">
        Find your dream job and work from the comfort of your own home on
        JobTopia.
        <br />
        Your go-to destination for remote job opportunities in the Philippines.
      </p>
    </section>
  );
};

export default Hero;
