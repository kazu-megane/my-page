import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

type Props = {
  className?: string;
};

function dateToStr24HPad0(date: Date, format: string) {
  if (!format) {
    // デフォルト値
    format = "YYYY/MM/DD hh:mm:ss";
  }

  // フォーマット文字列内のキーワードを日付に置換する
  format = format.replace(/YYYY/g, `${date.getFullYear()}`);
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));

  return format;
}

const HomeContent: FC<Props> = ({ className }) => {
  const [today, setToday] = useState(dateToStr24HPad0(new Date(), "YYYY/MM/DD hh:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(dateToStr24HPad0(new Date(), "YYYY/MM/DD hh:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <Binder classNames={[style.HomeContent, className]}>
      <div>
        <p className={style.HomeContent__preText}>切り取られた日常</p>
        <p className={style.HomeContent__text}>{today}</p>
        <p className={style.HomeContent__newText}>Kazuya Hashimoto</p>
        <ul className={style.HomeContent__images}>
          <li className={style.HomeContent__image}>
            <Image src="/home.png" alt="home" loading="eager" unsized priority className={style.HomeContent__imageContent} />
          </li>
          <li className={style.HomeContent__image}>
            <Image src="/home2.png" alt="home2" loading="eager" unsized priority className={style.HomeContent__imageContent} />
            <p className={style.HomeContent__imageDate}>{today}</p>
          </li>
        </ul>
      </div>
    </Binder>
  );
};

export default HomeContent;
