import PcPageTemplate, { PageType } from "../components/pc/template/component";
import SpPageTemplate from "../components/sp/template/componet";
import { NextPage, GetServerSideProps } from "next";

interface Props {
  isPc: boolean;
}

const Home: NextPage<Props> = ({ isPc }) =>
  isPc ? <PcPageTemplate pageType={PageType.HOME} /> : <SpPageTemplate />;

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
