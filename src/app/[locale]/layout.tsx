import { getDictionaryByContext } from "@/config/intl";
import { IntlContextProvider } from "@/context/intl";
import { MainNav } from "@/layout/MainNav/MainNav";
import { PageContext } from "@/types/next";
import { PropsWithChildren } from "react";
import Image from "next/image";

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
          content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"
        />
      </head>

      <body>
        <IntlContextProvider dictionary={dictionary}>
          <div className="fixed inset-0 pointer-events-none">
            <Image
              src={require("@/assets/layout/bg-top-left.svg")}
              alt=""
              className="absolute top-0 left-0 max-lg:w-[150px]"
            />

            <Image
              src={require("@/assets/layout/bg-top-right.svg")}
              alt=""
              className="absolute top-0 right-0 max-lg:w-[150px]"
            />
          </div>

          <div className="max-w-[900px] mx-auto px-6 relative">
            <div className="flex justify-center my-10 max-md:mb-6 max-md:mt-7">
              <Image
                src={require("@/assets/logo.svg")}
                alt="ReMade logo"
                width={160}
                className="max-md:hidden"
              />
              <Image
                src={require("@/assets/logo-inline.svg")}
                alt="ReMade logo"
                width={280}
                className="md:hidden"
              />
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
