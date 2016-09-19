import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {loginWithGoogle} from '../../actions/auth'
import {loginWithFacebook} from '../../actions/auth'
import Login from './Login_component';

const mapStateToProps = state => ({
  user: state.auth.user,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loginWithGoogle,
    loginWithFacebook
  }, dispatch)
)

// const componentWillMount = () => (
//   console.log('props', this.props);
// );

// const componentDidMount = () => ({
// });

// const componentDidUpdate = () => ({
// });


export default connect(mapStateToProps, mapDispatchToProps)(Login);
