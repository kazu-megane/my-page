import React, { FC } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import style from "./index.module.scss";

type Props = {
  className?: string;
};

const ContentLoading: FC<Props> = ({ className }) => (
  <Binder classNames={[style.ContentLoading, className]}>
    <div>
      <div className={style.ContentLoading__bounce1}></div>
      <div className={style.ContentLoading__bounce2}></div>
      <div className={style.ContentLoading__bounce3}></div>
    </div>
  </Binder>
);

export default ContentLoading;
