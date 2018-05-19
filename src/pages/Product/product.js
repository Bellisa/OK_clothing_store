import { Row, Col, Grid, Label, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getProductById, getCategoryById } from '../../services';
import './product.scss';
import { ProductsAsside } from '../../components/productsAsside';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, category: {} };
  }

  componentWillReceiveProps(nextProps, prevState) {
    const nextId = nextProps.match.params.category || 0;
    const currId = this.props.match.params.category || 0;
    const currStateId = prevState.category ? prevState.category.id : 0;


    if (nextId !== 0 && nextId !== currId && nextId !== currStateId) {
      getCategoryById(nextId)
        .then((data) => {
          this.setState({ category: data });
        })
        .catch();
      return;
    }
    const nextProdId = nextProps.match.params.product || 0;
    const currProdId = this.props.match.params.product || 0;
    const currProdStateId = prevState.product ? prevState.product.id : 0;

    if (nextProdId !== 0 && nextProdId !== currProdId && nextProdId !== currProdStateId) {
      getProductById(nextProdId)
        .then((data) => {
          this.setState({ product: data });
        })
        .catch();
    }
  }

  componentDidMount() {
    const id = this.props.match.params.product || 0;
    const idCat = this.props.match.params.category || 0;
    getProductById(id)
      .then((data) => {
        this.setState({ product: data });
        console.log(data);
      })
      .catch();

    getCategoryById(idCat)
      .then((data) => {
        this.setState({ category: data });
      })
      .catch();
  }
  render() {
    const { product, category } = this.state || {};
    const productList = (category.products) ? category.products.filter(a => a.id !== product.id) : [];
    return (
      <React.Fragment >
        <div className="album py-5 bg-light">
          <Grid className="container">
            <Row>
              <Col className="" md={8}>
                <article className="single-blog">
                  <div className="post-thumb">
                    <img src="/images/3.jpg" alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-header text-center text-uppercase">
                      <NavLink className="post-cat" to={`/Shop/${category.id}`} ><h4>{category.title}</h4></NavLink>
                      <h2>{product.title}</h2>
                    </div>
                    <div className="entry-content">
                      {
                        product.description && <p className="">{product.description}</p>
                      }
                      {
                        product.price && <h3 className="">price :<Label>{product.price}$</Label></h3>
                      }
                    </div>
                    <div className="continue-reading text-center text-uppercase">
                      <Button
                        bsStyle="primary"
                        href={`/Buy/${product.id}`}
                        title={product.title}
                        bsSize="large"
                        className="btn-block"
                      >
                        Buy
                      </Button>
                    </div>
                    {/* <div className="post-meta">
                      <ul className="pull-left list-inline author-meta">
                        <li className="author">By <a href="#">Jennifer </a></li>
                        <li className="date"> On October 13, 2017</li>
                      </ul>
                    </div> */}
                  </div>
                </article>
              </Col>
              <Col md={4} >
                <ProductsAsside products={productList} categoryId={category.id} />
              </Col>
            </Row>
          </Grid>

        </div>
      </React.Fragment >
    );
  }
}


{ /* <Col md={2} />
<Col className="cardProduct flex-md-row mb-8 box-shadow h-md-450" md={8}>
  <Col className="card-body d-flex flex-column align-items-start">
    <strong className="d-inline-block mb-2 text-primary" />
    <h3 className="mb-0">{product.title}</h3>
    <div className="mb-1 text-muted" />
    {
      product.description && <p className="card-text mb-auto">{product.description}</p>
    }
    {
      product.price && <h3 className="card-title pricing-card-title">price :<Label>{product.price}</Label></h3>
    }
    <div className="d-flex justify-content-between align-items-center">
      <Button
        bsStyle="primary"
        href={`/Buy/${product.id}`}
        title={product.title}
        bsSize="large"
        className="btn-block"
      >
        Buy
      </Button>
    </div>
  </Col>
  <img
    className="card-img-right flex-auto d-none d-lg-block"
    data-src="holder.js/400x250?theme=thumb"
    alt="Thumbnail [200x250]"
    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163707cba34%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163707cba34%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22130.6625%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    data-holder-rendered="true"
  />
</Col>
<Col md={2} /> */ }
