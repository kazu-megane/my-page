import React, { FC } from 'react';
import Binder from '~/components/all/atoms/helpers/Binder';
import Designship from './Designship';
import Planckunits from './Planckunits';
import style from "./index.module.scss";

type Props = {
  id: string;
  className?: string;
}

const WorkDetail: FC<Props> = ({ id, className }) => (
  <Binder classNames={[style.WorkDetail, className]}>
    <div>
      {id === 'designship' ? <Designship /> : null}
      {id === 'planckunits' ? <Planckunits /> : null}
    </div>
  </Binder>
);

export default WorkDetail;