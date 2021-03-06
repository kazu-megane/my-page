import React, { FC } from 'react';
import Binder from '~/components/all/atoms/helpers/Binder';
import Designship from './Designship';
import PlanckUnits from './PlanckUnits';
import style from "./index.module.scss";

type Props = {
  id: string;
  className?: string;
}

const WorkDetail: FC<Props> = ({ id, className }) => (
  <Binder classNames={[style.WorkDetail, className]}>
    <div>
      {id === 'Designship' ? <Designship /> : null}
      {id === 'PlanckUnits' ? <PlanckUnits /> : null}
    </div>
  </Binder>
);

export default WorkDetail;