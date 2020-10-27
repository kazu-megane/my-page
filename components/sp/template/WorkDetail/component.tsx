import React, { FC } from "react";
import Header, { Props as HeaderProps } from "~/components/sp/organisms/Header";
import PageLoading from "~/components/sp/organisms/PageLoading";
import Footer from "~/components/sp/organisms/Footer";
import WorkDetail from '~/components/sp/organisms/WorkDetail';
import style from "./index.module.scss";

export type Props = Pick<HeaderProps, "onClick"> & {
  id: string;
  isLoading?: boolean;
};

const WorkDetailTemplate: FC<Props> = ({
  id,
  isLoading,
  onClick,
}) => (
    <div className={style.WorkDetailTemplate}>
      <header className={style.WorkDetailTemplate__header}>
        <Header onClick={onClick} />
      </header>
      {isLoading ? (
        <PageLoading className={style.WorkDetailTemplate__loading} />
      ) : (
        <main className={style.WorkDetailTemplate__main}>
          <div className={style.WorkDetailTemplate__pageContent}>
            <WorkDetail id={id} className={style.WorkDetailTemplate__workDetail} />
          </div>
        </main>
        )}
      <footer className={style.WorkDetailTemplate__footer}>
        <Footer className={style.WorkDetailTemplate__footerContent} />
      </footer>
    </div>
  );

export default WorkDetailTemplate;
