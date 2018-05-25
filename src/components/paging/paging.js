import { Pagination } from 'react-bootstrap';

export class Paging extends Component {
  onPageClick = (number, e) => {
    e.preventDefault();
    this.props.onChangePage(number);
  }
  getPageItem = () => {
    const items = [];
    for (let number = 1; number <= this.props.countPage; number++) {
      items.push(<Pagination.Item active={number === this.props.currentPage} onClick={e => this.onPageClick(number, e)}>
        {number}
                 </Pagination.Item>);
    }
    return items;
  }

  render() {
    return (
      <Pagination bsSize="medium">{this.getPageItem()}</Pagination>
    );
  }
}
