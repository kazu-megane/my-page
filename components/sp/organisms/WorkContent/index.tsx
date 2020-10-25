import React, { FC } from 'react';
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
          <a href="https://design-ship.jp/" className={style.WorkContent__itemImage}>
            <img src="/work/designship.png" className={style.WorkContent__imageContent} />
          </a>
          <p className={style.WorkContent__year}>2020</p>
          <p className={style.WorkContent__title}>Designship</p>
        </li>
      </ul>
    </div>
  </Binder>
)

export default WorkContent;