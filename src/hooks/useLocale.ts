"use client";

import { DEFAULT_LOCALE, Locale } from "@/types/intl";
import { useParams } from "next/navigation";

export const useLocale = () =>
  (useParams()?.locale as Locale | undefined) || DEFAULT_LOCALE;
