import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logout} from '../actions/auth';
import App from './App_component';

const mapStateToProps = state => ({
  user: state.auth.user,
  loggingIn: state.auth.loggingIn,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({logout}, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);