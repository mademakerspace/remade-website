"use client";

import { FunctionComponent, PropsWithChildren, createContext } from "react";
import type DictJSON from "@/dictionaries/en.json";
import { DeepPartial } from "@/types/utils";

type Dictionary = typeof DictJSON;

interface IntlContextValue {
  dictionary: DeepPartial<Dictionary>;
}

export const IntlContext = createContext<IntlContextValue>(
  {} as any as IntlContextValue,
);

export const IntlContextProvider: FunctionComponent<
  PropsWithChildren<{ dictionary: Dictionary }>
> = ({ dictionary, children }) => (
  <IntlContext.Provider value={{ dictionary }}>{children}</IntlContext.Provider>
);
