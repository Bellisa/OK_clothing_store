import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';
import './home.scss';


export const Home = () => (
  <React.Fragment >
    <header className="py-5 bg-image-full bgImg" >
      <div className="intro-text left-0 text-center bg-faded p-5 rounded width-home">
        <h2 className="section-heading mb-4">
          <span className="section-heading-upper">Welcome </span>
        </h2>
        <h3 className="mb-3">Into <b>ONLINE STORE</b> you can find only the best products</h3>
        <div className="intro-button mx-auto">
          <NavLink to="/Shop" className="btn btn-primary btn-xl" >Go to Shop</NavLink>
        </div>
      </div>
      {/* <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&amp;text=Logo" alt="" /> */}
    </header>
    <PageInfo info={getPageInfo('/home')} />

  </React.Fragment>
);

