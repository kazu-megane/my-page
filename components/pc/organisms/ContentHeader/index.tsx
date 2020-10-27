import React, { FC } from "react";
import Binder from "../../../all/atoms/helpers/Binder";
import style from "./index.module.scss";

export const CONTENT_TYPE = {
  ABOUT: "ABOUT",
  WORK: "WORK",
  PHOTO: "PHOTO",
  VIDEO: "VIDEO",
  CONTACT: "CONTACT",
} as const;

type Props = {
  className?: string;
  contentType: typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE];
};

function switchText(
  contentType: typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE]
) {
  switch (contentType) {
    case CONTENT_TYPE.ABOUT:
      return "About";
    case CONTENT_TYPE.WORK:
      return 'Work';
    case CONTENT_TYPE.PHOTO:
      return "Photo";
    case CONTENT_TYPE.VIDEO:
      return "Video";
    case CONTENT_TYPE.CONTACT:
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
