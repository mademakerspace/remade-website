import { Icon } from "@tabler/icons-react";
import { FunctionComponent, PropsWithChildren } from "react";

export const ContentSection: FunctionComponent<
  PropsWithChildren<{ icon?: Icon; title?: string }>
> = ({ icon: Icon, title, children }) => (
  <div className="my-12">
    {!!title && (
      <h1 className="flex flex-col gap-2 items-center text-secondary text-2xl mb-3">
        {!!Icon && <Icon size={40} stroke={0.7} />}
        {title}
      </h1>
    )}

    {children}
  </div>
);
