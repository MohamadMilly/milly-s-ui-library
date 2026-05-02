import { createContext, type Context } from "react";

export const ComponentSectionContext: Context<{
  properties: { [key: string]: unknown };
}> = createContext({ properties: {} });
