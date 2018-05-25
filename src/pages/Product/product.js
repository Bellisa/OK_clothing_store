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
      this.GetData(null, nextId);
      return;
    }

    const nextProdId = nextProps.match.params.product || 0;
    const currProdId = this.props.match.params.product || 0;
    const currProdStateId = prevState.product ? prevState.product.id : 0;

    if (nextProdId !== 0 && nextProdId !== currProdId && nextProdId !== currProdStateId) {
      this.GetData(nextProdId, null);
    }
  }

  GetData = (prodId, catId) => {
    if (prodId) {
      getProductById(prodId)
        .then((data) => {
          this.SetState({ product: data });
        })
        .catch();
    }
    if (catId) {
      getCategoryById(catId)
        .then((data) => {
          this.SetState({ category: data });
        })
        .catch();
    }
  }
  SetState = (data) => {
    this.setState(data);
  }

  componentDidMount() {
    const id = this.props.match.params.product || 0;
    const idCat = this.props.match.params.category || 0;
    this.GetData(id, idCat);
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
