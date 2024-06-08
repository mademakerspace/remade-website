import { Icon } from "@tabler/icons-react";
import { FunctionComponent, PropsWithChildren } from "react";

export const ContentSection: FunctionComponent<
  PropsWithChildren<{ icon?: Icon; title?: string }>
> = ({ icon: Icon, title, children }) => (
  <div className="my-12 max-md:my-6">
    {!!title && (
      <h1 className="flex md:flex-col gap-2 items-center text-secondary text-2xl mb-3 max-md:justify-center max-md:mb-6">
        {!!Icon && (
          <Icon size={40} className="max-md:w-8 max-md:h-8" stroke={0.7} />
        )}
        {title}
      </h1>
    )}

    <div className="md:text-center">{children}</div>
  </div>
);
