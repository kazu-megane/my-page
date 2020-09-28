import React, { FC, useCallback, useEffect } from "react";
import PageTemplateComponent, { Props } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPhotoItems, photoSelectors } from "~/lib/state/photo";
import { loadingSelectors } from "~/lib/state/loading";

export { PageType } from "./component";
export type PageTemplateProps = Props;

const PageTemplate: FC<Props> = ({ pageType }) => {
  const photo = useSelector(photoSelectors);
  const loading = useSelector(loadingSelectors);
  const dispatch = useDispatch();

  const onClickMore = useCallback(() => {
    dispatch(fetchNextPhotoItems());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplateComponent
      pageType={pageType}
      images={photo.images}
      hasNext={!!photo.nextPageToken}
      onClickMore={onClickMore}
      isLoading={loading.isLoading}
    />
  );
};

export default PageTemplate;
