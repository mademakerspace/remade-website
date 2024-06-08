import type { ReactNode } from "react";
import { Locale } from "./intl";

interface BaseParams {
  locale: Locale;
}

export interface PageContext<Params = {}> {
  params: BaseParams & Params;
}

export type PageComponent<Params = {}> = (
  context: PageContext<Params>,
) => ReactNode | Promise<ReactNode>;
