import { HomePage } from "@/pages/Home/Home";
import { LOCALES } from "@/types/intl";

export default function Page() {
  return <HomePage />;
}

export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }));
