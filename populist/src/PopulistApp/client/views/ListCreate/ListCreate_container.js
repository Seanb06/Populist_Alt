import { composeWithTracker } from 'react-komposer';
import ListCreate from './ListCreate_component';
import { connect } from "react-redux";


const mapStateToProps = state => ({
  ...state
});

const onPropsChange = (props, onData) => {
  // const handle = Meteor.subscribe('lists');
  // if(handle.ready()) {
  //   const lists = Lists.find({}, {sort: {_id: 1}}).fetch();
  //   onData(null, {lists});
  // };
};


export default connect(mapStateToProps)(ListCreate);