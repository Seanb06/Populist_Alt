import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Users from 'PopulistApp/collections/Users'
import Login from './Login_component';


const mapStateToProps = state => ({
  something: state.something    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {

};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(Login));