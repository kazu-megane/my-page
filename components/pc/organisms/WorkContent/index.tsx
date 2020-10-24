import React, { FC } from 'react';
import Binder from '~/components/all/atoms/helpers/Binder';
import style from "./index.module.scss";

type Props = {
  className?: string;
}

const WorkContent: FC<Props> = ({ className }) => (
  <Binder classNames={[style.WorkContent, className]}>
    <div>
      <p className={style.WorkContent__text}>Coming soon.</p>
    </div>
  </Binder>
)

export default WorkContent;