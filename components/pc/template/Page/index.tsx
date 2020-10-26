import React, { FC, useCallback } from "react";
import PageTemplateComponent, { Props as ComponentProps } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPhotoItems, photoSelectors } from "~/lib/state/photo";
import { setLoading } from "~/lib/state/loading";
import { loadingSelectors } from "~/lib/state/loading";
import { PAGE_TYPE } from "~/components/constants";

export type Props = Pick<ComponentProps, "pageType">;

const PageTemplate: FC<Props> = ({ pageType }) => {
  const photo = useSelector(photoSelectors);
  const loading = useSelector(loadingSelectors);
  const dispatch = useDispatch();

  const onClickLink = useCallback(
    (context) => {
      if (context === PAGE_TYPE.PHOTO && !photo.images.length) {
        dispatch(setLoading(true));
      }
    },
    [dispatch, photo]
  );

  const onClickMore = useCallback(() => {
    dispatch(fetchNextPhotoItems());
  }, [dispatch]);

  return (
    <PageTemplateComponent
      pageType={pageType}
      images={photo.images}
      hasNext={!!photo.nextPageToken}
      onClick={onClickLink}
      onClickMore={onClickMore}
      isLoading={loading.isLoading}
    />
  );
};

export default PageTemplate;
