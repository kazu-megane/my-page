import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import { TWITTER_URL, INSTAGRAM_URL, GITHUB_URL } from "~/components/constants";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import * as gtag from '~/lib/logics/gtag';

type Props = {
  className?: string;
};


const clickLinkEvent = (link: string) => {
  gtag.event({
    action: 'click_footer_link',
    category: 'Footer_sp',
    label: link
  })
}

const Footer: FC<Props> = ({ className }) => {
  const year = new Date().getFullYear();

  return (
  <Binder classNames={[style.Footer, className]}>
    <div>
      <div className={style.Footer__contents}>
        <div className={style.Footer__content}>
            <p className={style.Footer__text}>© {year} kazuya hashimoto</p>
        </div>
        <div className={style.Footer__content}>
          <ul className={style.Footer__links}>
            <li className={style.Footer__link}>
              <a
                aria-label="twitter"
                className={style.Footer__linkContent}
                href={TWITTER_URL}
                onClick={() => clickLinkEvent(TWITTER_URL)}
              >
                <FontAwesomeIcon
                  className={style.Footer__linkIcon}
                  icon={faTwitter}
                />
              </a>
            </li>
            <li className={style.Footer__link}>
              <a
                aria-label="instagram"
                className={style.Footer__linkContent}
                href={INSTAGRAM_URL}
                onClick={() => clickLinkEvent(INSTAGRAM_URL)}
              >
                <FontAwesomeIcon
                  className={style.Footer__linkIcon}
                  icon={faInstagram}
                />
              </a>
            </li>
            <li className={style.Footer__link}>
              <a
                aria-label="github"
                className={style.Footer__linkContent}
                href={GITHUB_URL}
                onClick={() => clickLinkEvent(GITHUB_URL)}
              >
                <FontAwesomeIcon
                  className={style.Footer__linkIcon}
                  icon={faGithub}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Binder>
  )
};

export default Footer;
