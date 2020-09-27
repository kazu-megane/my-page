import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
  onClick?: (content?: string) => void;
}

const Header: FC<Props> = ({ onClick = () => {}, className }) => (
  <Binder classNames={[style.Header, className]}>
    <div>
      <div className={style.Header__columns}>
        <div className={style.Header__columnLeft}>
          <Link href="/">
            <a
              className={style.Header__columnLink}
              onClick={() => onClick("HOME")}
            >
              <img
                src="/headerLogo.png"
                alt="logo"
                className={style.Header__logo}
              />
            </a>
          </Link>
        </div>
        <div className={style.Header__columnRight}>
          <ul className={style.Header__rightContents}>
            <li className={style.Header__rightContent}>
              <Link href="/">
                <a
                  className={style.Header__link}
                  onClick={() => onClick("HOME")}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/about">
                <a
                  className={style.Header__link}
                  onClick={() => onClick("ABOUT")}
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/photo">
                <a
                  className={style.Header__link}
                  onClick={() => onClick("PHOTO")}
                >
                  PHOTO
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/video">
                <a
                  className={style.Header__link}
                  onClick={() => onClick("VIDEO")}
                >
                  VIDEO
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/contact">
                <a
                  className={style.Header__link}
                  onClick={() => onClick("CONTACT")}
                >
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Binder>
);

export default Header;
