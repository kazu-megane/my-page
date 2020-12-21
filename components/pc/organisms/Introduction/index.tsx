import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

type Props = {
  className?: string;
};

const Introduction: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Introduction, className]}>
    <div>
      <div className={style.Introduction__columns}>
        <div className={style.Introduction__columnLeft}>
          <img
            src="/myPhoto.png"
            alt="myPhoto"
            width="300"
            height="300"
            className={style.Introduction__image}
          />
        </div>
        <div className={style.Introduction__columnRight}>
          <p className={style.Introduction__name}>Kazuya Hashimoto</p>
          <p className={style.Introduction__text}>
            I was born in Japan in 1994. I'm currently working as front-end enginner and web designer at <a href="https://about.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">Yahoo Japan Corporation</a>.
          </p>
          <p className={style.Introduction__text}>
            Now, I'm learning photography and videos as a hobby.
          </p>
        </div>
      </div>
    </div>
  </Binder>
);

export default Introduction;
