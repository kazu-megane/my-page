import React, { FC, useState } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import ModalImage from "~/components/pc/molucules/ModalImage";
import style from "./index.module.scss";

interface PhotoProps {
  cameraMake: string;
  cameraModel: string;
  focalLength: number;
  apertureFNumber: number;
  isoEquivalent: number;
  exposureTime: string;
}

interface DataProps {
  creationTime: string;
  width: string;
  height: string;
  photo?: PhotoProps;
}

interface ImageProps {
  url: string;
  alt: string;
  data: DataProps;
}

export interface Props {
  className?: string;
  images: ImageProps[];
  hasNext?: boolean;
  onClick?: () => void;
}

const ImageGrid: FC<Props> = ({ className, images, hasNext, onClick }) => {
  const [isDisplayedModal, setIsDesplayedModal] = useState(false);
  const [selectItem, setSelectItem] = useState<number | null>(null);

  return images.length > 0 ? (
    <Binder classNames={[style.ImageGrid, className]}>
      <div>
        <ul className={style.ImageGrid__items}>
          {images.map((image, index) => (
            <li className={style.ImageGrid__item} key={index}>
              <a
                className={style.ImageGrid__link}
                onClick={() => {
                  setSelectItem(index);
                  setIsDesplayedModal(true);
                }}
              >
                <p className={style.ImageGrid__image}>
                  <img
                    className={style.ImageGrid__imageContent}
                    loading="lazy"
                    width="380"
                    height="250"
                    src={image.url}
                    alt={image.alt}
                  />
                </p>
              </a>
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
