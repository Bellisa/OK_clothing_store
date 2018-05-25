import { Table, Checkbox, Button, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const CategoryList = ({
  categories, onDelete, onChanged, onFilter
}) => (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th><span>Title</span><FormControl type="text" placeholder="filter title" onChange={e => onFilter(e.target.value)} /></th>
          <th><span>Is Published</span></th>
          <th><span>Delete</span></th>
        </tr>
      </thead>
      <tbody>
        {
          categories && categories.map(category => (
            <tr key={`key_${category.id}`}>
              <td><NavLink to={`/Categories/${category.id}`}>{category.title}</NavLink></td>
              <td>
                <Checkbox onChange={e => onChanged(category, e.target.value)} />
              </td>
              <td>
                <span className="glyphicon glyphicon-remove" onClick={() => onDelete(category)} />
              </td>
            </tr>
          ))
        }

      </tbody>
    </Table>
  );
