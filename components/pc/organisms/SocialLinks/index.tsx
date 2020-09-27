import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import { TWITTER_URL, INSTAGRAM_URL } from "~/components/constants";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

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
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={style.SocialLinks__content}>
          <a
            className={style.SocialLinks__link}
            href={INSTAGRAM_URL}
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
