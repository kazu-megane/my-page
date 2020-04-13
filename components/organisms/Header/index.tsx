import React, { FC } from "react";
import Binder from "../../atoms/helpers/Binder";
import style from "./index.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Header, className]}>
    <div>
      <div className={style.Header__columns}>
        <div className={style.Header__columnLeft}>
          <Link href="/">
            <a className={style.Header__columnLink}>
              <h1 className={style.Header__title}>Kazuya Hashimoto</h1>
            </a>
          </Link>
        </div>
        <div className={style.Header__columnRight}>
          <ul className={style.Header__rightContents}>
            <li className={style.Header__rightContent}>
              <Link href="/">
                <a className={style.Header__link}>HOME</a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/about">
                <a className={style.Header__link}>ABOUT</a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/photo">
                <a className={style.Header__link}>PHOTO</a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/video">
                <a className={style.Header__link}>VIDEO</a>
              </Link>
            </li>
            <li className={style.Header__rightContent}>
              <Link href="/contact">
                <a className={style.Header__link}>CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Binder>
);

export default Header;
