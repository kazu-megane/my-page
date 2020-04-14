import React, { FC } from "react";
import Header from "../../components/organisms/Header";
import ContentHeader, {
  ContentType,
} from "../../components/organisms//ContentHeader";
import Introduction from "../../components/organisms/Introduction";
import Footer from "../../components/organisms/Footer";
import SocialLinks from "../../components/organisms/SocialLinks";
import ImageGrid, {
  Props as ImageGridProps,
} from "../../components/organisms/ImageGrid";
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

const PageTemplate: FC<Props> = ({ pageType, images }) => (
  <div className={style.PageTemplate}>
    <div className={style.PageTemplate__inner}>
      <header className={style.PageTemplate__header}>
        <Header />
      </header>
      <main className={style.PageTemplate__main}>
        {pageType !== PageType.HOME ? (
          <div className={style.PageTemplate__pageContent}>
            <ContentHeader
              contentType={switchContentType(pageType)}
              className={style.PageTemplate__contentHeader}
            />
            {pageType === PageType.ABOUT ? (
              <Introduction className={style.PageTemplate__introduction} />
            ) : null}
            {pageType === PageType.PHOTO && images ? (
              <ImageGrid
                images={images}
                className={style.PageTemplate__imageGrid}
              />
            ) : null}
            {pageType === PageType.CONTACT ? (
              <SocialLinks className={style.PageTemplate__socialLinks} />
            ) : null}
          </div>
        ) : (
          <HomeContent className={style.PageTemplate__homeContent} />
        )}
      </main>
      <footer className={style.PageTemplate__footer}>
        <Footer className={style.PageTemplate__footerContent} />
      </footer>
    </div>
  </div>
);

export default PageTemplate;
