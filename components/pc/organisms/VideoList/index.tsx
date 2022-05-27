import React, { FC, useState } from "react";
import Binder from "~/components/all/atoms/helpers/Binder";
import style from "./index.module.scss";

const VIDEO = {
  KAGAWA: "Cl5iEIHAD1I",
  AOMORI: "V3j3IAZdTkg",
  SNOWBOARD: "-qTnfPMbmho",
  FINLAND_1: "-RDEQfHhwpU",
  FINLAND_2: "LPk99-ROE-g",
  FINLAND_3: "Uh-oc8PVkSA",
  GERMANY: "viOCUAZ_dR8",
  AIZU: "idDzRHMHjV8",
} as const;

function getSrc(video: typeof VIDEO[keyof typeof VIDEO]) {
  return `https://www.youtube.com/embed/${video}?playsinline=1`;
}

type videoListProps = {
  src: string;
  title: string;
  date: string;
};
const videoList: videoListProps[] = [
  {
    src: getSrc(VIDEO.KAGAWA),
    title: "Kagawa Vlog",
    date: "2022.05.01-2022.05.04",
  },
  {
    src: getSrc(VIDEO.AOMORI),
    title: "Aomori Vlog",
    date: "2020.10.10-2020.10.12",
  },
  {
    src: getSrc(VIDEO.SNOWBOARD),
    title: "Snowboard Vlog",
    date: "2020.01.17-2020.01.20",
  },
  {
    src: getSrc(VIDEO.FINLAND_3),
    title: "Finland Vlog 3",
    date: "2019.12.06-2019.12.07",
  },
  {
    src: getSrc(VIDEO.FINLAND_2),
    title: "Finland Vlog 2",
    date: "2019.12.05-2019.12.06",
  },
  {
    src: getSrc(VIDEO.FINLAND_1),
    title: "Finland Vlog 1",
    date: "2019.12.01-2019.12.05",
  },
  {
    src: getSrc(VIDEO.GERMANY),
    title: "Germany Vlog",
    date: "2019.09.15-2019.12.20",
  },
  {
    src: getSrc(VIDEO.AIZU),
    title: "AizuKomagadake Vlog",
    date: "2019.08.17-2019.08.18",
  },
];

type Props = {
  className?: string;
};

const Video: FC<{ src: string }> = ({ src }) => {
  const [isDoneLoad, setIsDoneLoad] = useState(false);

  return (
    <Binder
      classNames={[
        style.VideoList__video,
        isDoneLoad ? style["VideoList__video--done"] : "",
      ]}
    >
      <p>
        <span className={style.VideoList__videoSkelton} />
        <iframe
          src={src}
          className={style.VideoList__videoContent}
          onLoad={() => {
            setIsDoneLoad(true);
          }}
        />
      </p>
    </Binder>
  );
};

const VideoList: FC<Props> = ({ className }) => (
  <Binder classNames={[style.VideoList, className]}>
    <div>
      <ul className={style.VideoList__items}>
        {videoList.map((video, index) => (
          <li className={style.VideoList__item} key={index}>
            <Video src={video.src} />
            <div className={style.VideoList__description}>
              <p className={style.VideoList__descriptionHeading}>
                {video.title}
              </p>
              <p className={style.VideoList__descriptionDate}>{video.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Binder>
);

export default VideoList;
