import { type NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../../common";
import Hero from "./Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JobTopia</title>
      </Head>
      <PageContainer>
        <Hero />
        <div className="h-[2000px]"></div>
      </PageContainer>
    </>
  );
};

export default Home;
