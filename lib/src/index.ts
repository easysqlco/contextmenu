import { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { useClickAnyWhere } from 'usehooks-ts';

export * from './contextmenu';
export * from './contextmenu-item';

import './css/contextmenu.css';

export const useContextMenu = (targetRef: React.RefObject<HTMLElement>) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.pageX, y: event.pageY });
    setOpen(true);
  };

  useEffect(() => {
    const target = targetRef.current;
    invariant(target, 'Contextmenu target ref is not defined');

    target.addEventListener('contextmenu', handleContextMenu);

    return () => {
      target.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [targetRef]);

  useClickAnyWhere(() => {
    setOpen(false);
  });

  return {
    open,
    position,
  };
};
