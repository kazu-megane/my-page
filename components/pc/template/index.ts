import { connect } from "react-redux";
import {} from "next/link";
import PageTemplate, { Props, DispatchProps } from "./component";
import { StateProps } from "~/lib/state";
import { Dispatch } from "redux";

export { PageType } from "./component";
export type PageTemplateProps = Props;

function mapStateToProps({
  photo,
  loading,
}: StateProps): Pick<Props, "images" | "isLoading"> {
  return {
    images: photo.images,
    isLoading: loading.isLoading,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    onClick: (content) => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
