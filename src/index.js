import React from 'react';
import ReactDOM from 'react-dom';
import App from './Conteiner/App.js';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// -----------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import App from './App.js';
// import App from './Container/App.js';
// import store from './redux/store.js';

// ReactDOM.render(
//   <Provider store={store}>
//     {/* <React.StrictMode> */}
//     <App />
//     {/* </React.StrictMode>, */}
//   </Provider>,
//   document.getElementById('root'),
// );
