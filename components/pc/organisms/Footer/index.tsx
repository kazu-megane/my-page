import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFacebook,
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
                href="https://twitter.com/kazukazu_maronn"
                target="_blank"
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
                href="https://www.instagram.com/kazu_megane/"
                target="_blank"
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
                href="https://github.com/kazu-megane"
                target="_blank"
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
