import React, { FC, useState, useEffect } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import Link from "next/link";
import ModalHeader from "~/components/sp/molecules/ModalHeader";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (isOpenMenu) {
        html.style.position = "fixed";
        html.style.width = "100%";
      } else {
        html.removeAttribute("style");
      }
    }
  }, [isOpenMenu]);

  return (
    <Binder classNames={[style.Header, className]}>
      <div>
        <div className={style.Header__columns}>
          <div className={style.Header__columnLeft}>
            <Link href="/">
              <a
                className={style.Header__columnLink}
                onClick={() => setIsOpenMenu(false)}
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
            <Binder
              classNames={[
                style.Header__trigger,
                isOpenMenu ? style["Header__trigger--open"] : null,
              ]}
            >
              <button
                type="button"
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                <span className={style.Header__triggerIcon}></span>
                <span className={style.Header__triggerIcon}></span>
                <span className={style.Header__triggerIcon}></span>
              </button>
            </Binder>
          </div>
        </div>
        {isOpenMenu ? (
          <ModalHeader
            className={style.Header__modal}
            onClick={() => setIsOpenMenu(false)}
          />
        ) : null}
      </div>
    </Binder>
  );
};

export default Header;
