import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, loadingSelectors } from "~/lib/state/loading";
import { photoSelectors } from "~/lib/state/photo";
import WorkDetailTemplateComponent, { Props as ComponentProps } from "./component";
import { PAGE_TYPE } from "~/components/constants";

export type Props = Pick<ComponentProps, 'id'>;

const WorkDetailTemplate: FC<Props> = ({ id }) => {
  const photo = useSelector(photoSelectors);
  const loading = useSelector(loadingSelectors);
  const dispatch = useDispatch();

  const onClickLink = useCallback(
    (context) => {
      if (context === PAGE_TYPE.PHOTO && !photo.images.length) {
        dispatch(setLoading(true));
      } else {
        dispatch(setLoading(false));
      }
    },
    [dispatch, photo]
  );

  return (
    <WorkDetailTemplateComponent id={id} onClick={onClickLink} isLoading={loading.isLoading} />
  );
};

export default WorkDetailTemplate;
