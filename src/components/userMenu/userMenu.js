import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const UserMenu = ({
  user, setLoginState
}) => {
  if (user) {
    return (
      <React.Fragment >
        <NavDropdown title={`${user.firstName} ${user.lastName}`} id="basic-nav-dropdown">
          <MenuItem href="/profile" >Profile</MenuItem>
          <MenuItem onClick={setLoginState} >Log out</MenuItem>
        </NavDropdown>
      </React.Fragment >
    );
  }
  return (
    <React.Fragment >
      <NavItem href="/registration">
        Registration
      </NavItem>
      <NavItem href="/login">
        Login
      </NavItem>
    </React.Fragment >
  );
};
