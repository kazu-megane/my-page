import React, { FC } from "react";
import Modal from "~/components/all/atoms/Modal";
import Binder from "~/components/all/atoms/helpers/Binder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import style from "./index.module.scss";

interface PhotoProps {
  cameraMake?: string;
  cameraModel?: string;
  focalLength?: number;
  apertureFNumber?: number;
  isoEquivalent?: number;
  exposureTime?: string;
}

interface DataProps {
  creationTime: string;
  width: string;
  height: string;
  photo?: PhotoProps;
}

export interface Props {
  url: string;
  alt: string;
  data: DataProps;
  onClick: () => void;
  className?: string;
}

const ModalImage: FC<Props> = ({ url, alt, data, onClick, className }) => {
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

  return (
    <Binder classNames={[style.ModalImage, className]}>
      <Modal>
        <a onClick={onClick} className={style.ModalImage__trigger}>
          <div className={style.ModalImage__background}></div>
        </a>
        <div className={style.ModalImage__mainArea}>
          <p className={style.ModalImage__close}>
            <a className={style.ModalImage__closeLink} onClick={onClick}></a>
          </p>
          <p className={style.ModalImage__image}>
            <img
              src={url}
              alt={alt}
              className={style.ModalImage__imageContent}
            />
          </p>
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
      </Modal>
    </Binder>
  );
};

export default ModalImage;
