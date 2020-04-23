import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./";

storiesOf("sp | organisms/Header", module).add("default", () => (
  <div id="root">
    <Header />
  </div>
));
