"use client";

import { Locale } from "@/types/intl";
import { useParams } from "next/navigation";

export const useLocale = () => useParams()?.locale as Locale;
