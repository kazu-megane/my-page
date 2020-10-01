import React, { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate, { PageType } from "~/components/pc/template";
import SpPageTemplate from "~/components/sp/template";
import { SP_WIDTH } from "~/constants";

const About: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const [isDesktop, setIsDesktop] = useState(isPc);

  function judgeDevice() {
    if (window.innerWidth <= SP_WIDTH) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    if (window) {
      judgeDevice();
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  return isDesktop ? (
    <PcPageTemplate pageType={PageType.ABOUT} />
  ) : (
    <SpPageTemplate pageType={PageType.ABOUT} />
  );
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

export default About;
