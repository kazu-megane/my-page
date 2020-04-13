import React from "react";
import { storiesOf } from "@storybook/react";
import ContentHeader, { ContentType } from "./";

storiesOf("organisms | ContentHeader", module)
  .add("About", () => <ContentHeader contentType={ContentType.ABOUT} />)
  .add("Photo", () => <ContentHeader contentType={ContentType.PHOTO} />)
  .add("Contact", () => <ContentHeader contentType={ContentType.CONTACT} />);
