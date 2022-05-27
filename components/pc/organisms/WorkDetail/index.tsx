import React, { FC } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import Fig from "./Fig";
import Designship2021 from "./Designship2021";
import Designship2020 from "./Designship2020";
import PlanckUnits from "./PlanckUnits";
import style from "./index.module.scss";

type Props = {
  id: string;
  className?: string;
};

const WorkDetail: FC<Props> = ({ id, className }) => (
  <Binder classNames={[style.WorkDetail, className]}>
    <div>
      {id === "Fig" ? <Fig /> : null}
      {id === "Designship2021" ? <Designship2021 /> : null}
      {id === "Designship2020" ? <Designship2020 /> : null}
      {id === "PlanckUnits" ? <PlanckUnits /> : null}
    </div>
  </Binder>
);

export default WorkDetail;
