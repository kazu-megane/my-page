import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

const Introduction: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Introduction, className]}>
    <div>
      <div className={style.Introduction__columns}>
        <div className={style.Introduction__columnLeft}>
          <img
            src="/myPhoto.jpg"
            alt="myPhoto"
            className={style.Introduction__image}
          />
        </div>
        <div className={style.Introduction__columnRight}>
          <p className={style.Introduction__name}>Kazuya Hashimoto</p>
          <p className={style.Introduction__text}>
            I was born in Japan in 1994. I studied computer science at Tokyo
            Denki University.I'm currently working as front-end enginner at{" "}
            <a href="https://about.yahoo.co.jp/" target="_blank">
              Yahoo Japan Corporation
            </a>
            .
          </p>
          <p className={style.Introduction__text}>
            Now, I'm studying photography and video regardless of my work.
          </p>
        </div>
      </div>
    </div>
  </Binder>
);

export default Introduction;
