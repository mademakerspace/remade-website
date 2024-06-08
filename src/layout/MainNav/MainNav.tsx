import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandGoogleMaps,
  IconMail,
} from "@tabler/icons-react";
import { FunctionComponent } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavLink } from "./NavLink";

export const MainNav: FunctionComponent = () => (
  <div className="flex justify-center mb-6">
    <nav className="bg-deep-dark px-6 text-sm flex gap-6 items-center rounded-xl justify-center lg:gap-10 font-normal">
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

      <LanguageSwitcher />
    </nav>
  </div>
);
