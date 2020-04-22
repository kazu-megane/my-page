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
}

const ImageGrid: FC<Props> = ({ className, images }) =>
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
                />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Binder>
  ) : null;

export default ImageGrid;
