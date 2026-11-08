import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "default" | "narrow" | "wide";
} & ComponentPropsWithoutRef<T>;

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-360",
  wide: "max-w-[1680px]",
};

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
