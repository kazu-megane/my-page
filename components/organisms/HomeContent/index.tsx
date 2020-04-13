import React, { FC } from "react";
import Binder from "../../atoms/helpers/Binder/";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

const HomeContent: FC<Props> = ({ className }) => (
  <Binder classNames={[style.HomeContent, className]}>
    <div>
      <div className={style.HomeContent__content}>
        <p className={style.HomeContent__title}>
          <span className={style.HomeContent__titleText}>kazuya</span>
          <span className={style.HomeContent__titleText}>hashimoto</span>
          <span className={style.HomeContent__titleText}>megane</span>
        </p>
      </div>
    </div>
  </Binder>
);

export default HomeContent;
