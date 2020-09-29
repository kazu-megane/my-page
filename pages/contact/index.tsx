import React, { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { wrapper } from "~/lib/strore";
import PcPageTemplate, { PageType } from "~/components/pc/template";
import SpPageTemplate from "~/components/sp/template";

const Contact: NextPage<{ isPc: boolean }> = ({ isPc }) => {
  const [isDesktop, setIsDesktop] = useState(isPc);

  function judgeDevice() {
    if (window.innerWidth <= 768) {
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
    <PcPageTemplate pageType={PageType.CONTACT} />
  ) : (
    <SpPageTemplate pageType={PageType.CONTACT} />
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const ua = context.req.headers["user-agent"]?.toLocaleLowerCase();
    const isPc = ua && !ua.match(/iphone|android.+mobile|like mac os x/);

    return {
      props: {
        isPc,
      },
    };
  }
);

export default Contact;
