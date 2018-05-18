import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';

export const Success = () => (
  <React.Fragment >
    <PageInfo info={getPageInfo('/Success')} />
  </React.Fragment>
);

