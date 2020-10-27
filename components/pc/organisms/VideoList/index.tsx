import React, { FC } from 'react';
import Binder from '~/components/all/atoms/helpers/Binder';
import style from "./index.module.scss";

const VIDEO = {
  AOMORI: 'V3j3IAZdTkg',
  SNOWBOARD: '-qTnfPMbmho',
  FINLAND_1: '-RDEQfHhwpU',
  FINLAND_2: 'LPk99-ROE-g',
  FINLAND_3: 'Uh-oc8PVkSA',
  GERMANY: 'viOCUAZ_dR8',
  AIZU: 'idDzRHMHjV8'
} as const;

type Props = {
  className?: string;
}

const VideoList: FC<Props> = ({ className }) => (
  <Binder classNames={[style.VideoList, className]}>
    <div>
      <ul className={style.VideoList__items}>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.AOMORI}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Aomori Vlog</p>
            <p className={style.VideoList__descriptionDate}>2020.10.10-2020.10.12</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.SNOWBOARD}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Snowboard Vlog</p>
            <p className={style.VideoList__descriptionDate}>2020.01.17-2020.01.20</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.FINLAND_3}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Finland Vlog 3</p>
            <p className={style.VideoList__descriptionDate}>2019.12.06-2019.12.07</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.FINLAND_2}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Finland Vlog 2</p>
            <p className={style.VideoList__descriptionDate}>2019.12.05-2019.12.06</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.FINLAND_1}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Finland Vlog 1</p>
            <p className={style.VideoList__descriptionDate}>2019.12.01-2019.12.05</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.GERMANY}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>Germany Vlog</p>
            <p className={style.VideoList__descriptionDate}>2019.09.15-2019.12.20</p>
          </div>
        </li>
        <li className={style.VideoList__item}>
          <div className={style.VideoList__video}>
            <iframe src={`https://www.youtube.com/embed/${VIDEO.AIZU}?playsinline=1`} className={style.VideoList__videoContent} />
          </div>
          <div className={style.VideoList__description}>
            <p className={style.VideoList__descriptionHeading}>AizuKomagadake Vlog</p>
            <p className={style.VideoList__descriptionDate}>2019.08.17-2019.08.18</p>
          </div>
        </li>
      </ul>
    </div>
  </Binder>
)

export default VideoList;