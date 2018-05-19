import { NavLink } from 'react-router-dom';
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
                  <NavLink
                    to={`/Products/${product.id}&${categoryId}`}
                    className="popular-img"
                  >
                    {
                      (product.id % 2 > 0) ? <img src="/images/1.jpg" alt="" /> :
                        <img src="/images/2.jpg" alt="" />
                    }
                  </NavLink>
                  <div className="p-content">
                    <h4>{product.title}</h4>
                    <NavLink
                      to={`/Products/${product.id}&${categoryId}`}
                      className="btn btn-primary btn-xl"
                    >
                      View details >>
                    </NavLink>
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
