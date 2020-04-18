import React from "react";
import Binder from ".";
import { storiesOf } from "@storybook/react";

storiesOf("all | atoms/helpers/Binder", module).add("default", () => (
  <Binder>
    <p>サンプル</p>
  </Binder>
));
