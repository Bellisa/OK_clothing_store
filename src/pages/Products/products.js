import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';

export const Products = () => (
  <React.Fragment >
    <PageInfo info={getPageInfo('/Products')} />
  </React.Fragment>
);

