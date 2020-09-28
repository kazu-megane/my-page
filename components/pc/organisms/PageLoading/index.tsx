import React, { FC } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import Loading from "~/components/all/atoms/Loading";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

const PageLoading: FC<Props> = ({ className }) => (
  <Binder classNames={[style.PageLoading, className]}>
    <div>
      <Loading className={style.PageLoading__content} />
    </div>
  </Binder>
);

export default PageLoading;
