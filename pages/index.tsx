import PageTemplate, { PageType } from "../components/all/template/component";
import { NextPage, GetServerSideProps } from "next";

const Home: NextPage = () => <PageTemplate pageType={PageType.HOME} />;

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
