import React, { FC, useState, useEffect, Fragment } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import ContentLoading from "~/components/all/atoms/ContentLoading";
import ModalImage, {
  Props as ModalImageProps,
} from "~/components/sp/molecules/ModalImage";
import * as gtag from '~/lib/logics/gtag';
import style from "./index.module.scss";

type ImageProps = Pick<ModalImageProps, "data"> & {
  url: string;
  alt: string;
};

export type Props = {
  className?: string;
  images: ImageProps[];
  columnNum: number;
  hasNext?: boolean;
  onClickMore?: () => void;
  onClickNumButton?: (num: number) => void;
};

const clickMoreEvent = (pageNum: number) => {
  gtag.event({
    action: 'click_more_button',
    category: 'Photo_sp',
    label: String(pageNum)
  });
}

const clickDetailEvent = (src: string) => {
  gtag.event({
    action: 'display_detail',
    category: 'Photo_sp',
    label: src
  });
}

const clickChangeEvent = (num: number) => {
  gtag.event({
    action: 'click_chnage_column',
    category: 'Photo_sp',
    label: String(num)
  });
}

const Image: FC<Pick<ImageProps, "url" | "alt"> & { count: number }> = ({
  url,
  alt,
  count,
}) => {
  const [isDoneRead, setIsDoneRead] = useState(false);

  return (
    <Binder
      classNames={[
        style.ImageGrid__image,
        isDoneRead ? style["ImageGrid__image--done"] : "",
      ]}
    >
      <p>
        <span className={style.ImageGrid__imageSkelton} />
        <img
          className={style.ImageGrid__imageContent}
          width="512"
          height="341"
          src={url}
          alt={alt}
          loading={count > 4 ? "lazy" : undefined}
          onLoad={() => {
            setIsDoneRead(true);
          }}
        />
      </p>
    </Binder>
  );
};

const ImageGrid: FC<Props> = ({
  className,
  images,
  columnNum,
  hasNext,
  onClickMore,
  onClickNumButton,
}) => {
  const [isDisplayedModal, setIsDesplayedModal] = useState(false);
  const [selectItem, setSelectItem] = useState<number | null>(null);
  const [displayedNextButton, setDisplayedNextButton] = useState(hasNext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isFixed, setIsFixed] = useState(false);
  const [isDoneRead, setIsDoneRead] = useState(false);
  let count = 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      },
      {
        rootMargin: "-60px",
      }
    );
    const target = document.getElementById("columnButtonArea");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
    setDisplayedNextButton(hasNext);
  }, [hasNext, images]);

  useEffect(() => {
    const bookmark = document.getElementById(`page-${page - 1}`);
    if (page >= 2 && bookmark) {
      bookmark.scrollIntoView({ block: "nearest" });
    }
  }, [images]);

  return images.length > 0 ? (
    <Binder classNames={[style.ImageGrid, className]}>
      <div>
        <Binder
          classNames={[
            style.ImageGrid__columnButtonArea,
            isFixed ? style["ImageGrid__columnButtonArea--fixed"] : "",
          ]}
        >
          <div>
            <Binder
              classNames={[
                style.ImageGrid__columnButtonReduce,
                columnNum <= 1 ? style["ImageGrid__columnButton--disable"] : "",
              ]}
            >
              <button
                type="button"
                onClick={() => {
                  if (onClickNumButton && columnNum > 1) {
                    clickChangeEvent(columnNum);
                    onClickNumButton(columnNum - 1);
                  }
                }}
              ></button>
            </Binder>
            <ul className={style.ImageGrid__rows}>
              <ul className={style.ImageGrid__columns}>
                {Array(columnNum)
                  .fill(null)
                  .map((_, index) => (
                    <li className={style.ImageGrid__column} key={index}></li>
                  ))}
              </ul>
              <ul className={style.ImageGrid__columns}>
                {Array(columnNum)
                  .fill(null)
                  .map((_, index) => (
                    <li className={style.ImageGrid__column} key={index}></li>
                  ))}
              </ul>
            </ul>
            <Binder
              classNames={[
                style.ImageGrid__columnButtonPlus,
                columnNum >= 5 ? style["ImageGrid__columnButton--disable"] : "",
              ]}
            >
              <button
                type="button"
                onClick={() => {
                  if (onClickNumButton && columnNum < 5) {
                    clickChangeEvent(columnNum);
                    onClickNumButton(columnNum + 1);
                  }
                }}
              ></button>
            </Binder>
          </div>
        </Binder>
        <div
          id="columnButtonArea"
          className={isFixed ? style.ImageGrid__columnButtonAreaSkelton : ""}
        ></div>
        <Binder
          classNames={[
            style.ImageGrid__items,
            style[`ImageGrid__items--${columnNum}`],
          ]}
        >
          <ul>
            {images.map((image, index) => {
              if (index === 0 || (index + 1) % 30 === 0) {
                count = 0;
              }
              count++;
              return (
                <li
                  id={
                    index > 0 && (index + 1) % 30 === 0
                      ? `page-${(index + 1) / 30}`
                      : ""
                  }
                  className={style.ImageGrid__item}
                  key={index}
                >
                  <a
                    onClick={() => {
                      setSelectItem(index);
                      clickDetailEvent(images[index].url);
                      setIsDesplayedModal(true);
                    }}
                    className={style.ImageGrid__link}
                  >
                    <Image url={`${image.url}=w300-h200`} alt={image.alt} count={count} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Binder>
        {displayedNextButton ? (
          <div className={style.ImageGrid__actionArea}>
            <button
              onClick={() => {
                if (onClickMore) {
                  clickMoreEvent(page);
                  setDisplayedNextButton(false);
                  setIsLoading(true);
                  setPage(page + 1);
                  onClickMore();
                }
              }}
              className={style.ImageGrid__button}
            >
              M O R E
            </button>
          </div>
        ) : null}
        {isLoading ? (
          <ContentLoading className={style.ImageGrid__loading} />
        ) : null}
        {isDisplayedModal && selectItem !== null ? (
          <ModalImage
            {...images[selectItem]}
            url={`${images[selectItem].url}=w1200-h1200`}
            onClick={() => setIsDesplayedModal(false)}
          />
        ) : null}
      </div>
    </Binder>
  ) : null;
};

export default ImageGrid;
