import React, { Suspense } from 'react';
import { Loading } from '@kube-design/components'
import ReactDOM from 'react-dom/client';
import App from './App';

const Render = (component) => {
  return (
    <Suspense fallback={<Loading className="ks-page-loading" />}>
      {component}
    </Suspense>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  Render(<App />)
);
