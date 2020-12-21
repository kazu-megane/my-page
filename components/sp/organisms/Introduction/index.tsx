import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

type Props = {
  className?: string;
};

const Introduction: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Introduction, className]}>
    <div>
      <p className={style.Introduction__image}>
        <img
          src="/myPhoto.png"
          alt="myPhoto"
          width="327"
          height="327"
          className={style.Introduction__imageContent}
        />
      </p>
      <p className={style.Introduction__name}>Kazuya Hashimoto</p>
      <p className={style.Introduction__text}>
        I was born in Japan in 1994. I'm currently working as front-end enginner and web designer at <a href="https://about.yahoo.co.jp/">Yahoo Japan Corporation</a>.
      </p>
      <p className={style.Introduction__text}>
        Now, I'm learning photography and videos as a hobby.
      </p>
    </div>
  </Binder>
);

export default Introduction;
