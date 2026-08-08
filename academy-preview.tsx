import React from 'react';
import ReactDOM from 'react-dom/client';
import Academy from './components/Academy/Academy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="px-4 md:px-8 pb-28">
    <Academy userId="preview" memberName="Alex Rivera" onNavigateTab={(t) => console.log('tab', t)} />
  </div>
);
