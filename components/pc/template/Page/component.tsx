import React, { FC, useEffect, useState } from "react";
import Header, { Props as HeaderProps } from "~/components/pc/organisms/Header";
import ContentHeader, { CONTENT_TYPE } from "~/components/pc/organisms/ContentHeader";
import Introduction from "~/components/pc/organisms/Introduction";
import Footer from "~/components/pc/organisms/Footer";
import SocialLinks from "~/components/pc/organisms/SocialLinks";
import ImageGrid, { Props as ImageGridProps } from "~/components/pc/organisms/ImageGrid";
import VideoList from '~/components/pc/organisms/VideoList';
import HomeContent from "~/components/pc/organisms/HomeContent";
import PageLoading from "~/components/pc/organisms/PageLoading";
import WorkContent from '~/components/pc/organisms/WorkContent';
import { PAGE_TYPE } from "~/components/constants";
import style from "./index.module.scss";

export type Props = Pick<ImageGridProps, "images" | "hasNext" | "onClickMore"> &
  Pick<HeaderProps, "onClick"> & {
    pageType: typeof PAGE_TYPE[keyof typeof PAGE_TYPE];
    isLoading?: boolean;
  };

function switchContentType(pageType: string) {
  switch (pageType) {
    case PAGE_TYPE.ABOUT:
      return CONTENT_TYPE.ABOUT;
    case PAGE_TYPE.WORK:
      return CONTENT_TYPE.WORK;
    case PAGE_TYPE.PHOTO:
      return CONTENT_TYPE.PHOTO;
    case PAGE_TYPE.VIDEO:
      return CONTENT_TYPE.VIDEO;
    case PAGE_TYPE.CONTACT:
      return CONTENT_TYPE.CONTACT;
    default:
      return CONTENT_TYPE.ABOUT;
  }
}

const PageTemplate: FC<Props> = ({
  pageType,
  images,
  hasNext,
  isLoading,
  onClick,
  onClickMore,
}) => (
    <div className={style.PageTemplate}>
      <header className={style.PageTemplate__header}>
        <Header onClick={onClick} />
      </header>
      {isLoading ? (
        <PageLoading className={style.PageTemplate__loading} />
      ) : (
          <main className={style.PageTemplate__main}>
            {pageType !== PAGE_TYPE.HOME ? (
              <div className={style.PageTemplate__pageContent}>
                <ContentHeader
                  contentType={switchContentType(pageType)}
                  className={style.PageTemplate__contentHeader}
                />
                {pageType === PAGE_TYPE.ABOUT ? (
                  <Introduction className={style.PageTemplate__introduction} />
                ) : null}
                {pageType === PAGE_TYPE.PHOTO && images ? (
                  <ImageGrid
                    images={images}
                    hasNext={hasNext}
                    onClickMore={onClickMore}
                    className={style.PageTemplate__imageGrid}
                  />
                ) : null}
                {pageType === PAGE_TYPE.WORK ? (
                  <WorkContent onClick={onClick} className={style.PageTemplate__workContent} />
                ) : null}
                {pageType === PAGE_TYPE.VIDEO ? (
                  <VideoList className={style.PageTemplate__videoList} />
                ) : null}
                {pageType === PAGE_TYPE.CONTACT ? (
                  <SocialLinks className={style.PageTemplate__socialLinks} />
                ) : null}
              </div>
            ) : (
                <HomeContent className={style.PageTemplate__homeContent} />
              )}
          </main>
        )}
      <footer className={style.PageTemplate__footer}>
        <Footer className={style.PageTemplate__footerContent} />
      </footer>
    </div>
  );

export default PageTemplate;
