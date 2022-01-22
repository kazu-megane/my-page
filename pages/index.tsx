import React from "react";
import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate from "~/components/pc/template/Page";
import SpPageTemplate from "~/components/sp/template/Page";
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import { PAGE_TYPE } from "~/components/constants";

const Home: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const isDesktop = useJudgeDesktop(isPc);

  return (
    <>
      <Head>
        <title>KAZUYA HASHIMOTO</title>
      </Head>
      {isDesktop ? (
        <PcPageTemplate pageType={PAGE_TYPE.HOME} />
      ) : (
        <SpPageTemplate pageType={PAGE_TYPE.HOME} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ req }) => {
    const ua = req.headers["user-agent"]?.toLowerCase();
    const isPc =
      ua && !ua.match(/iphone|android.+mobile|like mac os x|instagram|line/);

    return {
      props: {
        isPc,
      },
    };
  });

export default Home;
