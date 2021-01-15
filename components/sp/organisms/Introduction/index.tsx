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
      <div className={style.Introduction__profile}>
        <p className={style.Introduction__profileName}>Kazuya Hashimoto</p>
        <p className={style.Introduction__profileText}>
          I was born in Japan in 1994. I'm currently working as front-end enginner and web designer based in Tokyo.
        </p>
        <p className={style.Introduction__profileText}>
          Now, I'm learning photography and videos as a hobby. Mainly for snaps, landscape photography and portrait photography.
        </p>
      </div>
      <div className={style.Introduction__profile}>
        <p className={style.Introduction__profileName}>橋本 和也</p>
        <p className={style.Introduction__profileText}>1994年生まれ。フロントエンドエンジニア、デザイナー。</p>
        <p className={style.Introduction__profileText}>趣味で写真や動画の勉強をしている。主に、スナップや風景写真、ポートレートの撮影をしている。</p>
      </div>
      <div className={style.Introduction__biography}>
        <p className={style.Introduction__biographyTitle}>Biography</p>
        <ul className={style.Introduction__biographyItems}>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>1994.12</p>
            <p className={style.Introduction__biographyItemContent}>千葉県船橋市生まれ</p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2014.04</p>
            <p className={style.Introduction__biographyItemContent}>東京電機大学 未来科学部 情報メディア学科 入学</p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2017.12</p>
            <p className={style.Introduction__biographyItemContent}>HCG2017シンポジウム 学生優秀インタラクティブ発表賞 受賞</p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2018.03</p>
            <p className={style.Introduction__biographyItemContent}>東京電機大学 未来科学部 情報メディア学科 卒</p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2018.04</p>
            <p className={style.Introduction__biographyItemContent}>ヤフー株式会社 入社</p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2020.10</p>
            <p className={style.Introduction__biographyItemContent}>Designship 2020 運営</p>
          </li>
        </ul>
      </div>
    </div>
  </Binder>
);

export default Introduction;
