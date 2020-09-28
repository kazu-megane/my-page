import React from "react";
import { storiesOf } from "@storybook/react";
import ModalImage, { Props } from "./";

const stub: Props = {
  url: "https://pbs.twimg.com/media/EMxv6eMUcAAsdeQ?format=jpg&name=4096x4096",
  alt: "",
  data: {
    width: "",
    height: "",
    creationTime: "",
    photo: {
      cameraMake: "SONY",
      cameraModel: "ILCE-7M3",
      focalLength: 90,
      apertureFNumber: 1.8,
      isoEquivalent: 100,
      exposureTime: "1/1000",
    },
  },
  onClick: () => {},
};

storiesOf("pc | molucules/ModalImage", module).add("default", () => (
  <ModalImage {...stub} />
));
