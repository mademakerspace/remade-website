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
  <div className="flex justify-center mb-6 max-md:mb-3">
    <nav className="bg-deep-dark px-6 text-sm flex gap-6 items-center rounded-xl justify-center lg:gap-10 font-normal">
      <NavLink
        href="https://www.instagram.com/made_maker_bcn"
        icon={IconBrandInstagram}
        title="Instagram"
        external
      >
        Instagram
      </NavLink>

      <NavLink
        href="https://t.me/+ZfAwT8CPnr8wMmE0"
        icon={IconBrandTelegram}
        title="Telegram"
        external
      >
        Telegram
      </NavLink>

      <NavLink
        href="https://www.facebook.com/made.bcn"
        title="Facebook"
        icon={IconBrandFacebook}
        external
      >
        Facebook
      </NavLink>

      <NavLink
        href="https://maps.app.goo.gl/WoL1BoXyWfFDWF5XA"
        title="Google Maps"
        icon={IconBrandGoogleMaps}
        external
      >
        Google Maps
      </NavLink>

      <NavLink
        href="mailto:info@made-bcn.org"
        title="E-mail"
        icon={IconMail}
        external
      >
        Email
      </NavLink>

      <LanguageSwitcher />
    </nav>
  </div>
);
