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
            src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s320x320/77091699_2685801504774912_7570025119288918016_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ohc=K0ZsVugd-r4AX8VajM0&oh=e9a9d874958e2766325a669816c6b838&oe=5EBCA11F"
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
