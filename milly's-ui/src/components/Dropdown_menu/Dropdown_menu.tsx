import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./Dropdown_menu.module.css";
import { Button } from "../Button/Button";
import { ArrowDown, ArrowUp } from "lucide-react";

type DropdownMenuProps = {
  children: ReactNode;
  title: string;
  toggleButtonStyle: CSSProperties;
  menuStyle: CSSProperties;
};

export function DropdownMenu({
  children,
  title,
  toggleButtonStyle = {},
  menuStyle = {},
}: DropdownMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const menuContent = menuRef.current;

    function onClickOutSide(e: MouseEvent): void {
      if (!menuContent) return;
      if (!menuContent.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", onClickOutSide);

    return () => window.removeEventListener("click", onClickOutSide);
  }, []);
  return (
    <div ref={menuRef} className={styles.dropdownContainer}>
      <Button
        style={{
          ...toggleButtonStyle,
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        size={"medium"}
        onClick={handleToggleMenu}
        variant="primary"
      >  
        <span>{title}</span>
        {open ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </Button>

      <div
        style={menuStyle}
        className={`${styles.menuContent} ${open ? styles.slidedown : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
