import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Users from 'PopulistApp/collections/Users'
import Profile from './Profile_component';


const mapStateToProps = state => ({
  something: state.something    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {
  onData(null, null);

};

//export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(Login));

export default Profile;