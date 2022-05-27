import React, { FC } from "react";
import style from "./index.module.scss";

const Fig: FC = () => {
  return (
    <div className={style.Fig}>
      <p className={style.Fig__image}>
        <img
          src="/work/fig.png"
          alt="Fig"
          width="400"
          height="300"
          className={style.Fig__imageContent}
        />
      </p>
      <p className={style.Fig__title}>Fig</p>
      <p className={style.Fig__year}>2022</p>
      <p className={style.Fig__role}>Design and developed a website.</p>
      <p className={style.Fig__link}>
        <a href="https://fig-design.jp/" className={style.Fig__linkContent}>
          website
        </a>
      </p>
    </div>
  );
};

export default Fig;
