import { type } from "os";
import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  customCSS?: string;
  handleClick?: MouseEventHandler<HTMLBRElement>;
  type: "button" | "submit";
}
