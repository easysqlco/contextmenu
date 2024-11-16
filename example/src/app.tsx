import { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenu, useContextMenu } from '@easysqlco/contextmenu';

const App = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { open, position } = useContextMenu(targetRef);

  return (
    <div className="app">
      <div ref={targetRef} className="menu-target">
        <span>Right-click here!</span>
      </div>
      <div className="menu-target">
        <span>Right-click here!</span>
      </div>

      <ContextMenu open={open} position={position} />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
