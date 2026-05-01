import {
  useContext,
  useRef,
  type ChangeEvent,
  type CSSProperties,
  type JSX,
} from "react";
import styles from "./Textarea.module.css";
import { ComponentSectionContext } from "../../contexts/componentSectioncontext";

type TextareaProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  style: CSSProperties;
  size: string;
  inputLike: boolean;
  variant: string;
};

export function TextareaContainer(
  props: Omit<TextareaProps, "variant" | "size">,
) {
  const { variant, size } = useContext(ComponentSectionContext);
  return <Textarea {...props} variant={variant} size={size} />;
}

export function Textarea({
  onChange,
  value,
  style = {},
  size = "medium",
  variant = "primary",
  inputLike = false,
  ...props
}: TextareaProps): JSX.Element {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const styles: CSSStyleDeclaration = window.getComputedStyle(textarea);
    const maxHeight: number = Number(styles.maxHeight.slice(0, -2));
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
    onChange(e);
  };
  return (
    <textarea
      className={`${styles.base} ${styles[size]} ${styles[variant]} ${inputLike ? styles.inputLike : ""}`}
      style={style}
      ref={textareaRef}
      onChange={handleChange}
      value={value}
      {...props}
    ></textarea>
  );
}
