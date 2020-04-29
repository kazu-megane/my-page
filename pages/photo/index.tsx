import React, { useLayoutEffect, useState } from "react";
import PcPageTemplate, {
  PageType,
  Props,
} from "~/components/pc/template/component";
import { NextPage, GetServerSideProps } from "next";
import SpPageTemplate from "~/components/sp/template/component";
import { useMediaQuery } from "react-responsive";
import fetch from "node-fetch";
import { google } from "googleapis";

const Photo: NextPage<Pick<Props, "images">> = ({ images }) => {
  const [isServer, setIsServer] = useState(true);
  const isPc = useMediaQuery({ minWidth: 768 });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setIsServer(false);
    }
  }, []);

  return isServer || isPc ? (
    <PcPageTemplate pageType={PageType.PHOTO} images={images} />
  ) : (
    <SpPageTemplate pageType={PageType.PHOTO} images={images} />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req
    ? context.req.headers["user-agent"]
    : navigator.userAgent;

  let agent: string = "";

  if (userAgent) {
    if (
      userAgent.match(/iPhone|Android.+Mobile/) ||
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("macintosh") > -1
    ) {
      agent = "smartphone";
    } else {
      agent = "pc";
    }
  }

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

  const res = await fetch(
    "https://photoslibrary.googleapis.com/v1/mediaItems:search",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access_token,
      },
      body: JSON.stringify({
        pageSize: "100",
        albumId:
          "AC2o_TmhQyq8bUzBgt5nx0_CE5lXSvEv5wbMxKaQMcMot69TbjxhXcUlaDyxKTuaTLxF12up1GGD",
      }),
    }
  );

  const posts = await res.json();

  const images = posts.mediaItems.map((item: any) => {
    return {
      url: item.baseUrl,
      alt: item.filename,
    };
  });

  return {
    props: {
      userAgent: agent,
      images,
    },
  };
};

export default Photo;
