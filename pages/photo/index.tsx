import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PcPageTemplate from "~/components/pc/template/Page";
import { NextPage, GetServerSideProps } from "next";
import SpPageTemplate from "~/components/sp/template";
import { wrapper } from "~/lib/strore";
import { google } from "googleapis";
import { fetchPhotoItems } from "~/lib/state/photo";
import { useJudgeDesktop } from "~/components/all/hooks/JudgeDesktop";
import { PAGE_TYPE } from "~/components/constants";

type Props = {
  isPc: boolean;
  accessToken: string;
};

const Photo: NextPage<Props> = ({ isPc, accessToken }) => {
  const isDesktop = useJudgeDesktop(isPc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotoItems(accessToken));
  }, [accessToken]);

  return isDesktop ? (
    <PcPageTemplate pageType={PAGE_TYPE.PHOTO} />
  ) : (
      <SpPageTemplate pageType={PAGE_TYPE.PHOTO} />
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
    const ua = context.req.headers["user-agent"]?.toLowerCase();
    const isPc =
      ua && !ua.match(/iphone|android.+mobile|like mac os x|instagram|line/);

    return {
      props: {
        accessToken: token.access_token,
        isPc,
      },
    };
  }
);

export default Photo;
