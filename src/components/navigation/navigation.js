import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { GetAllCategoriesAsync, logOutUserAsync } from '../../store';
import { pages } from './const';
import { pagesAdmin } from './const';
import './navigation.scss';
import { UserMenu } from '../../components/userMenu';

export class NavigationComponent extends Component {
  setLoginState = (e) => {
    e.preventDefault();
    this.props.logOut();
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const pageMenu = this.props.user ? pagesAdmin : pages;
    const categoriesPublished = (this.props.categories || []).filter(category => category.published) || [];
    return (
      <Navbar collapseOnSelect fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/Home">Online Shop</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              Object.getOwnPropertyNames(pageMenu).map((page) => {
                if (page !== 'Shop') {
                  return (
                    <LinkContainer exact to={pageMenu[page]} key={`${page}`}>
                      <NavItem key={`NavItem${page}`}>
                        {page}
                      </NavItem>
                    </LinkContainer>
                  );
                }

                return (
                  <NavDropdown title="Shop" id="basic-nav-dropdown" key="NavDropdownCategories">
                    <LinkContainer exact to="/Shop" key="AllCategories">
                      <MenuItem key="AllCategoriesMenu">All Categories</MenuItem>
                    </LinkContainer>
                    <MenuItem divider key="dividerCategories" />
                    {
                      categoriesPublished.map(category =>
                        (
                          <LinkContainer exact to={`/Shop/${category.id}`} key={`LinkContainer${category.id}`}>
                            <MenuItem key={`MenuItem${category.id}`}>
                              {category.title}
                            </MenuItem>
                          </LinkContainer>
                        ))
                    }
                  </NavDropdown>
                );
              })
            }
          </Nav>
          <Nav pullRight>
            <UserMenu user={this.props.user} setLoginState={this.setLoginState} />
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  categories: state.categories,
  error: state.status.error
});
const mapDispatchToProps = dispatch => ({
  logOut() {
    dispatch(logOutUserAsync());
  },
  getAllCategories() {
    dispatch(GetAllCategoriesAsync());
  }
});

export const Navigation = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationComponent));
