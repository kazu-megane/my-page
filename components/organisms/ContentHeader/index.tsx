import React, { FC } from "react";
import Binder from "../../atoms/helpers/Binder/";
import style from "./index.module.scss";

export enum ContentType {
  ABOUT = "ABOUT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  CONTACT = "CONTACT",
}

interface Props {
  className?: string;
  contentType: ContentType;
}

function switchText(contentType: ContentType) {
  switch (contentType) {
    case ContentType.ABOUT:
      return "About";
    case ContentType.PHOTO:
      return "Photo";
    case ContentType.VIDEO:
      return "Video";
    case ContentType.CONTACT:
      return "Contact";
    default:
      return "";
  }
}

const ContentHeader: FC<Props> = ({ contentType, className }) => (
  <Binder classNames={[style.ContentHeader, className]}>
    <div>
      <p className={style.ContentHeader__title}>{switchText(contentType)}</p>
    </div>
  </Binder>
);

export default ContentHeader;
