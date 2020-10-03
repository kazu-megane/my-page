import React from "react";
import { storiesOf } from "@storybook/react";
import ContentHeader, { CONTENT_TYPE } from "./";

storiesOf("sp | organisms/ContentHeader", module)
  .add("About", () => <ContentHeader contentType={CONTENT_TYPE.ABOUT} />)
  .add("Photo", () => <ContentHeader contentType={CONTENT_TYPE.PHOTO} />)
  .add("Contact", () => <ContentHeader contentType={CONTENT_TYPE.CONTACT} />);
