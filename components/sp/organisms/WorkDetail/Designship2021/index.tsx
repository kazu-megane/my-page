import React, { FC } from "react";
import style from "./index.module.scss";

const Designship: FC = () => (
  <div className={style.Designship}>
    <p className={style.Designship__image}>
      <img
        src="/work/designship2021.png"
        alt="designship"
        width="400"
        height="300"
        className={style.Designship__imageContent}
      />
    </p>
    <p className={style.Designship__title}>Designship</p>
    <p className={style.Designship__year}>2021</p>
    <p className={style.Designship__role}>
      Developed a live site and event photography.
    </p>
    <p className={style.Designship__link}>
      <a
        href="https://design-ship.jp/"
        className={style.Designship__linkContent}
      >
        Official website
      </a>
    </p>
    <div className={style.Designship__description}>
      <p className={style.Designship__descriptionTitle}>
        物語の力で「デザイン」の壁を越える
      </p>
      <p className={style.Designship__descriptionTheme}>
        <span className={style.Designship__descriptionThemeTitle}>
          「/」slash
        </span>
        <span className={style.Designship__descriptionThemeTexts}>
          <span className={style.Designship__descriptionThemeText}>
            激しくて大きなうねりを伴う社会の中に、私たちはいる。
            <br />
            過去を振り返りながら、先の見えない未来と戦っている。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            あとから振り返れば、今は暗黒の時代なのかもしれない。
            <br />
            それでも、今を過去にできるのは自分たちだけなんだ。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            「ここまで」と「これから」の区切りは、
            <br />
            いつだって、世界でなく人間が描いてきた。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            僕らの進化にピリオドは打たせない。
            <br />
            壁があるなら、真正面から切り拓く。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            そんな覚悟をもった76億の火こそが、
            <br />
            未来への道を灯していく。
          </span>
          <span className={style.Designship__descriptionThemeText}>
            さぁ、世界よ。
            <br />
            出し惜しみなんてしてないで、
            <br />
            今日という創造をやめない、
            <br />
            しぶとい僕らの明日を示せ。
          </span>
        </span>
      </p>
      <div className={style.Designship__siteDescription}>
        <p className={style.Designship__siteDescriptionTitle}>
          より良い視聴体験を
        </p>
        <ul className={style.Designship__siteDescriptionItems}>
          <li className={style.Designship__siteDescriptionItem}>
            <p className={style.Designship__siteDescriptionItemHeading}>
              タイムテーブルをサイト内に実装
            </p>
            <p className={style.Designship__siteDescriptionItemText}>
              昨年まで、別サイトに飛ばしていたタイムテーブルを配信サイト内に実装。現在何のセッションが行われているのか把握できるようにしている。
            </p>
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            <p className={style.Designship__siteDescriptionItemHeading}>
              次のセッション予告
            </p>
            <p className={style.Designship__siteDescriptionItemText}>
              休憩時に次のセッションが何なのかわかる仕組みを導入。
            </p>
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            <p className={style.Designship__siteDescriptionItemHeading}>
              モバイルファーストなUX
            </p>
            <p className={style.Designship__siteDescriptionItemText}>
              スマートフォンで視聴した際にも、操作しやすいUIに刷新。
            </p>
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            <p className={style.Designship__siteDescriptionItemHeading}>
              運営からのアナウンス枠
            </p>
            <p className={style.Designship__siteDescriptionItemText}>
              昨年まで、運営からのアナウンスをチャットで流していたが、別枠でアナウンスを流せる仕組みを導入。
            </p>
          </li>
          <li className={style.Designship__siteDescriptionItem}>
            <p className={style.Designship__siteDescriptionItemHeading}>
              スポンサーエリアをリッチ化
            </p>
            <p className={style.Designship__siteDescriptionItemText}>
              スポンサーセッション時にはセッションで登壇している企業のスポンサーバナーが強調して表示されるように刷新。
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Designship;
