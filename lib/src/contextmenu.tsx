import React from 'react';

export interface Position {
  x: number;
  y: number;
}

export interface ContextMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  position: Position;
}

export const ContextMenu = ({ children, isOpen, position }: ContextMenuProps) => {
  if (!isOpen) return <></>;

  return (
    <ul className="contextmenu" role="menu" style={{ top: position.y, left: position.x }}>
      {children}
    </ul>
  );
};
