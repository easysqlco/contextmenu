import React from 'react';

const menuItems = [
  { label: 'Menu Item 1' },
  { label: 'Menu Item 2' },
  { label: 'Menu Item 3' },
  { label: 'Menu Item 4' },
  { label: 'Menu Item 5' },
];

const menuStyles: React.CSSProperties = {
  position: 'absolute',
  zIndex: 1000,
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

export interface Position {
  x: number;
  y: number;
}

export const ContextMenu = ({ open, position }: { open: boolean; position: Position }) => {
  if (!open) return <></>;

  return (
    <ul className="contextmenu" role="menu" style={{ ...menuStyles, top: position.y, left: position.x }}>
      {menuItems.map((item, index) => (
        <li key={index} role="menuitem">
          {item.label}
        </li>
      ))}
    </ul>
  );
};
