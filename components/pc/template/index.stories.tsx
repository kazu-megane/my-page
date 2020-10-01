import React from "react";
import { storiesOf } from "@storybook/react";
import PcPageTemplate, { Props } from "./component";
import { PAGE_TYPE } from "~/components/constants";

const imageStub: Pick<Props, "images"> = {
  images: [
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
    {
      url:
        "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
      alt: "",
      data: {
        width: "",
        height: "",
        creationTime: "",
      },
    },
  ],
};

storiesOf("pc | template", module)
  .add("Home", () => <PcPageTemplate images={[]} pageType={PAGE_TYPE.HOME} />)
  .add("About", () => <PcPageTemplate images={[]} pageType={PAGE_TYPE.ABOUT} />)
  .add("PcPageTemplate", () => (
    <PcPageTemplate {...imageStub} pageType={PAGE_TYPE.PHOTO} />
  ))
  .add("PcPageTemplate", () => (
    <PcPageTemplate images={[]} pageType={PAGE_TYPE.VIDEO} />
  ))
  .add("Contact", () => (
    <PcPageTemplate images={[]} pageType={PAGE_TYPE.CONTACT} />
  ));
