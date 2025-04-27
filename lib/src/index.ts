import { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { useClickAnyWhere } from 'usehooks-ts';

export * from './contextmenu';
export * from './contextmenu-item';

import './css/contextmenu.css';

export const useContextMenu = <T>(targetRef?: React.RefObject<HTMLElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState<T | null>(null);

  useEffect(() => {
    if (!targetRef) {
      return;
    }

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setPosition({ x: event.pageX, y: event.pageY });
      setIsOpen(true);
    };

    const targetEl = targetRef.current;
    invariant(targetEl, 'Contextmenu target ref is not defined');

    targetEl.addEventListener('contextmenu', handleContextMenu);

    return () => {
      targetEl.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [targetRef]);

  useClickAnyWhere(() => {
    setIsOpen(false);
    setTarget(null);
  });

  return {
    isOpen,
    position,
    target,
    open: (event: React.MouseEvent, target: T | null) => {
      event.preventDefault();
      setIsOpen(true);
      setTarget(target);
      setPosition({ x: event.pageX, y: event.pageY });
    },
  };
};
