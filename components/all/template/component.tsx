import React, { FC, useLayoutEffect, useState } from "react";
import Header from "../../pc/organisms/Header";
import ContentHeader, { ContentType } from "../../pc/organisms/ContentHeader";
import Introduction from "../../pc/organisms/Introduction";
import Footer from "../../pc/organisms/Footer";
import SocialLinks from "../../pc/organisms/SocialLinks";
import ImageGrid, {
  Props as ImageGridProps,
} from "../../pc/organisms/ImageGrid";
import HomeContent from "../../pc/organisms/HomeContent";
import style from "./index.module.scss";
import { useMediaQuery } from "react-responsive";

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

const PageTemplate: FC<Props> = ({ pageType, images }) => {
  const [isServer, setIsServer] = useState(true);
  const isPc = useMediaQuery({ minWidth: 768 });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setIsServer(false);
    }
  });

  return (
    <div className={style.PageTemplate}>
      {isServer || isPc ? (
        <>
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
        </>
      ) : (
        <p className={style.PageTemplate__spContent}>こちらはスマホ</p>
      )}
    </div>
  );
};

export default PageTemplate;
