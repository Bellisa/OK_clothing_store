import ReactDom from 'react-dom';

import 'jquery';
import 'bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './app.component';

import { store } from './store';
// import './scss/app.scss';


const Root = () => (
  <Router>
    <App />
  </Router>
);

const MainApp = <Provider store={store}><Root /></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));
