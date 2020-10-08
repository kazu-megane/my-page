import React, { FC, useEffect, useState } from "react";
import Modal from "~/components/all/atoms/Modal";
import Binder from "~/components/all/atoms/helpers/Binder";
import style from "./index.module.scss";

type PhotoProps = {
  cameraMake?: string;
  cameraModel?: string;
  focalLength?: number;
  apertureFNumber?: number;
  isoEquivalent?: number;
  exposureTime?: string;
};

type DataProps = {
  creationTime: string;
  width: string;
  height: string;
  photo?: PhotoProps;
};

export type Props = {
  url: string;
  alt: string;
  data: DataProps;
  onClick: () => void;
  className?: string;
};

const ModalImage: FC<Props> = ({ url, alt, data, onClick, className }) => {
  const [isDoneRead, setIsDoneRead] = useState(false);
  let camera = "";
  let foculLength = "";
  let apertureFNumber = "";
  let isoEquivalent = "";
  let exposureTime = "";

  if (data.photo && data.photo.cameraMake && data.photo.cameraModel) {
    camera = `${data.photo.cameraMake} ${data.photo.cameraModel}`;
  }

  if (data.photo && data.photo.focalLength) {
    foculLength = `${data.photo.focalLength} mm`;
  }

  if (
    data.photo &&
    data.photo.apertureFNumber &&
    data.photo.apertureFNumber !== 1
  ) {
    apertureFNumber = `ƒ/${data.photo.apertureFNumber}`;
  }

  if (data.photo && data.photo.isoEquivalent) {
    isoEquivalent = `ISO ${data.photo.isoEquivalent}`;
  }

  if (data.photo && data.photo.exposureTime) {
    exposureTime = `${data.photo.exposureTime} s`;
  }

  useEffect(() => {
    const scrollY = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.right = "0";
    document.body.style.left = "0";

    return (): void => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.right = "";
      document.body.style.left = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <Binder classNames={[style.ModalImage, className]}>
      <Modal>
        <>
          <p className={style.ModalImage__close}>
            <a className={style.ModalImage__closeLink} onClick={onClick}></a>
          </p>
          <div className={style.ModalImage__main}>
            <Binder
              classNames={[
                style.ModalImage__image,
                isDoneRead ? style["ModalImage__image--done"] : "",
              ]}
            >
              <p>
                <span className={style.ModalImage__imageSkelton} />
                <img
                  className={style.ModalImage__imageContent}
                  width="375"
                  height="250"
                  src={url}
                  alt={alt}
                  onLoad={() => {
                    setIsDoneRead(true);
                  }}
                />
              </p>
            </Binder>
            <ul className={style.ModalImage__descriptions}>
              {data.photo ? (
                <>
                  {camera ? (
                    <li className={style.ModalImage__description}>
                      <p className={style.ModalImage__descriptionText}>
                        {camera}
                      </p>
                    </li>
                  ) : null}
                  {foculLength ? (
                    <li className={style.ModalImage__description}>
                      <p className={style.ModalImage__descriptionText}>
                        {foculLength}
                      </p>
                    </li>
                  ) : null}
                  {apertureFNumber ? (
                    <li className={style.ModalImage__description}>
                      <p className={style.ModalImage__descriptionText}>
                        {apertureFNumber}
                      </p>
                    </li>
                  ) : null}
                  {isoEquivalent ? (
                    <li className={style.ModalImage__description}>
                      <p className={style.ModalImage__descriptionText}>
                        {isoEquivalent}
                      </p>
                    </li>
                  ) : null}
                  {exposureTime ? (
                    <li className={style.ModalImage__description}>
                      <p className={style.ModalImage__descriptionText}>
                        {exposureTime}
                      </p>
                    </li>
                  ) : null}
                </>
              ) : null}
              <li className={style.ModalImage__description}>
                <p className={style.ModalImage__descriptionText}>
                  {data.creationTime.split("T")[0].replace(/-/g, "/")}
                </p>
              </li>
            </ul>
          </div>
        </>
      </Modal>
    </Binder>
  );
};

export default ModalImage;
