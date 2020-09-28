import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

interface ImageProps {
  url: string;
  alt: string;
}

export interface Props {
  className?: string;
  images: ImageProps[];
  hasNext?: boolean;
  onClick?: () => void;
}

const ImageGrid: FC<Props> = ({ className, images, hasNext, onClick }) =>
  images.length > 0 ? (
    <Binder classNames={[style.ImageGrid, className]}>
      <div>
        <ul className={style.ImageGrid__items}>
          {images.map((image, index) => (
            <li className={style.ImageGrid__item} key={index}>
              <p className={style.ImageGrid__image}>
                <img
                  className={style.ImageGrid__imageContent}
                  src={image.url}
                  alt={image.alt}
                  width="512"
                  height="341"
                  loading="lazy"
                />
              </p>
            </li>
          ))}
        </ul>
        {hasNext ? (
          <div className={style.ImageGrid__actionArea}>
            <button onClick={onClick} className={style.ImageGrid__button}>
              M O R E
            </button>
          </div>
        ) : null}
      </div>
    </Binder>
  ) : null;

export default ImageGrid;
