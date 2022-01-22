import fetch from "node-fetch";

export async function fetcher(
  url: string,
  option?: Record<string, any>
): Promise<any> {
  return (await fetch(url, option)).json().catch((error) => {
    throw new Error(error);
  });
}
