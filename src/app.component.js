import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.scss';


const Root = (
  <h1>
    Hello
  </h1>
);

ReactDom.render(Root, document.getElementById('app'));
