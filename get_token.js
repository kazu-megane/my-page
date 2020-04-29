"use strict";

// 下記コードはnode v4.3以上で動作します。
const CLIENT_ID = "";
const CLIENT_SECRET = "";

const { google } = require("googleapis");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
const SCOPE = ["https://www.googleapis.com/auth/photoslibrary.readonly"];
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
let getAccessToken = (oauth2Client) => {
  // OAuth2認証のためのURLを生成する
  let url = oauth2Client.generateAuthUrl({
    access_type: "offline", // refresh_tokenが必要なので、offlineを指定
    scope: SCOPE,
  });

  console.log("右記のURLをブラウザで開いてください: ", url);
  rl.question("表示されたコードを貼り付けてください: ", (code) => {
    oauth2Client.getToken(code, (err, tokens) => {
      console.log("トークンが発行されました");
      console.log(tokens);
      console.log("上記の情報を大切に保管してください");
    });
  });
};

getAccessToken(oauth2Client);
