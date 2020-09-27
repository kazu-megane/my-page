import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";
import { TWITTER_URL, INSTAGRAM_URL, GITHUB_URL } from "~/components/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Footer, className]}>
    <div>
      <div className={style.Footer__contents}>
        <div className={style.Footer__content}>
          <p className={style.Footer__text}>© 2020 kazuya hashimoto</p>
        </div>
        <div className={style.Footer__content}>
          <ul className={style.Footer__links}>
            <li className={style.Footer__link}>
              <a
                className={style.Footer__linkContent}
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={style.Footer__linkIcon}
                  icon={faTwitter}
                />
              </a>
            </li>
            <li className={style.Footer__link}>
              <a
                className={style.Footer__linkContent}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={style.Footer__linkIcon}
                  icon={faInstagram}
                />
              </a>
            </li>
            <li className={style.Footer__link}>
              <a
                className={style.Footer__linkContent}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
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
);

export default Footer;
