import "server-only";

import { PageContext } from "@/types/next";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, Locale } from "@/types/intl";

export const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  ca: () => import("@/dictionaries/ca.json").then((module) => module.default),
} as const;

const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionaryByContext = ({ params: { locale } }: PageContext) => {
  if (!locale) return redirect(DEFAULT_LOCALE);
  return getDictionary(locale);
};
