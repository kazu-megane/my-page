import React, { FC, useState, useEffect } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import ModalImage, {
  Props as ModalImageProps,
} from "~/components/pc/molecules/ModalImage";
import ContentLoading from "~/components/all/atoms/ContentLoading";
import * as gtag from '~/lib/logics/gtag';
import style from "./index.module.scss";

type ImageProps = Pick<ModalImageProps, "data"> & {
  url: string;
  alt: string;
};

export type Props = {
  className?: string;
  images: ImageProps[];
  hasNext?: boolean;
  onClickMore?: () => void;
};

const clickMoreEvent = (pageNum: number) => {
  gtag.event({
    action: 'click_more_button',
    category: 'Photo_pc',
    label: String(pageNum)
  });
}

const clickDetailEvent = (src: string) => {
  gtag.event({
    action: 'display_detail',
    category: 'Photo_pc',
    label: src
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
          loading={count > 9 ? "lazy" : undefined}
          width="380"
          height="250"
          src={url}
          alt={alt}
          onLoad={() => {
            setIsDoneRead(true);
          }}
        />
      </p>
    </Binder>
  );
};

const ImageGrid: FC<Props> = ({ className, images, hasNext, onClickMore }) => {
  const [isDisplayedModal, setIsDesplayedModal] = useState(false);
  const [selectItem, setSelectItem] = useState<number | null>(null);
  const [displayedNextButton, setDisplayedNextButton] = useState(hasNext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  let count = 0;

  useEffect(() => {
    setIsLoading(false);
    setDisplayedNextButton(hasNext);
  }, [images, hasNext]);

  return images.length > 0 ? (
    <Binder classNames={[style.ImageGrid, className]}>
      <div>
        <ul className={style.ImageGrid__items}>
          {images.map((image, index) => {
            if (index === 0 || (index + 1) % 30 === 0) {
              count = 0;
            }
            count++;
            return (
              <li className={style.ImageGrid__item} key={index}>
                <a
                  className={style.ImageGrid__link}
                  onClick={() => {
                    setSelectItem(index);
                    clickDetailEvent(images[index].url);
                    setIsDesplayedModal(true);
                  }}
                >
                  <Image url={`${image.url}=w400-h300`} alt={image.alt} count={count} />
                </a>
              </li>
            );
          })}
        </ul>
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
            url={`${images[selectItem].url}=w2048-h1024`}
            onClick={() => setIsDesplayedModal(false)}
          />
        ) : null}
      </div>
    </Binder>
  ) : null;
};

export default ImageGrid;
