import React, { FC } from 'react';
import Link from 'next/link';
import Binder from '~/components/all/atoms/helpers/Binder';
import style from "./index.module.scss";

type Props = {
  className?: string;
}

const WorkContent: FC<Props> = ({ className }) => (
  <Binder classNames={[style.WorkContent, className]}>
    <div>
      <ul className={style.WorkContent__items}>
        <li className={style.WorkContent__item}>
          <Link href="/work/[id]" as="/work/designship">
            <a className={style.WorkContent__itemImage}>
              <img src="/work/designship.png" width="340" height="180" className={style.WorkContent__imageContent} />
            </a>
          </Link>
          <p className={style.WorkContent__year}>2020</p>
          <p className={style.WorkContent__title}>Designship</p>
        </li>
        <li className={style.WorkContent__item}>
          <a href="https://planckunits.io/" target="_blank" rel="noopener noreferrer" className={style.WorkContent__itemImage}>
            <img src="/work/planckUnits.svg" width="340" height="180" className={style.WorkContent__imageContent} />
          </a>
          <p className={style.WorkContent__year}>2019</p>
          <p className={style.WorkContent__title}>PlanckUnits</p>
        </li>
      </ul>
    </div>
  </Binder>
)

export default WorkContent;