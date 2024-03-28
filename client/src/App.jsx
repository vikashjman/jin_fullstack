// App.jsx
import React, { useState } from 'react';
import './App.css';
import SidebarStatic from './components/sidebar/sidebar.component';
import Content from './layouts/content/content.component';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ position: 'relative' }}>
            <SidebarStatic visible={visible} setVisible={setVisible} />
          </div>
          <Content visible={visible} setVisible={setVisible} />
        </div>
    </>
  );
}

export default App;
