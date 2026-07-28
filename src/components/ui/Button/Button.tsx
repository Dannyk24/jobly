import type { ComponentType } from "react";
import "./Button.css";

type ButtonProps = {
  text?: string;
  Icon?: ComponentType;
  variant?: "primary" | "secondary" | "alternate";
  isRounded?: boolean;
  width?: string;
};

export function Button({ text, Icon, variant, isRounded, width }: ButtonProps) {
  const buttonVariant = variant ?? "primary";
  const rounded = isRounded ? "rounded-cta" : "";

  return (
    <div
      className={`cta ${buttonVariant}-cta ${rounded}`}
      style={{
        width: width,
      }}
    >
      {Icon && <Icon />}
      {text && <span>{text}</span>}
    </div>
  );
}
