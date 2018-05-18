import './productsAsside.scss';

export const ProductsAsside = ({ products, categoryId } = []) => {
  if (products.length > 0) {
    return (
      <div className="kotha-sidebar" >
        <aside className="widget widget-popular-post">
          <h3 className="widget-title text-uppercase text-center">Popular Posts</h3>
          <ul>
            {
              products.map(product => (
                <li key={`asside${product.id}`}>
                  <a href={`/Products/${product.id}&${categoryId}`} className="popular-img">
                    {
                      (product.id % 2 > 0) ? <img src="/images/1.jpg" alt="" /> :
                      <img src="/images/2.jpg" alt="" />
                    }
                  </a>
                  <div className="p-content">
                    <h4>{product.title}</h4>
                    <a href={`/Products/${product.id}&${categoryId}`} className="btn btn-primary">
                    View details >>
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </aside>
      </div>
    );
  }
  return null;
};
