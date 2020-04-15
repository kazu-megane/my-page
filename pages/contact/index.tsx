import PcPageTemplate, {
  PageType,
} from "../../components/pc/template/component";
import { NextPage, GetServerSideProps } from "next";

const Contact: NextPage = () => <PcPageTemplate pageType={PageType.CONTACT} />;

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

export default Contact;
