import React from "react";
import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";
import PcPageTemplate from "~/components/pc/template/Page";
import SpPageTemplate from "~/components/sp/template/Page";
import { wrapper } from "~/lib/strore";
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import { PAGE_TYPE } from "~/components/constants";

const Video: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const isDesktop = useJudgeDesktop(isPc);

  return (
    <>
      <Head>
        <title>KAZUYA HASHIMOTO | VIDEO</title>
      </Head>
      {isDesktop ? (
        <PcPageTemplate pageType={PAGE_TYPE.VIDEO} />
      ) : (
        <SpPageTemplate pageType={PAGE_TYPE.VIDEO} />
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

export default Video;
