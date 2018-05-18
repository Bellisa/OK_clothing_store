import { NavLink } from 'react-router-dom';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';


export const Profile = () => (
  <React.Fragment >
    <PageInfo info={getPageInfo('/Profile')} />
  </React.Fragment>
);

