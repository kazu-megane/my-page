import React, { FC } from "react";
import style from "./index.module.scss";

const SpPageTemplate: FC = () => (
  <div className={style.SpPageTemplate}>
    <p className={style.SpPageTemplate__text}>
      こちらはスマートフォンのページです
    </p>
  </div>
);

export default SpPageTemplate;
