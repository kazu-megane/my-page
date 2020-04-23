import React from "react";
import { storiesOf } from "@storybook/react";
import ModalHeader from "./";

storiesOf("sp | molecules/ModalHeader", module).add("default", () => (
  <div id="root">
    <ModalHeader />
  </div>
));
