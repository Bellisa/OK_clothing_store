import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';

export const Register = () => (
  <React.Fragment >
    <PageInfo info={getPageInfo('/Register')} />
  </React.Fragment>
);

