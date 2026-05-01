import { createContext, type Context } from "react";

export type ComponentSectionContextType = {
  variant: string;
  size: "small" | "medium" | "large";
};

export const ComponentSectionContext: Context<ComponentSectionContextType> =
  createContext({
    variant: "primary",
    size: "medium",
  } as ComponentSectionContextType);
