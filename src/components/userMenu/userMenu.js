import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const UserMenu = ({
  user, setLoginState
}) => {
  if (user) {
    return (
      <React.Fragment >
        <NavDropdown title={`${user.firstName} ${user.lastName}`} id="basic-nav-dropdown">
          <LinkContainer to="/profile" activeClassName="active" >
            <MenuItem >Profile</MenuItem>
          </LinkContainer>
          <MenuItem onClick={setLoginState} >Log out</MenuItem>
        </NavDropdown>
      </React.Fragment >
    );
  }
  return (
    <React.Fragment >
      <LinkContainer to="/registration" activeClassName="active" >
        <NavItem >
          Registration
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/login" activeClassName="active" >
        <NavItem >
          Login
        </NavItem>
      </LinkContainer>
    </React.Fragment >
  );
};
