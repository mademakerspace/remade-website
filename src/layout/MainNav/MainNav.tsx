import {
  type Icon,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandGoogleMaps,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

export const MainNav: FunctionComponent = () => (
  <nav className="bg-deep-dark px-6 text-sm flex gap-3 items-center rounded-xl mb-6 justify-between lg:justify-center lg:gap-10 font-normal">
    <NavLink
      href="https://www.instagram.com/made_maker_bcn"
      icon={IconBrandInstagram}
      external
    >
      Instagram
    </NavLink>

    <NavLink
      href="https://t.me/+ZfAwT8CPnr8wMmE0"
      icon={IconBrandTelegram}
      external
    >
      Telegram
    </NavLink>

    <NavLink
      href="https://www.facebook.com/made.bcn"
      icon={IconBrandFacebook}
      external
    >
      Facebook
    </NavLink>

    <NavLink
      href="https://maps.app.goo.gl/WoL1BoXyWfFDWF5XA"
      icon={IconBrandGoogleMaps}
      external
    >
      Google Maps
    </NavLink>

    <NavLink href="mailto:info@made-bcn.org" icon={IconMail} external>
      Email
    </NavLink>
  </nav>
);

const NavLink: FunctionComponent<
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
