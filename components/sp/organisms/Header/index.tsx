import React, { FC, useState } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./index.module.scss";

interface Props {
  className?: string;
  onClickMenu: () => void;
}

const Header: FC<Props> = ({ className, onClickMenu }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Binder classNames={[style.Header, className]}>
      <div>
        <div className={style.Header__columns}>
          <div className={style.Header__columnLeft}>
            <Link href="/">
              <a className={style.Header__columnLink}>
                <FontAwesomeIcon
                  className={style.Header__icon}
                  icon={faTerminal}
                  size="xs"
                  fixedWidth
                />
                <h1 className={style.Header__title}>Kazuya Hashimoto</h1>
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
                  onClickMenu();
                }}
              >
                <span className={style.Header__triggerIcon}></span>
                <span className={style.Header__triggerIcon}></span>
                <span className={style.Header__triggerIcon}></span>
              </button>
            </Binder>
          </div>
        </div>
      </div>
    </Binder>
  );
};

export default Header;
