import {
  createSlice,
  PayloadAction,
  Dispatch,
  createEntityAdapter,
  Selector,
  createSelector,
} from "@reduxjs/toolkit";
import { fetcher } from "../logics";
import { setLoading, loadingSelectors } from "~/lib/state/loading";
import { StateProps } from "~/lib/state";

const PAGE_SIZE = "51";

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
  accessToken: string;
  nextPageToken: string;
  images: ImageProps[];
};

const initialState: Props = {
  accessToken: "",
  nextPageToken: "",
  images: [],
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    fetchSuccess: (
      state,
      action: PayloadAction<{
        nextPageToken: string;
        mediaItems: Array<Record<string, any>>;
      }>
    ) => {
      // fetchしてきたものをサイト用に整形
      const nextPageToken = action.payload.nextPageToken;
      const images = action.payload.mediaItems.map((item: any) => {
        return {
          url: item.baseUrl,
          alt: item.filename,
          data: item.mediaMetadata,
        };
      });

      const newImages = [...state.images, ...images];

      return {
        ...state,
        nextPageToken,
        images: newImages,
      };
    },
  },
});

export const { fetchSuccess, setAccessToken } = photoSlice.actions;

// selectors
export const photoSelectors = (state: StateProps) => state.photo;

export const fetchPhotoItems = (accessToken: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  const state = getState();
  const photo = photoSelectors(state);
  const loading = loadingSelectors(state);

  dispatch(setAccessToken(accessToken));

  if (!photo.images.length) {
    if (!loading.isLoading) {
      dispatch(setLoading(true));
    }
    try {
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
                pageSize: PAGE_SIZE,
                albumId:
                  "AC2o_TmhQyq8bUzBgt5nx0_CE5lXSvEv5wbMxKaQMcMot69TbjxhXcUlaDyxKTuaTLxF12up1GGD",
              }),
            }
          )
        )
      );
    } catch (error) {
      // TODO: fetchのエラー処理をここに書く
      console.log("fetch error:", error);
    }
  }
  dispatch(setLoading(false));
};

export const fetchNextPhotoItems = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const state = getState();
  const photo = photoSelectors(state);

  const accessToken = photo.accessToken;
  const nextPageToken = photo.nextPageToken;

  try {
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
              pageSize: PAGE_SIZE,
              albumId:
                "AC2o_TmhQyq8bUzBgt5nx0_CE5lXSvEv5wbMxKaQMcMot69TbjxhXcUlaDyxKTuaTLxF12up1GGD",
              pageToken: nextPageToken,
            }),
          }
        )
      )
    );
  } catch (error) {
    // TODO: fetchのエラー処理をここに書く
    console.log("fetch error:", error);
  }
};

// const photosAdapter = createEntityAdapter<>

export default photoSlice.reducer;
