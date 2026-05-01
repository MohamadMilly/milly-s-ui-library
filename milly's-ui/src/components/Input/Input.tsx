import {
  useContext,
  type ChangeEvent,
  type CSSProperties,
  type JSX,
} from "react";
import styles from "./Input.module.css";
import { ComponentSectionContext } from "../../contexts/componentSectioncontext";

type InputProps = {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  style: CSSProperties;
  size: string;
  variant: string;
};

export function InputContainer(
  props: Omit<InputProps, "variant" | "size">,
): JSX.Element {
  const { variant, size } = useContext(ComponentSectionContext);
  return <Input {...props} variant={variant} size={size} />;
}

export function Input({
  type,
  onChange,
  value,
  style = {},
  size = "medium",
  variant = "primary",
  ...props
}: InputProps): JSX.Element {
  return (
    <input
      style={style}
      className={`${styles.base} ${styles[size]} ${styles[variant]}`}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
