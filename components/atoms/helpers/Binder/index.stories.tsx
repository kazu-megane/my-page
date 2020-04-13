import React from "react";
import Binder from "./";
import { storiesOf } from "@storybook/react";

storiesOf("atoms | helpers/Binder", module).add("default", () => (
  <Binder>
    <p>サンプル</p>
  </Binder>
));
