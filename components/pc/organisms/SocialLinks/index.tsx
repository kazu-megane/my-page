import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import { X_URL, INSTAGRAM_URL } from "~/components/constants";
import * as gtag from "~/lib/logics/gtag";
import style from "./index.module.scss";

type Props = {
  className?: string;
};

const clickLinkEvent = (link: string) => {
  gtag.event({
    action: "click_social_link",
    category: "SocialLinks_pc",
    label: link,
  });
};

const SocialLinks: FC<Props> = ({ className }) => (
  <Binder classNames={[style.SocialLinks, className]}>
    <div>
      <div className={style.SocialLinks__header}>
        <p className={style.SocialLinks__headerText}>Social</p>
      </div>
      <ul className={style.SocialLinks__contents}>
        <li className={style.SocialLinks__content}>
          <a
            className={style.SocialLinks__link}
            href={X_URL}
            onClick={() => clickLinkEvent(X_URL)}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li className={style.SocialLinks__content}>
          <a
            className={style.SocialLinks__link}
            href={INSTAGRAM_URL}
            onClick={() => clickLinkEvent(INSTAGRAM_URL)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  </Binder>
);

export default SocialLinks;
