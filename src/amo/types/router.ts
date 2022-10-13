import type { QueryParams } from 'amo/types/api';

type PushParams = {
  pathname: string;
  query: QueryParams;
};
export type LocationType = {
  hash: string;
  // e.g. #some-anchor
  key: string;
  pathname: string;
  // e.g. /en-US/firefox/addon/tab-mix-plus/reviews/
  search: string;
  // e.g. ?q=search-strin
  state?: Record<string, any>;
  // sometimes available, this should probably not be used.
  // This is a parsed representation of the query string in object form, it is
  // added by the `addQueryParamsToHistory()` helper in `amo/utils`.
  query: QueryParams;
};
export type ReactRouterLocationType = LocationType & {
  action: 'POP' | 'PUSH';
};
export type ReactRouterHistoryType = {
  goBack: () => void;
  listen: () => void;
  location: ReactRouterLocationType;
  push: (pushURL: string | PushParams) => void;
};
export type ReactRouterMatchType = {
  isExact: boolean;
  params: Record<string, any>;
  path: string;
  url: string;
};