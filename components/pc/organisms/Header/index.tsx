import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";
import Link from "next/link";
import { PAGE_TYPE } from "~/components/constants";

export type Props = {
  className?: string;
  onClick?: (content?: typeof PAGE_TYPE[keyof typeof PAGE_TYPE]) => void;
};

const Header: FC<Props> = ({ onClick = () => { }, className }) => (
  <Binder classNames={[style.Header, className]}>
    <div>
      <div className={style.Header__columns}>
        <div className={style.Header__columnLeft}>
          <Link href="/">
            <a
              className={style.Header__columnLink}
              onClick={() => onClick(PAGE_TYPE.HOME)}
            >
              <img
                src="/headerLogo.png"
                alt="logo"
                width="242"
                height="30"
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
                  onClick={() => onClick(PAGE_TYPE.HOME)}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/about">
                <a
                  className={style.Header__link}
                  onClick={() => onClick(PAGE_TYPE.ABOUT)}
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/work">
                <a
                  className={style.Header__link}
                  onClick={() => onClick(PAGE_TYPE.WORK)}
                >
                  WORK
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/photo">
                <a
                  className={style.Header__link}
                  onClick={() => onClick(PAGE_TYPE.PHOTO)}
                >
                  PHOTO
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/video">
                <a
                  className={style.Header__link}
                  onClick={() => onClick(PAGE_TYPE.VIDEO)}
                >
                  VIDEO
                </a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/contact">
                <a
                  className={style.Header__link}
                  onClick={() => onClick(PAGE_TYPE.CONTACT)}
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
