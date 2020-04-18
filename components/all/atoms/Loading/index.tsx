import React, { FC } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

const Loading: FC<Props> = ({ className }) => (
  <Binder classNames={[style.Loading, className]}>
    <div>
      <p className={style.Loading__content}>
        <span className={style.Loading__contentText}>.</span>
        <span className={style.Loading__contentText}>.</span>
        <span className={style.Loading__contentText}>.</span>
        <span className={style.Loading__contentText}>Loading</span>
      </p>
    </div>
  </Binder>
);

export default Loading;
