import React, { FC } from 'react';
import style from "./index.module.scss";

const PlanckUnits: FC = () => (
  <div className={style.Planckunits}>
    <p className={style.Planckunits__image}>
      <img src="/work/planckUnits.svg" alt="planckunits" width="330" height="140" className={style.Planckunits__imageContent} />
    </p>
    <p className={style.Planckunits__title}>PlanckUnits</p>
    <p className={style.Planckunits__year}>2019</p>
    <p className={style.Planckunits__role}>Designed a corporate brochure.</p>
    <p className={style.Planckunits__link}>
      <a href="https://planckunits.io/" target="_blank" rel="noopener noreferrer" className={style.Planckunits__linkContent}>Official website</a>
    </p>
    <div className={style.Planckunits__description}>
      <p className={style.Planckunits__descriptionTitle}>IoTとクラウド技術でのオーダーメイド開発</p>
      <p className={style.Planckunits__descriptionTheme}>
        <span className={style.Planckunits__descriptionThemeText}>心と技術をこめたIoT技術、クラウド技術を通したモノづくりにより幸せと豊かさに貢献します。</span>
        <span className={style.Planckunits__descriptionThemeText}>技術の先端に挑戦し、新しい価値を低コストで持続可能な安定基盤を創り出す独自の領域を利用者の切り拓き、真の利便性を追求します。</span>
        <span className={style.Planckunits__descriptionThemeText}>事業の広がりを追求する人を大切にし、環境、地域、人との調和を大切にします。</span>
        <span className={style.Planckunits__descriptionThemeText}>ワクワクするもの、安心安全なものを作り出すことに常に挑戦し、多くの世代に夢を与えます。</span>
      </p>
    </div>
    <div className={style.Planckunits__brochureDescription}>
      <p className={style.Planckunits__brochureDescriptionTitle}>親しみやすく、手にとってもらいやすいパンフレット</p>
      <ul className={style.Planckunits__brochureDescriptionItems}>
        <li className={style.Planckunits__brochureDescriptionItem}>
          <p className={style.Planckunits__brochureItemHeading}>アイコン</p>
          <p className={style.Planckunits__brochureItemText}>どの分野の事業を行っているのかを一目でわかるようにするため、関連分野を表紙のアイコンで表現。</p>
        </li>
        <li className={style.Planckunits__brochureDescriptionItem}>
          <p className={style.Planckunits__brochureItemHeading}>カラー</p>
          <p className={style.Planckunits__brochureItemText}>企業イメージカラーとなっているカラーをベースとすることで統一感を出す。</p>
        </li>
        <li className={style.Planckunits__brochureDescriptionItem}>
          <p className={style.Planckunits__brochureItemHeading}>表現</p>
          <p className={style.Planckunits__brochureItemText}>特に伝えたい点を文章にするのではなく、図式化することで少しでも親しみやすくする。</p>
        </li>
      </ul>
    </div>
    <ul className={style.Planckunits__brochureImages}>
      <li className={style.Planckunits__brochureImage}>
        <img src="/work/planckunits/brochure_1.png" width="330" height="235" alt="brochureImage" className={style.Planckunits__brochureImageContent} />
      </li>
      <li className={style.Planckunits__brochureImage}>
        <img src="/work/planckunits/brochure_2.png" width="330" height="235" alt="brochureImage" className={style.Planckunits__brochureImageContent} />
      </li>
    </ul>
  </div>
);

export default PlanckUnits;

