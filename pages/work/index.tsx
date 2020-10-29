import React from "react";
import Head from 'next/head';
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate from "~/components/pc/template/Page";
import SpPageTemplate from "~/components/sp/template/Page";
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import { PAGE_TYPE } from "~/components/constants";

const Work: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const isDesktop = useJudgeDesktop(isPc);

  return (
    <>
      <Head>
        <title>KAZUYA HASHIMOTO | WORK</title>
      </Head>
      {isDesktop ? (
        <PcPageTemplate pageType={PAGE_TYPE.WORK} />
        ) : (
        <SpPageTemplate pageType={PAGE_TYPE.WORK} />
        )}
    </>
  )
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const ua = context.req.headers["user-agent"]?.toLowerCase();
    const isPc =
      ua && !ua.match(/iphone|android.+mobile|like mac os x|instagram|line/);

    return {
      props: {
        isPc,
      },
    };
  }
);

export default Work;
