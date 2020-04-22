import React from "react";
import { storiesOf } from "@storybook/react";
import ImageGrid, { Props } from "./";

const stub: Props = {
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
  ],
};

storiesOf("sp | organisms/ImageGrid", module).add("default", () => (
  <ImageGrid {...stub} />
));
