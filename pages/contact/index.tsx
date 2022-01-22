import React from "react";
import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate from "~/components/pc/template/Page";
import SpPageTemplate from "~/components/sp/template/Page";
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import { PAGE_TYPE } from "~/components/constants";

const Contact: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const isDesktop = useJudgeDesktop(isPc);

  return (
    <>
      <Head>
        <title>KAZUYA HASHIMOTO | CONTACT</title>
      </Head>
      {isDesktop ? (
        <PcPageTemplate pageType={PAGE_TYPE.CONTACT} />
      ) : (
        <SpPageTemplate pageType={PAGE_TYPE.CONTACT} />
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

export default Contact;
