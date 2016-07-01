import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logout} from '../actions/auth';
import App from './App_component';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    logginIn: state.auth.logginIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);