import { getDictionaryByContext } from "@/config/intl";
import { IntlContextProvider } from "@/context/intl";
import { MainNav } from "@/layout/MainNav/MainNav";
import { PageContext } from "@/types/next";
import { PropsWithChildren } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const Layout = async ({
  children,
  ...context
}: PropsWithChildren & PageContext) => {
  const dictionary = await getDictionaryByContext(context);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>

      <body>
        <IntlContextProvider dictionary={dictionary}>
          <div className="max-w-[900px] mx-auto px-6">
            <div className="flex justify-center my-10">
              <Image src={logo} alt="ReMade logo" width={160} />
            </div>

            <MainNav />
            {children}
          </div>
        </IntlContextProvider>
      </body>
    </html>
  );
};

export default Layout;
