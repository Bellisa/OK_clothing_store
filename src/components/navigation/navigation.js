import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
            <a href="/Home">Online Shop</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              Object.getOwnPropertyNames(pageMenu).map((page) => {
                if (page !== 'Shop') {
                  return (
                    <NavItem href={pageMenu[page]} key={`1${page}`}>
                      {page}
                    </NavItem>
                  );
                }

                return (
                  <NavDropdown title="Shop" id="basic-nav-dropdown" key={page}>
                    <MenuItem key="AllCategories" href="/Shop">All Categories</MenuItem>
                    <MenuItem divider />
                    {
                      categoriesPublished.map(category =>
                        <MenuItem key={category.id} href={`/Shop/${category.id}`}>{category.title}</MenuItem>)
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

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
