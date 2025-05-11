import { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenu, ContextMenuItem, useContextMenu } from '@easysqlco/contextmenu';

import '../node_modules/font-awesome/css/font-awesome.min.css';

const App = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, position } = useContextMenu(targetRef);

  return (
    <div className="app">
      <div ref={targetRef} className="menu-target">
        <span>Right-click here!</span>
      </div>
      <div className="menu-target">
        <span>Right-click here!</span>
      </div>

      <ContextMenu isOpen={isOpen} position={position}>
        <ContextMenuItem label="Menu Item 1" icon="external-link" onClick={() => {console.log('Menu Item 1 clicked')}}/>
        <ContextMenuItem label="Very Very Long Menu Item Text" icon="pencil-square-o" onClick={() => {console.log('Menu Item 2 clicked')}}/>
        <ContextMenuItem label="Menu Item 3" onClick={() => {console.log('Menu Item 3 clicked')}}/>
        <ContextMenuItem label="Menu Item 4" onClick={() => {console.log('Menu Item 4 clicked')}}/>
      </ContextMenu>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
