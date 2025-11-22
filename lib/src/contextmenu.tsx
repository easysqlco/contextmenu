import React from "react";
import cx from "clsx";

export interface Position {
  x: number;
  y: number;
}

export interface ContextMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  position: Position;
  size?: "compact" | "normal";
}

export const ContextMenu = ({
  children,
  isOpen,
  position,
  size,
}: ContextMenuProps) => {
  if (!isOpen) return null;

  return (
    <ul
      className={cx("contextmenu", size)}
      role="menu"
      style={{ top: position.y, left: position.x }}
    >
      {children}
    </ul>
  );
};
