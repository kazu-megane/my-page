import React, { FC, useState, useEffect, Fragment } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import ContentLoading from "~/components/all/atoms/ContentLoading";
import style from "./index.module.scss";

interface ImageProps {
  url: string;
  alt: string;
}

export interface Props {
  className?: string;
  images: ImageProps[];
  columnNum: number;
  hasNext?: boolean;
  onClickMore?: () => void;
  onClickNumButton?: (num: number) => void;
}

const ImageGrid: FC<Props> = ({
  className,
  images,
  columnNum,
  hasNext,
  onClickMore,
  onClickNumButton,
}) => {
  const [displayedNextButton, setDisplayedNextButton] = useState(hasNext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  let count = 0;

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
        <div className={style.ImageGrid__columnButtonArea}>
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
                  onClickNumButton(columnNum + 1);
                }
              }}
            ></button>
          </Binder>
        </div>
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
                  <p className={style.ImageGrid__image}>
                    <img
                      className={style.ImageGrid__imageContent}
                      src={image.url}
                      alt={image.alt}
                      width="512"
                      height="341"
                      loading={count > 4 ? "lazy" : undefined}
                    />
                  </p>
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
      </div>
    </Binder>
  ) : null;
};

export default ImageGrid;
