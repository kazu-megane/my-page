import React, { useState, useEffect } from "react";
import PcPageTemplate, { PageType } from "~/components/pc/template/component";
import { NextPage, GetServerSideProps } from "next";
import { useMediaQuery } from "react-responsive";

const Home: NextPage = () => {
  const [isServer, setIsServer] = useState(true);
  const isPc = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsServer(false);
    }
  }, []);

  return isServer || isPc ? <PcPageTemplate pageType={PageType.HOME} /> : null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req
    ? context.req.headers["user-agent"]
    : navigator.userAgent;

  let isPc = true;

  if (userAgent) {
    if (
      userAgent.match(/iPhone|Android.+Mobile/) ||
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("macintosh") > -1
    ) {
      isPc = false;
    } else {
      isPc = true;
    }
  }

  return {
    props: { isPc },
  };
};

export default Home;
