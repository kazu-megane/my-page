import React, { FC } from "react";
import Modal from "~/components/all/atoms/Modal";
import style from "./index.module.scss";
import Link from "next/link";
import Binder from "~/components/all/atoms/helpers/Binder";

interface Props {
  className?: string;
  onClick?: () => void;
}

const ModalHeader: FC<Props> = ({ className, onClick }) => (
  <Binder classNames={[style.ModalHeader, className]}>
    <Modal>
      <ul className={style.ModalHeader__lists}>
        <li className={style.ModalHeader__list}>
          <Link href="/">
            <a className={style.ModalHeader__link} onClick={onClick}>
              HOME
            </a>
          </Link>
        </li>
        <li className={style.ModalHeader__list}>
          <Link href="/about">
            <a className={style.ModalHeader__link} onClick={onClick}>
              ABOUT
            </a>
          </Link>
        </li>
        <li className={style.ModalHeader__list}>
          <Link href="/photo">
            <a className={style.ModalHeader__link} onClick={onClick}>
              PHOTO
            </a>
          </Link>
        </li>
        <li className={style.ModalHeader__list}>
          <Link href="/video">
            <a className={style.ModalHeader__link} onClick={onClick}>
              VIDEO
            </a>
          </Link>
        </li>
        <li className={style.ModalHeader__list}>
          <Link href="/contact">
            <a className={style.ModalHeader__link} onClick={onClick}>
              CONTACT
            </a>
          </Link>
        </li>
      </ul>
    </Modal>
  </Binder>
);

export default ModalHeader;
