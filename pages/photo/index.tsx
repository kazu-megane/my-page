import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PcPageTemplate, {
  PageType as PcPageType,
} from "~/components/pc/template";
import { NextPage, GetServerSideProps } from "next";
import SpPageTemplate, {
  PageType as SpPageType,
} from "~/components/sp/template";
import { wrapper } from "~/lib/strore";
import { google } from "googleapis";
import { fetchPhotoItems, photoSelectors } from "~/lib/state/photo";

type Props = {
  isPc: boolean;
  accessToken: string;
};

const Photo: NextPage<Props> = ({ isPc, accessToken }) => {
  const [isFirst, setIsFirst] = useState(true);
  const [isDesktop, setIsDesktop] = useState(isPc);
  const photo = useSelector(photoSelectors);
  const dispatch = useDispatch();

  const fetchPhoto = useCallback(() => {
    dispatch(fetchPhotoItems(accessToken));
  }, [dispatch]);

  function judgeDevice() {
    if (window.innerWidth <= 768) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    if (window) {
      judgeDevice();
      window.addEventListener("resize", judgeDevice);
    }
  }, []);

  useEffect(() => {
    if (!isFirst && photo.images.length <= 0) {
      fetchPhoto();
    }
    if (isFirst) {
      setIsFirst(false);
    }
  }, [isFirst]);

  return isDesktop ? (
    <PcPageTemplate pageType={PcPageType.PHOTO} />
  ) : (
    <SpPageTemplate pageType={SpPageType.PHOTO} />
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // accessTokenを取得
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URL = "";
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL
    );

    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });

    const refreshAccessToken = () => {
      return new Promise((resolve, reject) => {
        oauth2Client.refreshAccessToken((err, res) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    };
    const token: any = await refreshAccessToken();

    // SSR時のua判定をする
    const ua = context.req.headers["user-agent"];
    const isPc = ua && !ua.match(/like mac os x/) && !ua.match(/android/);

    return {
      props: {
        accessToken: token.access_token,
        isPc,
      },
    };
  }
);

export default Photo;
