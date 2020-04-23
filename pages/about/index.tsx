import React, { useLayoutEffect, useState } from "react";
import PcPageTemplate, { PageType } from "~/components/pc/template/component";
import SpPageTemplate from "~/components/sp/template/component";
import { NextPage, GetServerSideProps } from "next";
import { useMediaQuery } from "react-responsive";

const About: NextPage = () => {
  const [isServer, setIsServer] = useState(true);
  const isPc = useMediaQuery({ minWidth: 768 });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setIsServer(false);
    }
  }, []);

  return isServer || isPc ? (
    <PcPageTemplate pageType={PageType.ABOUT} />
  ) : (
    <SpPageTemplate pageType={PageType.ABOUT} />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req
    ? context.req.headers["user-agent"]
    : navigator.userAgent;

  let agent: string = "";

  if (userAgent) {
    if (
      userAgent.match(/iPhone|Android.+Mobile/) ||
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("macintosh") > -1
    ) {
      agent = "smartphone";
    } else {
      agent = "pc";
    }
  }

  return {
    props: { userAgent: agent },
  };
};

export default About;
