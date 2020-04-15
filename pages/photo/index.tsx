import PcPageTemplate, {
  PageType,
  Props,
} from "../../components/pc/template/component";
import { NextPage, GetServerSideProps } from "next";

const Photo: NextPage<Pick<Props, "images">> = ({ images }) => (
  <PcPageTemplate pageType={PageType.PHOTO} images={images} />
);

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
    props: {
      userAgent: agent,
      images: [
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
        {
          url:
            "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
          alt: "",
        },
      ],
    },
  };
};

export default Photo;
