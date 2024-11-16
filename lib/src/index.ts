import { useEffect, useState } from 'react';

export * from './contextmenu';

export const useContextMenu = (targetRef: React.RefObject<HTMLElement>) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.pageX, y: event.pageY });
    setOpen(true);
  };

  const handleMenuItemClick = (event: MouseEvent) => {
    event.preventDefault();
    setOpen(false);
  };

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    target.addEventListener('contextmenu', handleContextMenu);

    return () => {
      target.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [targetRef]);

  return {
    open,
    position,
  };
};
