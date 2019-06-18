import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import jQuery from 'jquery';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();

jQuery(document).ready(($) => {
  $(window).on('popstate', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
  });
});
