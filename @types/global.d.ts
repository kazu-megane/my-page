import { Store } from "redux";

export declare global {
  interface Window {
    __NEXT_DATA__: any;
    __NEXT_REDUX_STORE__: Store;

    // pageviewのため
    gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
    // eventのため
    gtag(
      type: 'event',
      eventAction: string,
      fieldObject: {
        event_label: string
        event_category: string
        value: number
      }
    )
  }
}
