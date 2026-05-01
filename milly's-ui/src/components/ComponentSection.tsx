import { useState, type ChangeEvent, type JSX, type ReactNode } from "react";
import {
  ComponentSectionContext,
  type ComponentSectionContextType,
} from "../contexts/componentSectioncontext";

type componentSize = "small" | "medium" | "large";

export function ComponentSection({
  name,
  children,
  variants,
}: {
  name: string;
  children: ReactNode;
  variants: string[];
}): JSX.Element {
  const [variant, setVariant] = useState<string>("primary");
  const [size, setSize] = useState<componentSize>("medium");

  const handleVariantChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setVariant(e.target.value);
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSize(e.target.value as componentSize);
  };
  const contextValue: ComponentSectionContextType = {
    variant,
    size,
  };
  return (
    <ComponentSectionContext value={contextValue}>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="component-name">{name}</h2>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <select onChange={handleVariantChange} value={variant}>
              {variants.map((variant) => {
                return (
                  <option
                    style={{
                      textTransform: "capitalize",
                    }}
                    value={variant}
                  >
                    {variant}
                  </option>
                );
              })}
            </select>
            <select value={size} onChange={handleSizeChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div className="component-container">{children}</div>
      </section>
    </ComponentSectionContext>
  );
}
