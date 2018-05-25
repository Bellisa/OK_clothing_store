import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CategoryList } from '../../../components/admin/categoryList/';
import { Paging } from '../../../components/paging/';
import { GetAllCategoriesAsync, DeleteCategoryByIdAsync, UpdateCategoryAsync } from '../../../store/actions/';

export class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], filter: '', currentPage: 1 };
  }
  componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.nextProps) {
      this.setState({ categories: nextProps.categories });
    }
  }
  componentDidMount() {
    this.props.getAllCategories();
  }
  onDelecteCategory = (category) => {
    this.props.deleteCategoryById(category.id);
  }

  onUpdateCategory = (category, isPublish) => {
    console.log(category, isPublish, 'onUpdateCategory');
    this.props.updateCategory(category);
  }
  onFilter = (text) => {
    this.setState({ filter: text, currentPage: 1 });
  }
  onChangePage = (page) => {
    this.setState({ currentPage: page });
  }
  render() {
    const sizePage = 5;
    const cateoriesFiltList = this.state.categories.filter(category =>
      (this.state.filter ? category.title.toLowerCase().startsWith(this.state.filter.toLowerCase()) : true));
    const { currentPage } = this.state;
    const countPage = ((cateoriesFiltList.length % sizePage) > 0) ?
      ((cateoriesFiltList.length / sizePage) + 1)
      :
      (cateoriesFiltList.length / sizePage);
    return (
      <React.Fragment >
        <h2>Categories</h2>
        <CategoryList
          categories={cateoriesFiltList}
          onDelete={this.onDelecteCategory}
          onChanged={this.onUpdateCategory}
          onFilter={this.onFilter}
        />
        <Paging
          currentPage={currentPage}
          countPage={parseInt(countPage, 0)}
          onChangePage={this.onChangePage}
        />
      </React.Fragment >
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  updateCategory(value) {
    dispatch(UpdateCategoryAsync(value));
  },
  deleteCategoryById(value) {
    dispatch(DeleteCategoryByIdAsync(value));
  },
  getAllCategories() {
    dispatch(GetAllCategoriesAsync());
  }
});
export const Categories = withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent));
