import React from "react";
import { storiesOf } from "@storybook/react";
import SpPageTemplate, { Props } from "./component";
import { PAGE_TYPE } from "~/components/constants";

const imageStub: Pick<Props, "images" | "columnNum"> = {
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
  ],
  columnNum: 4,
};

storiesOf("sp/template/Page", module)
  .add("Home", () => (
    <SpPageTemplate images={[]} columnNum={4} pageType={PAGE_TYPE.HOME} />
  ))
  .add("About", () => (
    <SpPageTemplate images={[]} columnNum={4} pageType={PAGE_TYPE.ABOUT} />
  ))
  .add("Work", () => (
    <SpPageTemplate images={[]} columnNum={4} pageType={PAGE_TYPE.WORK} />
  ))
  .add("Photo", () => (
    <SpPageTemplate {...imageStub} pageType={PAGE_TYPE.PHOTO} />
  ))
  .add("Video", () => (
    <SpPageTemplate images={[]} columnNum={4} pageType={PAGE_TYPE.VIDEO} />
  ))
  .add("Contact", () => (
    <SpPageTemplate images={[]} columnNum={4} pageType={PAGE_TYPE.CONTACT} />
  ));
