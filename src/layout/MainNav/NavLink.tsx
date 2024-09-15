import { type Icon } from "@tabler/icons-react";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

export const NavLink: FunctionComponent<
  PropsWithChildren<{
    href: string;
    external?: boolean;
    icon?: Icon;
    title?: string;
  }>
> = ({ href, external = false, children, icon: Icon, title }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-body hover:text-contrast-light transition-colors py-3"
    title={title}
    {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
  >
    {!!Icon && (
      <Icon
        size={16}
        stroke={1.5}
        className="sm:opacity-60 max-sm:w-6 max-sm:h-6 max-md:stroke-[1px]"
      />
    )}
    <span className="max-sm:hidden">{children}</span>
  </Link>
);
