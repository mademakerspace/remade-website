"use client";

import { FunctionComponent, PropsWithChildren, createContext } from "react";
import type DictJSON from "@/dictionaries/en.json";

type Dictionary = typeof DictJSON;

interface IntlContextValue {
  dictionary: Dictionary;
}

export const IntlContext = createContext<IntlContextValue>(
  {} as any as IntlContextValue,
);

export const IntlContextProvider: FunctionComponent<
  PropsWithChildren<{ dictionary: Dictionary }>
> = ({ dictionary, children }) => (
  <IntlContext.Provider value={{ dictionary }}>{children}</IntlContext.Provider>
);
