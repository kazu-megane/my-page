import React, { FC } from 'react';
import Binder from '~/components/all/atoms/helpers/Binder';
import style from "./index.module.scss";

type Props = {
  className?: string;
}

const VideoList: FC<Props> = ({ className }) => (
  <Binder classNames={[style.VideoList, className]}>
    <div>
      <p className={style.VideoList__text}>Coming soon.</p>
    </div>
  </Binder>
)

export default VideoList;