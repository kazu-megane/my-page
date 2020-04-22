import React from "react";
import { storiesOf } from "@storybook/react";
import PcPageTemplate, { Props, PageType } from "./component";

const imageStub: Pick<Props, "images"> = {
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
};

storiesOf("sp | template", module)
  .add("Home", () => <PcPageTemplate pageType={PageType.HOME} />)
  .add("About", () => <PcPageTemplate pageType={PageType.ABOUT} />)
  .add("Photo", () => (
    <PcPageTemplate {...imageStub} pageType={PageType.PHOTO} />
  ))
  .add("Video", () => <PcPageTemplate pageType={PageType.VIDEO} />)
  .add("Contact", () => <PcPageTemplate pageType={PageType.CONTACT} />);
