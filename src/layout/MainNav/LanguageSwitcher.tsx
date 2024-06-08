"use client";

import { LOCALES, Locale } from "@/types/intl";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import flagEn from "@/assets/flags/en.svg";
import flagEs from "@/assets/flags/es.svg";
import { useLocale } from "@/hooks/useLocale";
import Image, { StaticImageData } from "next/image";
import { useDictionary } from "@/hooks/useDictionary";
import { NavLink } from "./NavLink";

const FLAGS: Record<Locale, StaticImageData> = { en: flagEn, es: flagEs };

const LANGUAGE_NAMES: Record<Locale, string> = { en: "English", es: "Español" };

export const LanguageSwitcher: FunctionComponent = () => {
  const locale = useLocale();
  const pathname = (usePathname() || "").split("/").slice(2).join("/");

  return (
    <>
      {LOCALES.filter((cur) => locale !== cur).map((locale) => (
        <NavLink
          key={locale}
          href={`/${locale}${pathname ? `/${pathname}` : ""}`}
          icon={({ size }) => (
            <Image
              src={FLAGS[locale]}
              alt={`${LANGUAGE_NAMES[locale]}`}
              width={Number(size)}
              height={Number(size)}
            />
          )}
        >
          {LANGUAGE_NAMES[locale]}
        </NavLink>
      ))}
    </>
  );
};
