import { type Icon } from "@tabler/icons-react";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

export const NavLink: FunctionComponent<
  PropsWithChildren<{ href: string; external?: boolean; icon?: Icon }>
> = ({ href, external = false, children, icon: Icon }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-body hover:text-contrast-light transition-colors py-5"
    {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
  >
    {!!Icon && <Icon size={16} stroke={1.5} className="opacity-60" />}
    {children}
  </Link>
);
