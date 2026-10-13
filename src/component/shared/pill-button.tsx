import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

const pillClassName =
  "inline-flex h-10 items-center justify-center rounded-full border border-[#FFFFFF08] bg-[linear-gradient(180deg,#0979F2_0%,#001A3D_100%)] px-6 text-sm font-medium text-white backdrop-blur-[301.6px] sm:h-12 sm:px-8 sm:text-base";

type PillButtonProps = ComponentProps<"button"> & {
  href?: undefined;
};

type PillLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  href: ComponentProps<typeof Link>["href"];
  className?: string;
};

export function PillButton({
  className,
  ...props
}: PillButtonProps | PillLinkProps) {
  if ("href" in props && props.href != null) {
    return <Link className={cn(pillClassName, className)} {...props} />;
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={cn(pillClassName, className)} {...buttonProps} />
  );
}
