import { getDictionaryByContext } from "@/config/intl";
import { PageComponent } from "@/types/next";

const RootPage: PageComponent = async (context) => {
  await getDictionaryByContext(context);

  return <main>Redirecting...</main>;
};

export default RootPage;
