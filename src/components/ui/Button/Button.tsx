import type { ComponentType } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  Icon?: ComponentType;
  variant?: "primary" | "secondary" | "alternate";
  isRounded?: boolean;
};

export function Button({ text, Icon, variant, isRounded }: ButtonProps) {
  const buttonVariant = variant ?? "primary";
  const rounded = isRounded ? "rounded-cta" : "";

  return (
    <div className={`cta ${buttonVariant}-cta ${rounded}`}>
      {Icon && <Icon />}
      <span>{text}</span>
    </div>
  );
}
