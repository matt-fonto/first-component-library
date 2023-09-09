import { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger";
};
