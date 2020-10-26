import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import PcWorkDetailTemplate from "~/components/pc/template/WorkDetail";
import { wrapper } from "~/lib/strore";

const WorkDetail: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const router = useRouter()
  const { id } = router.query;
  const isDesktop = useJudgeDesktop(isPc);

  if (!id) {
    return null;
  }

  return isDesktop ? <PcWorkDetailTemplate id={Array.isArray(id) ? id[0] : id} /> : null;
}

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

export default WorkDetail;