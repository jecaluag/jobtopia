import { type NextPage } from "next";
import Head from "next/head";

import { PageContainer } from "../../../common";
import { Search } from "../../";
import Hero from "./Hero";
import SearchResult from "src/modules/SearchResult";
import Footer from "./Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JobTopia</title>
      </Head>
      <PageContainer>
        <Hero />
        <Search />
        <SearchResult />
        {/* <div className="h-[2000px]" /> */}
        <Footer />
      </PageContainer>
    </>
  );
};

export default Home;
