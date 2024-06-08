import { Icon } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

type ButtonVariant = "contrast";

const CNAMES: Record<
  "base" | ButtonVariant,
  { container?: string; outline?: string; filled?: string; icon?: string }
> = {
  base: {
    container:
      "flex gap-3 items-center px-6 py-3 rounded-full bg-contrast focus:outline-0 transition-colors",

    outline: "border !bg-transparent",

    filled: "!text-base",
  },

  contrast: {
    container:
      "bg-contrast border-contrast text-contrast hover:bg-contrast-light",
    outline: "hover:!bg-contrast/10",
  },
};

export const Button: FunctionComponent<
  PropsWithChildren<{
    iconLeft?: Icon;
    iconRight?: Icon;
    variant?: ButtonVariant;
    outline?: boolean;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  }>
> = ({
  outline = false,
  variant = "contrast",
  children,
  iconLeft: IconLeft,
  iconRight: IconRight,
  href,
  onClick,
  external,
}) => {
  const classNames = {
    container: clsx(
      CNAMES.base.container,
      CNAMES[variant].container,
      outline
        ? [CNAMES.base.outline, CNAMES[variant].outline]
        : [CNAMES.base.filled, CNAMES[variant].filled],
    ),
  };

  const inner = (
    <>
      {IconLeft && <IconLeft size={20} stroke={1} />}
      {children}
      {IconRight && <IconRight size={20} stroke={1} />}
    </>
  );

  return href ? (
    <Link
      className={classNames.container}
      href={href}
      onClick={onClick}
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {inner}
    </Link>
  ) : (
    <button className={classNames.container} onClick={onClick}>
      {inner}
    </button>
  );
};
