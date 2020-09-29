import React, { FC, useEffect, useState } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

interface Props {
  className?: string;
}

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
  const today = dateToStr24HPad0(new Date(), "YYYY/MM/DD hh:mm");

  return (
    <Binder classNames={[style.HomeContent, className]}>
      <div>
        <ul className={style.HomeContent__contents}>
          <li className={style.HomeContent__content}>
            <p className={style.HomeContent__skelton}>
              <span className={style.HomeContent__skeltonContent}>
                <span className={style.HomeContent__date}>{today}</span>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </Binder>
  );
};

export default HomeContent;
