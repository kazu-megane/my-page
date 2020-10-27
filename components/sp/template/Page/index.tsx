import React, { FC, useCallback, useEffect } from "react";
import PageTemplateComponent, { Props as ComponentProps } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPhotoItems, photoSelectors } from "~/lib/state/photo";
import { setLoading, loadingSelectors } from "~/lib/state/loading";
import { pageSelectors, setColumnNum } from "~/lib/state/page";
import { PAGE_TYPE } from "~/components/constants";

export type Props = Pick<ComponentProps, "pageType">;

const PageTemplate: FC<Props> = ({ pageType }) => {
  const photo = useSelector(photoSelectors);
  const loading = useSelector(loadingSelectors);
  const page = useSelector(pageSelectors);
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

  const onClickMore = useCallback(() => {
    dispatch(fetchNextPhotoItems());
  }, [dispatch]);

  const onClickNumButton = useCallback(
    (payload: number) => {
      dispatch(setColumnNum(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplateComponent
      pageType={pageType}
      images={photo.images}
      columnNum={page.columnNum}
      hasNext={!!photo.nextPageToken}
      onClick={onClickLink}
      onClickMore={onClickMore}
      onClickNumButton={onClickNumButton}
      isLoading={loading.isLoading}
    />
  );
};

export default PageTemplate;
