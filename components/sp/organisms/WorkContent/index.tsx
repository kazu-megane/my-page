import React, { FC } from "react";
import Link from "next/link";
import Binder from "~/components/all/atoms/helpers/Binder";
import * as gtag from "~/lib/logics/gtag";
import style from "./index.module.scss";

type Props = {
  className?: string;
  onClick?: () => void;
};

const clickDetailEvent = (page: string) => {
  gtag.event({
    action: "click_work_detail",
    category: "WorkContent_sp",
    label: page,
  });
};

const WorkContent: FC<Props> = ({ onClick, className }) => (
  <Binder classNames={[style.WorkContent, className]}>
    <div>
      <ul className={style.WorkContent__items}>
        <li className={style.WorkContent__item}>
          <Link href="/work/[id]" as="/work/Designship2021">
            <a
              onClick={() => {
                clickDetailEvent("Designship");
                if (onClick) {
                  onClick();
                }
              }}
              className={style.WorkContent__itemImage}
            >
              <img
                src="/work/designship2021.png"
                width="400"
                height="300"
                className={style.WorkContent__imageContent}
              />
            </a>
          </Link>
          <p className={style.WorkContent__year}>2021</p>
          <p className={style.WorkContent__title}>Designship</p>
        </li>
        <li className={style.WorkContent__item}>
          <Link href="/work/[id]" as="/work/Designship">
            <a
              onClick={() => {
                clickDetailEvent("Designship");
                if (onClick) {
                  onClick();
                }
              }}
              className={style.WorkContent__itemImage}
            >
              <img
                src="/work/designship.png"
                width="330"
                height="175"
                className={style.WorkContent__imageContent}
              />
            </a>
          </Link>
          <p className={style.WorkContent__year}>2020</p>
          <p className={style.WorkContent__title}>Designship</p>
        </li>
        <li className={style.WorkContent__item}>
          <Link href="/work/[id]" as="/work/PlanckUnits">
            <a
              onClick={() => {
                clickDetailEvent("PlanckUnits");
                if (onClick) {
                  onClick();
                }
              }}
              className={style.WorkContent__itemImage}
            >
              <img
                src="/work/planckUnits.svg"
                width="340"
                height="180"
                className={style.WorkContent__imageContent}
              />
            </a>
          </Link>
          <p className={style.WorkContent__year}>2019</p>
          <p className={style.WorkContent__title}>PlanckUnits</p>
        </li>
      </ul>
    </div>
  </Binder>
);

export default WorkContent;
