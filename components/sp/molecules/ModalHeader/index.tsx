import React, { FC } from "react";
import { useRouter } from 'next/router';
import Modal from "~/components/all/atoms/Modal";
import style from "./index.module.scss";
import Link from "next/link";
import Binder from "~/components/all/atoms/helpers/Binder";
import { PAGE_TYPE, PageType } from "~/components/constants";

type Props = {
  className?: string;
  onClick?: (content?: PageType) => void;
};

type ListContentProps = Required<Pick<Props, 'onClick'>> & {
  pageType: PageType;
  isCurrent: boolean;
}
const ModalHeaderListContent: FC<ListContentProps> = ({ pageType, isCurrent, onClick }) => {
  let pathName = pageType.toLowerCase();

  if (pathName === PAGE_TYPE.HOME.toLowerCase()) {
    pathName = '';
  }

  return (
    <li className={style.ModalHeader__list}>
      {isCurrent ? (
        <p className={style.ModalHeader__text}>{pageType}</p>
      ) : (
          <Link href={`/${pathName}`}>
          <a
            className={style.ModalHeader__link}
              onClick={() => onClick(pageType)}
          >
              {pageType}
          </a>
        </Link>
        )}
    </li>
  )
}

const ModalHeader: FC<Props> = ({ className, onClick = () => { } }) => {
  const router = useRouter();
  const currntPath = router.pathname.split('/')[router.pathname.split('/').length - 1];

  return (
    <Binder classNames={[style.ModalHeader, className]}>
      <Modal>
        <ul className={style.ModalHeader__lists}>
          {Object.entries(PAGE_TYPE).map(([_key, value], index) => (
            <ModalHeaderListContent pageType={value} onClick={onClick} isCurrent={currntPath === value.toLowerCase() || (currntPath === '' && value === PAGE_TYPE.HOME)} key={index} />
          ))}
        </ul>
      </Modal>
    </Binder>
  )
};

export default ModalHeader;
