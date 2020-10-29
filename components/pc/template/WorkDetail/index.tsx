import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, loadingSelectors } from "~/lib/state/loading";
import { photoSelectors } from "~/lib/state/photo";
import WorkDetailTemplateComponent, { Props as ComponentProps } from "./component";
import { MINIMUM_WAIT_TIME } from "~/components/constants";

export type Props = Pick<ComponentProps, 'id'>;

const WorkDetailTemplate: FC<Props> = ({ id }) => {
  const photo = useSelector(photoSelectors);
  const loading = useSelector(loadingSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, MINIMUM_WAIT_TIME);

    return () => {
      clearTimeout(timer);
    }
  }, [id]);

  const onClickLink = useCallback(
    (_context) => {
      dispatch(setLoading(true));
    },
    [dispatch, photo]
  );

  return (
    <WorkDetailTemplateComponent id={id} onClick={onClickLink} isLoading={loading.isLoading} />
  );
};

export default WorkDetailTemplate;
