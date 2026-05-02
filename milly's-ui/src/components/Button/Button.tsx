import {
  type JSX,
  type ReactNode,
  type CSSProperties,
  useContext,
} from "react";
import styles from "./Button.module.css";

import { ComponentSectionContext } from "../../contexts/componentSectioncontext";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  style: CSSProperties;
  size: string;
  variant: string;
};

export function ButtonContainer(props: Omit<ButtonProps, "size" | "variant">) {
  const { properties } = useContext(ComponentSectionContext);

  const variant = (properties["variant"] as string) ?? "primary";
  const size = (properties["size"] as string) ?? "medium";

  return (
    <Button {...props} variant={variant} size={size}>
      {props.children}
    </Button>
  );
}

export function Button({
  children,
  onClick,
  style = {},
  size = "medium",
  variant = "danger",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.base} ${styles[size]} ${styles[variant]}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
