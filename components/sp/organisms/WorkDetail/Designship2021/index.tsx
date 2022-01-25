import React, { FC, useEffect } from "react";
import style from "./index.module.scss";

const Designship2021: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={style.Designship2021}>
      <p className={style.Designship2021__image}>
        <img
          src="/work/designship2021.png"
          alt="Designship2021"
          width="400"
          height="300"
          className={style.Designship2021__imageContent}
        />
      </p>
      <p className={style.Designship2021__title}>Designship2021</p>
      <p className={style.Designship2021__year}>2021</p>
      <p className={style.Designship2021__role}>
        Developed a live site and event photography.
      </p>
      <p className={style.Designship2021__link}>
        <a
          href="https://design-ship.jp/"
          className={style.Designship2021__linkContent}
        >
          Official website
        </a>
      </p>
      <div className={style.Designship2021__description}>
        <p className={style.Designship2021__descriptionTitle}>
          物語の力で「デザイン」の壁を越える
        </p>
        <p className={style.Designship2021__descriptionTheme}>
          <span className={style.Designship2021__descriptionThemeTitle}>
            「/」slash
          </span>
          <span className={style.Designship2021__descriptionThemeTexts}>
            <span className={style.Designship2021__descriptionThemeText}>
              激しくて大きなうねりを伴う社会の中に、私たちはいる。
              <br />
              過去を振り返りながら、先の見えない未来と戦っている。
            </span>
            <span className={style.Designship2021__descriptionThemeText}>
              あとから振り返れば、今は暗黒の時代なのかもしれない。
              <br />
              それでも、今を過去にできるのは自分たちだけなんだ。
            </span>
            <span className={style.Designship2021__descriptionThemeText}>
              「ここまで」と「これから」の区切りは、
              <br />
              いつだって、世界でなく人間が描いてきた。
            </span>
            <span className={style.Designship2021__descriptionThemeText}>
              僕らの進化にピリオドは打たせない。
              <br />
              壁があるなら、真正面から切り拓く。
            </span>
            <span className={style.Designship2021__descriptionThemeText}>
              そんな覚悟をもった76億の火こそが、
              <br />
              未来への道を灯していく。
            </span>
            <span className={style.Designship2021__descriptionThemeText}>
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
        <div className={style.Designship2021__siteDescription}>
          <p className={style.Designship2021__siteDescriptionTitle}>
            より良い視聴体験を
          </p>
          <ul className={style.Designship2021__siteDescriptionItems}>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                タイムテーブルをサイト内に実装
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                昨年まで別サイトに飛ばしていたタイムテーブルを配信サイト内に実装。現在何のセッションが行われているのか把握できるようにしている。
              </p>
            </li>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                次のセッション予告
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                休憩時に次のセッションが何なのかわかる仕組みを導入。
              </p>
            </li>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                モバイルファーストなUX
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                スマートフォンで視聴した際にも、操作しやすいUIに刷新。
              </p>
            </li>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                運営からのアナウンス枠
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                昨年まで運営からのアナウンスをチャットで流していたが、別枠でアナウンスを流せる仕組みを導入。
              </p>
            </li>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                スポンサーエリアをリッチ化
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                スポンサーセッション時にはセッションで登壇している企業のスポンサーバナーが強調して表示されるように刷新。
              </p>
            </li>
            <li className={style.Designship2021__siteDescriptionItem}>
              <p className={style.Designship2021__siteDescriptionItemHeading}>
                管理画面をより使いやすく
              </p>
              <p className={style.Designship2021__siteDescriptionItemText}>
                配信サイト内のセッション情報切り替えなどを行う管理画面のUIを刷新。
              </p>
            </li>
          </ul>
        </div>
        <ul className={style.Designship2021__siteImages}>
          <li className={style.Designship2021__siteImage}>
            <img
              src="/work/designship2021/view_page.jpg"
              loading="lazy"
              alt="view"
              width="1280"
              height="670"
              className={style.Designship2021__siteImageContent}
            />
          </li>
          <li className={style.Designship2021__siteImage}>
            <img
              src="/work/designship2021/timetable.jpg"
              loading="lazy"
              alt="timetable"
              width="1280"
              height="670"
              className={style.Designship2021__siteImageContent}
            />
          </li>
        </ul>
        <div className={style.Designship2021__photographDescription}>
          <p className={style.Designship2021__photographDescriptionTitle}>
            イベントの様子をいち早く伝える
          </p>
          <ul className={style.Designship2021__photographDescriptionItems}>
            <li className={style.Designship2021__photographDescriptionItem}>
              <p
                className={
                  style.Designship2021__photographDescriptionItemHeading
                }
              >
                イベントの熱量を共有
              </p>
              <p
                className={style.Designship2021__photographDescriptionItemText}
              >
                イベント当日の様子（配信会場の様子）を随時Twitterで実況。
              </p>
            </li>
          </ul>
        </div>
        <ul className={style.Designship2021__photographDescriptionTweets}>
          <li
            className={style.Designship2021__photographDescriptionTweet}
            dangerouslySetInnerHTML={{
              __html:
                '<blockquote class="twitter-tweet" data-theme="light"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/Designship2021?src=hash&amp;ref_src=twsrc%5Etfw">#Designship2021</a> 前田 育男氏 ／<br>マツダデザインのアプローチ<br>・個性を生み出すには、右脳に響くシンプルな指標が必要。そのためにビジョン、哲学を持つ。<br>・魂を動かす生命感あふれるデザインを実現するために、まず野生動物を模写し、その後動きのエッセンスを具象化。 <a href="https://t.co/cbstB6Cubl">pic.twitter.com/cbstB6Cubl</a></p>&mdash; Designship (@Designship_jp) <a href="https://twitter.com/Designship_jp/status/1451846439491891210?ref_src=twsrc%5Etfw">October 23, 2021</a></blockquote>',
            }}
          />
          <li
            className={style.Designship2021__photographDescriptionTweet}
            dangerouslySetInnerHTML={{
              __html:
                '<blockquote class="twitter-tweet" data-theme="light"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/Designship2021?src=hash&amp;ref_src=twsrc%5Etfw">#Designship2021</a> 尾形真理子氏, 岡室健氏／<br>ただメッセージを出すのではなく、<br>・見る人に自身に関係のあるものだとポジティブに認識してもらえるか？<br>・街の景色になっていけるか？<br>を軸に広告を考える。<br><br>最後までコピーは考えない。<br>絵の中にないものを言葉として表現する。 <a href="https://t.co/VF2oTsvqoo">pic.twitter.com/VF2oTsvqoo</a></p>&mdash; Designship (@Designship_jp) <a href="https://twitter.com/Designship_jp/status/1452209199513886720?ref_src=twsrc%5Etfw">October 24, 2021</a></blockquote>',
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default Designship2021;
