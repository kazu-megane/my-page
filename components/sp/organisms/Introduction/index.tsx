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
          src="/myPhoto3.JPG"
          alt="myPhoto"
          width="327"
          height="327"
          className={style.Introduction__imageContent}
        />
      </p>
      <div className={style.Introduction__profile}>
        <p className={style.Introduction__profileName}>Kazuya Hashimoto</p>
        <p className={style.Introduction__profileText}>
          I was born in Japan in 1994. I'm currently working as front-end/Design
          enginner and UI/UX designer based in Tokyo.
        </p>
        <p className={style.Introduction__profileText}>
          Now, I'm learning photography and videos as a hobby. Mainly for snaps,
          landscape photography and portrait photography.
        </p>
      </div>
      <div className={style.Introduction__profile}>
        <p className={style.Introduction__profileName}>橋本 和也</p>
        <p className={style.Introduction__profileText}>
          1994年生まれ。フロントエンド/デザインエンジニア、UI/UXデザイナー。
        </p>
        <p className={style.Introduction__profileText}>
          趣味で写真や動画の勉強をしている。主に、スナップや風景写真、ポートレートの撮影をしている。
        </p>
      </div>
      <div className={style.Introduction__biography}>
        <p className={style.Introduction__biographyTitle}>Biography</p>
        <ul className={style.Introduction__biographyItems}>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>1994.12</p>
            <p className={style.Introduction__biographyItemContent}>
              千葉県船橋市生まれ
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2014.04</p>
            <p className={style.Introduction__biographyItemContent}>
              東京電機大学 未来科学部 情報メディア学科 入学
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2017.12</p>
            <p className={style.Introduction__biographyItemContent}>
              <a
                href="https://www.ieice.org/hcg/symposium2017/sites.google.com/a/hcg-symposium.org/2017/award.html"
                className={style.Introduction__biographyItemContentLink}
              >
                HCG2017シンポジウム
              </a>{" "}
              学生優秀インタラクティブ発表賞 受賞
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2018.03</p>
            <p className={style.Introduction__biographyItemContent}>
              東京電機大学 未来科学部 情報メディア学科 卒
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2018.04</p>
            <p className={style.Introduction__biographyItemContent}>
              ヤフー株式会社 入社
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2020.10</p>
            <p className={style.Introduction__biographyItemContent}>
              <a
                href="https://design-ship.jp/2020"
                className={style.Introduction__biographyItemContentLink}
              >
                Designship 2020
              </a>{" "}
              運営
            </p>
          </li>
          <li className={style.Introduction__biographyItem}>
            <p className={style.Introduction__biographyItemHeading}>2021.10</p>
            <p className={style.Introduction__biographyItemContent}>
              <a
                href="https://design-ship.jp/"
                className={style.Introduction__biographyItemContentLink}
              >
                Designship 2021
              </a>{" "}
              運営
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Binder>
);

export default Introduction;
