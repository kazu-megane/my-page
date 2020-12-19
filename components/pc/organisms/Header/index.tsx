import React, { FC } from "react";
import { useRouter } from 'next/router';
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";
import Link from "next/link";
import * as gtag from '~/lib/logics/gtag';
import { PAGE_TYPE, PageType } from "~/components/constants";

export type Props = {
  className?: string;
  onClick?: (content?: PageType) => void;
};

const clickMenuLinkEvent = (page: PageType) => {
  gtag.event({
    action: 'click_header_link',
    category: 'Header_pc',
    label: page
  });
}

type LinkProps = Required<Pick<Props, 'onClick'>> & {
  pageType: PageType;
  isCurrent: boolean;
}
const HeaderLink: FC<LinkProps> = ({ pageType, isCurrent, onClick }) => {
  let pathName = pageType.toLowerCase();

  if (pathName === PAGE_TYPE.HOME.toLowerCase()) {
    pathName = '';
  }

  return (
    <li className={style.Header__rightContent}>
      {isCurrent ? (
        <p className={style.Header__text}>{pageType}</p>
      ) : (
          <Link href={`/${pathName}`}>
            <a
              className={style.Header__link}
              onClick={() => {
                clickMenuLinkEvent(pageType);
                onClick(pageType);
              }}
            >
              {pageType}
            </a>
          </Link>
        )}
    </li>
  )
};

const Header: FC<Props> = ({ onClick = () => { }, className }) => {
  const router = useRouter();
  const currntPath = router.pathname.split('/')[router.pathname.split('/').length - 1];

  return (
  <Binder classNames={[style.Header, className]}>
    <div>
      <div className={style.Header__columns}>
        <div className={style.Header__columnLeft}>
          <Link href="/">
            <a
              className={style.Header__columnLink}
              onClick={() => {
                clickMenuLinkEvent(PAGE_TYPE.HOME);
                onClick(PAGE_TYPE.HOME);
              }}
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
              {Object.entries(PAGE_TYPE).map(([_key, value], index) => (
                <HeaderLink pageType={value} onClick={onClick} isCurrent={currntPath === value.toLowerCase() || (currntPath === '' && value === PAGE_TYPE.HOME)} key={index} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  </Binder>
  )
};

export default Header;
