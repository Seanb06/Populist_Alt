import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Users from 'PopulistApp/collections/Users'
import Login from './Login_component';
//import { loadData } from '../../utils/loadData';

const mapStateToProps = state => ({
  something: state.something    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {
  // const handle = Meteor.subscribe('singleList', props.params.listId);
  // console.log(props.params.listId);
  // if(handle.ready()) {
  //   const listDetail = Lists.findOne();
  //   onData(null, {listDetail});
  // };
};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(Login));