import { IntlContext } from "@/context/intl";
import { useContext } from "react";

export const useDictionary = () => useContext(IntlContext)?.dictionary || {};
