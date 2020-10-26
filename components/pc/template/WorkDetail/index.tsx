import React, { FC } from "react";
import WorkDetailTemplateComponent, { Props as ComponentProps } from "./component";

export type Props = Pick<ComponentProps, 'id'>;

const WorkDetailTemplate: FC<Props> = ({ id }) => {
  return (
    <WorkDetailTemplateComponent id={id} />
  );
};

export default WorkDetailTemplate;
