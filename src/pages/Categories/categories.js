import { Row, Col, Grid, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { GetAllCategoriesAsync } from '../../store';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';
import './categories.scss';

export class CategoriesComponent extends Component {

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    // const categoriesPublished = (this.props.categories || []).filter(category => category.published) || [];
    const categoriesPublished = (this.props.categories || []).sort((a, b) => (
      (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0));
    return (
      <React.Fragment >
        <PageInfo info={getPageInfo('/Shop')} />

        <div className="album py-5 bg-light">
          <Grid className="container">
            <Row>
              {
                categoriesPublished.map(category => (
                  <Col className="categories-pb" md={3} key={`category${category.id}`}>
                    <Col className="categories box-shadow">
                      <a href={`/Shop/${category.id}`} >
                        <img
                          title={category.title}
                          className="categories-img-top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]"
                          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20224%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1637003618d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1637003618d%22%3E%3Crect%20width%3D%22348%22%20height%3D%22224%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.734375%22%20y%3D%22119.33125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                          data-holder-rendered="true"
                        />
                      </a>
                      <Col className="categories-body">
                        <h4 className="categories-text">{category.title}</h4>
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            bsStyle="primary"
                            href={`/Shop/${category.id}`}
                            title={category.title}
                          >
                            More
                          </Button>
                        </div>
                      </Col>
                    </Col>
                  </Col>
                ))
              }

            </Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  getAllCategories() {
    dispatch(GetAllCategoriesAsync());
  }
});

export const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);
