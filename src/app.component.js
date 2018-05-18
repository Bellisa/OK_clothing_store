import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import { Navigation } from './Components/Navigation';
import { Pages } from './pages/Pages';
import { getUserAsync } from './store';

export class AppComponent extends Component {
  componentDidUpdate() {
    // if (this.props.error) {
    //   this.container.error(<strong>{this.props.error}</strong>, <em>Error</em>);
    //   this.props.dispatch(setError(''));
    // }
  }

  componentDidMount() {
    this.props.dispatch(getUserAsync());
  }

  render() {
    const { user } = this.props || {};

    return (
      <React.Fragment >
        <Navigation />
        <main>
          {
            (user !== false) ?
              <Pages
                user={user}
              />
              : <p>waiting</p>
          }
        </main>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.status.error
});
export const App = withRouter(connect(mapStateToProps)(AppComponent));
