import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Users from 'PopulistApp/collections/Users'
import Login from './Login_component';
import {loginWithGoogle} from '../../actions/auth'
import {loginWithFacebook} from '../../actions/auth'

const mapStateToProps = state => ({
  user: state.auth.user,
  loggingIn: state.auth.loggingIn,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({loginWithGoogle, loginWithFacebook}, dispatch)
)

const componentWillMount = () => ({
});

const componentDidMount = () => ({
});

const componentDidUpdate = () => ({
});

//export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(Login));
export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login