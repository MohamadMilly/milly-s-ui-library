import {
  useMemo,
  useState,
  type ChangeEvent,
  type JSX,
  type ReactNode,
} from "react";

import { ComponentSectionContext } from "../contexts/componentSectioncontext";

export type ComponentProperty<T = unknown> = {
  name: string;
  values: T[];
  value: T;
  interfaceType: "select" | "checkbox" | "radio";
};

function Controls({
  handlePropertyChange,
  config,
}: {
  handlePropertyChange: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    name: string,
  ) => void;
  config: ComponentProperty[];
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      {config.map((property: ComponentProperty) => {
        switch (property.interfaceType) {
          case "select":
            return (
              <select
                value={property.value as number | string}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
                ): void => handlePropertyChange(e, property.name)}
              >
                {property.values.map((value) => {
                  return (
                    <option value={value as number | string}>
                      {value as number | string}
                    </option>
                  );
                })}
              </select>
            );
        }
      })}
    </div>
  );
}

export function ComponentSection({
  name,
  children,
  config,
}: {
  name: string;
  children: ReactNode;
  config: ComponentProperty[];
}): JSX.Element {
  const initialProperties = useMemo(() => {
    const propertiesEntries = config.map((property: ComponentProperty) => {
      return [property.name, property.value];
    });
    return Object.fromEntries(propertiesEntries);
  }, [config]);
  const [properties, setProperties] = useState<{ [key: string]: unknown }>(
    initialProperties,
  );

  const handlePropertyChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string,
  ): void => {
    setProperties((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const contextValue = {
    properties,
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
          <Controls
            handlePropertyChange={handlePropertyChange}
            config={config}
          />
        </div>
        <div className="component-container">{children}</div>
      </section>
    </ComponentSectionContext>
  );
}
