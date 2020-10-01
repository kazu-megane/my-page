import React, { useState, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import PcPageTemplate, { PageType } from "~/components/pc/template";
import SpPageTemplate from "~/components/sp/template";
import { wrapper } from "~/lib/strore";

const Video: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const [isDesktop, setIsDesktop] = useState(isPc);
  let currentWidth = 0;

  function judgeDevice() {
    if (currentWidth === 0 || currentWidth === window.outerWidth) {
      return;
    }
    if (window.innerWidth <= 768) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    if (window) {
      currentWidth = window.outerWidth;
      judgeDevice();
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  return isDesktop ? (
    <PcPageTemplate pageType={PageType.VIDEO} />
  ) : (
    <SpPageTemplate pageType={PageType.VIDEO} />
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

export default Video;
