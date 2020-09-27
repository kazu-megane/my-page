import fetch from "node-fetch";

export async function fetcher(url: string, option?: Record<string, any>) {
  return (await fetch(url, option)).json().catch((error) => {
    console.log("fetch error:", error);
    throw new Error(error);
  });
}
