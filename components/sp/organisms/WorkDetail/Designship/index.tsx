import React, { FC } from "react";
import style from "./index.module.scss";

const Designship: FC = () => (
  <div className={style.Designship}>
    <p className={style.Designship__image}>
      <img
        src="/work/designship.png"
        alt="designship"
        width="330"
        height="180"
        className={style.Designship__imageContent}
      />
    </p>
    <p className={style.Designship__title}>Designship</p>
    <p className={style.Designship__year}>2020</p>
    <p className={style.Designship__role}>
      Developed a live site and designed a novelty.
    </p>
    <p className={style.Designship__link}>
      <a
        href="https://design-ship.jp/2020"
        className={style.Designship__linkContent}
      >
        Official website
      </a>
    </p>
    <div className={style.Designship__description}>
      <p className={style.Designship__descriptionTitle}>
        物語の力で「デザイン」の壁を越える。
      </p>
      <p className={style.Designship__descriptionTheme}>
        <span className={style.Designship__descriptionThemeTitle}>
          Chronicle
        </span>
        <span className={style.Designship__descriptionThemeTexts}>
          <span className={style.Designship__descriptionThemeText}>
            デザインという営みに対して、一人ひとりが残してきた異なる軌跡。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            {" "}
            きれいで、整った、ひとつの跡が長く続いていくのではなく、その一瞬、その年、その時代の短い跡が多くの人によって刻まれてひとつの流れが形作られていく。
            <br />
            この流れは私たちが受け継ぎ、自分自身で紡ぎつづけるものだ。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            きれいで、整った、ひとつの跡が長く続いていくのではなく、その一瞬、その年、その時代の短い跡が多くの人によって刻まれてひとつの流れが形作られていく。この流れは私たちが受け継ぎ、自分自身で紡ぎつづけるものだ。激しくて大きな変化を伴う社会の中に今、私たちはいる。その中でデザインを通じて、全ての人に希望を与える流れを紡いでいけるだろうか。後に振り返ったときに、Designship2020は大きな流れの転換点だったと言えることを願って。
          </span>
        </span>
      </p>
      <div className={style.Designship__noveltyDescription}>
        <p className={style.Designship__noveltyDescriptionTitle}>
          オンライン開催に馴染むグッズ
        </p>
        <ul className={style.Designship__noveltyDescriptionItems}>
          <li className={style.Designship__noveltyDescriptionItem}>
            <p className={style.Designship__noveltyItemHeading}>エコバッグ</p>
            <p className={style.Designship__noveltyItemText}>
              レジ袋有料化に伴い需要が増しているエコバック。サスティナブルな求められる社会に寄り添うグッズ。
            </p>
          </li>
          <li className={style.Designship__noveltyDescriptionItem}>
            <p className={style.Designship__noveltyItemHeading}>チョコレート</p>
            <p className={style.Designship__noveltyItemText}>
              小腹が空いた時や休憩時間のおともになるように、糖分補給のチョコレート。
            </p>
          </li>
          <li className={style.Designship__noveltyDescriptionItem}>
            <p className={style.Designship__noveltyItemHeading}>
              マイクロファイバークロス
            </p>
            <p className={style.Designship__noveltyItemText}>
              オンライン配信ということで、パソコンやスマートフォン、タブレットを通してDesignshipに参加するため、画面の汚れが気になった時に、さっと使えるクロス。
            </p>
          </li>
        </ul>
      </div>
      <ul className={style.Designship__noveltyImages}>
        <li className={style.Designship__noveltyImage}>
          <img
            src="https://pbs.twimg.com/media/Ek6CMhuUcAArVSc?format=jpg&name=large"
            alt="package"
            width="330"
            height="200"
            className={style.Designship__noveltyImageContent}
          />
        </li>
        <li className={style.Designship__noveltyImage}>
          <img
            src="https://pbs.twimg.com/media/Ek6CMhvVcAAQMn7?format=jpg&name=large"
            alt="label"
            width="330"
            height="200"
            className={style.Designship__noveltyImageContent}
          />
        </li>
        <li className={style.Designship__noveltyImage}>
          <img
            src="https://pbs.twimg.com/media/Ek6CMilVkAEqbNy?format=jpg&name=large"
            alt="allNovelty"
            width="330"
            height="300"
            className={style.Designship__noveltyImageContent}
          />
        </li>
        <li className={style.Designship__noveltyImage}>
          <img
            src="https://pbs.twimg.com/media/Ek6CMjMU8AA8bAz?format=jpg&name=large"
            alt="allNovelty"
            width="330"
            height="200"
            className={style.Designship__noveltyImageContent}
          />
        </li>
      </ul>
      <div className={style.Designship__siteDescription}>
        <p className={style.Designship__siteDescriptionTitle}>
          オンラインでも会場にいるかのような雰囲気作り
        </p>
        <ul className={style.Designship__siteDescriptionItems}>
          <li className={style.Designship__siteDescriptionItem}>
            会場の暗転を背景色の変化で再現
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            チャットを通じて参加者同士の交流を促進
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            動画に集中したい人向けのシアターモード
          </li>
          <li className={style.Designship__siteDescriptionItem}>字幕機能</li>
        </ul>
      </div>
      <ul className={style.Designship__siteImages}>
        <li className={style.Designship__siteImage}>
          <img
            src="/work/designship/onAir.png"
            alt="end"
            width="330"
            height="200"
            className={style.Designship__siteImageContent}
          />
        </li>
        <li className={style.Designship__siteImage}>
          <img
            src="/work/designship/end.png"
            alt="end"
            width="330"
            height="200"
            className={style.Designship__siteImageContent}
          />
        </li>
      </ul>
    </div>
  </div>
);

export default Designship;
