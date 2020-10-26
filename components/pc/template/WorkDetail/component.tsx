import React, { FC } from "react";
import Header, { Props as HeaderProps } from "~/components/pc/organisms/Header";
import Footer from "~/components/pc/organisms/Footer";
import WorkDetail from '~/components/pc/organisms/WorkDetail';
import style from "./index.module.scss";

export type Props = Pick<HeaderProps, "onClick"> & {
  id: string;
};

const WorkDetailTemplate: FC<Props> = ({
  id,
  onClick,
}) => (
    <div className={style.WorkDetailTemplate}>
      <header className={style.WorkDetailTemplate__header}>
        <Header onClick={onClick} />
      </header>
      <main className={style.WorkDetailTemplate__main}>
        <div className={style.WorkDetailTemplate__pageContent}>
          <WorkDetail id={id} className={style.WorkDetailTemplate__workDetail} />
        </div>
      </main>
      <footer className={style.WorkDetailTemplate__footer}>
        <Footer className={style.WorkDetailTemplate__footerContent} />
      </footer>
    </div>
  );

export default WorkDetailTemplate;
