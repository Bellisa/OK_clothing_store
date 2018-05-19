import { NavLink } from 'react-router-dom';
import { Row, Col, Grid, Button } from 'react-bootstrap';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';
import { getCategoryById } from '../../services';
import './category.scss';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { category: {} };
    this.iter = 0;
  }

  componentWillReceiveProps(nextProps, prevState) {
    const nextId = nextProps.match.params.category || 0;
    const currId = this.props.match.params.category || 0;
    const currStateId = prevState.category ? prevState.category.id : 0;
    if (nextId !== currId && nextId !== currStateId) {
      console.log(`componentWillReceiveProps_call${this.iter++}`);
      getCategoryById(nextId)
        .then((data) => {
          this.setState({ category: data });
        })
        .catch();
    }
  }
  componentDidMount() {
    console.log(`componentDidMount_call${this.iter++}`);
    const id = this.props.match.params.category || 0;
    getCategoryById(id)
      .then((data) => {
        this.setState({ category: data });
      })
      .catch();
  }
  render() {
    const listCategory = this.state.category || {};
    const listProduct = (listCategory.products || []).sort((a, b) => (
      (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0));
    return (
      <React.Fragment >
        <PageInfo info={getPageInfo(listCategory.title || 'Category')} />

        <div className="album py-5 bg-light">
          <Grid className="container">
            <Row>
              {
                listProduct.map(product => (
                  <Col className="category-pb" md={4} key={`product${product.id}`}>
                    <div className="preview">
                      <div className="image">
                        {
                          (product.id % 2 > 0) ?
                            <img
                              className="img-responsive"
                              src="/images/1.jpg"
                              alt="Eloquent JavaScript, by Marijn Haverbeke"
                            /> :
                            <img
                              className="img-responsive"
                              src="/images/2.jpg"
                              alt="Eloquent JavaScript, by Marijn Haverbeke"
                            />
                        }

                      </div>
                      <div className="options">
                        <h3>{product.title}</h3>
                        <p>Marijn Haverbeke</p>
                        <div>
                          <div className="btn-group">
                            <NavLink
                              to={`/Products/${product.id}&${listCategory.id}`}
                              className="btn btn-primary btn-xl">
                              View details >>
                              </NavLink>
                          </div>

                        </div>
                      </div>
                    </div>
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

{ /* <Col className="category-pb" md={4} key={`product${product.id}`}>
  <Col className="category box-shadow">
    <a href={`/Products/${product.id}`} >
      <img
        title={product.title}
        className="category-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20224%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1637003618d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1637003618d%22%3E%3Crect%20width%3D%22348%22%20height%3D%22224%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.734375%22%20y%3D%22119.33125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
      />
    </a>
    <Col className="category-body">
      <h3 className="category-text">{product.title}</h3>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          bsStyle="primary"
          href={`/Products/${product.id}`}
          title={product.title}
        >
          View details >>
                            </Button>
      </div>
    </Col>
  </Col>
</Col> */ }

