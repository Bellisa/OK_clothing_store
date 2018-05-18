import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';

export const NoFound = () => (
  <React.Fragment >
    <PageInfo info={getPageInfo('/NoFound')} />
  </React.Fragment>
);

