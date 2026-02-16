import React from "react";
import cx from "clsx";

export interface ContextMenuItemProps {
  label: string;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
}

export const ContextMenuItem = ({
  label,
  onClick,
  disabled,
  icon,
  iconPosition,
}: ContextMenuItemProps) => {
  const handleClick = (event: React.MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick(event);
  };

  return (
    <li role="menuitem" className="contextmenu-item" onClick={handleClick}>
      {icon && (
        <i
          className={cx(
            "fa",
            `fa-${icon}`,
            "fa-fw",
            "menuitem-icon",
            iconPosition,
          )}
          aria-hidden="true"
        />
      )}
      <span
        className="menuitem-text"
        aria-label={label}
        aria-disabled={disabled}
      >
        {label}
      </span>
    </li>
  );
};
