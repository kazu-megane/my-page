import React, { FC } from "react";
import Header from "../organisms/Header";
import ContentHeader, { ContentType } from "../organisms/ContentHeader";
import Introduction from "../organisms/Introduction";
import Footer from "../organisms/Footer";
import SocialLinks from "../organisms/SocialLinks";
import ImageGrid, { Props as ImageGridProps } from "../organisms/ImageGrid";
import HomeContent from "../organisms/HomeContent";
import style from "./index.module.scss";

export enum PageType {
  HOME = "HOME",
  ABOUT = "ABOUT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  CONTACT = "CONTACT",
}

export interface Props {
  pageType: PageType;
  images?: ImageGridProps["images"];
}

function switchContentType(pageType: string) {
  switch (pageType) {
    case PageType.ABOUT:
      return ContentType.ABOUT;
    case PageType.PHOTO:
      return ContentType.PHOTO;
    case PageType.VIDEO:
      return ContentType.VIDEO;
    case PageType.CONTACT:
      return ContentType.CONTACT;
    default:
      return ContentType.ABOUT;
  }
}

const PcPageTemplate: FC<Props> = ({ pageType, images }) => (
  <div className={style.PcPageTemplate}>
    <div className={style.PcPageTemplate__inner}>
      <header className={style.PcPageTemplate__header}>
        <Header />
      </header>
      <main className={style.PcPageTemplate__main}>
        {pageType !== PageType.HOME ? (
          <div className={style.PcPageTemplate__pageContent}>
            <ContentHeader
              contentType={switchContentType(pageType)}
              className={style.PcPageTemplate__contentHeader}
            />
            {pageType === PageType.ABOUT ? (
              <Introduction className={style.PcPageTemplate__introduction} />
            ) : null}
            {pageType === PageType.PHOTO && images ? (
              <ImageGrid
                images={images}
                className={style.PcPageTemplate__imageGrid}
              />
            ) : null}
            {pageType === PageType.CONTACT ? (
              <SocialLinks className={style.PcPageTemplate__socialLinks} />
            ) : null}
          </div>
        ) : (
          <HomeContent className={style.PcPageTemplate__homeContent} />
        )}
      </main>
      <footer className={style.PcPageTemplate__footer}>
        <Footer className={style.PcPageTemplate__footerContent} />
      </footer>
    </div>
  </div>
);

export default PcPageTemplate;
