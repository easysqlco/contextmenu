import React from 'react';

export interface Position {
  x: number;
  y: number;
}

export interface ContextMenuProps {
  children: React.ReactNode;
  open: boolean;
  position: Position;
}

export const ContextMenu = ({ children, open, position }: ContextMenuProps) => {
  if (!open) return <></>;

  return (
    <ul className="contextmenu" role="menu" style={{ top: position.y, left: position.x }}>
      {children}
    </ul>
  );
};
