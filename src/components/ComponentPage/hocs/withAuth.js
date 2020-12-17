import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuth = Wrapped => {
  function WithAuth(props) {
    return <Wrapped {...props} />;
  }

  const mapStateToProps = state => ({
    loginIn: Boolean(state.auth.token),
  });

    return withRouter(connect(mapStateToProps)(WithAuth));
};

export default withAuth;
