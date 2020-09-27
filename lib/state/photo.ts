import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { fetcher } from "../logics";
import { setLoading } from "~/lib/state/loading";
import { StateProps } from "~/lib/state";

type PhotoProps = {
  cameraMake: string;
  cameraModel: string;
  focalLength: number;
  apertureFNumber: number;
  isoEquivalent: number;
  exposureTime: string;
};

type DataProps = {
  creationTime: string;
  width: string;
  height: string;
  photo?: PhotoProps;
};

type ImageProps = {
  url: string;
  alt: string;
  data: DataProps;
};

export type Props = {
  nextPageToken: string;
  images: ImageProps[];
};

const initialState: Props = {
  nextPageToken: "",
  images: [],
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<any>) => {
      // fetchしてきたものをサイト用に整形
      const nextPageToken = action.payload.nextPageToken;
      const images = action.payload.mediaItems.map((item: any) => {
        return {
          url: item.baseUrl,
          alt: item.filename,
          data: item.mediaMetadata,
        };
      });

      return {
        ...state,
        nextPageToken,
        images,
      };
    },
  },
});

export const { fetchSuccess } = photoSlice.actions;

export const fetchPhotoItems = (accessToken: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(setLoading(true));
    dispatch(
      fetchSuccess(
        await fetcher(
          "https://photoslibrary.googleapis.com/v1/mediaItems:search",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify({
              pageSize: "100",
              albumId:
                "AC2o_TmhQyq8bUzBgt5nx0_CE5lXSvEv5wbMxKaQMcMot69TbjxhXcUlaDyxKTuaTLxF12up1GGD",
            }),
          }
        )
      )
    );
    dispatch(setLoading(false));
  } catch (error) {
    // TODO: fetchのエラー処理をここに書く
    console.log("fetch error:", error);
  }
};

// selectors
export const selectPhoto = (state: StateProps) => state.photo;

export default photoSlice.reducer;
