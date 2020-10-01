import React, { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate, { PageType } from "~/components/pc/template";
import SpPageTemplate from "~/components/sp/template";
import { SP_WIDTH } from "~/constants";

const Contact: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const [isDesktop, setIsDesktop] = useState(isPc);
  let currentWidth = 0;

  function judgeDevice() {
    if (currentWidth === 0 || currentWidth === window.innerWidth) {
      return;
    }
    if (window.innerWidth <= SP_WIDTH) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
    currentWidth = window.innerWidth;
  }

  useEffect(() => {
    if (window) {
      currentWidth = window.innerWidth;
      judgeDevice();
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  return isDesktop ? (
    <PcPageTemplate pageType={PageType.CONTACT} />
  ) : (
    <SpPageTemplate pageType={PageType.CONTACT} />
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

export default Contact;
