import { composeWithTracker } from 'react-komposer';
import Home from './Home_component';
import Lists from 'PopulistApp/collections/Lists'
import { connect } from "react-redux";


const mapStateToProps = state => ({
  lists: state.lists    // posts gets assigned to props here
});

const onPropsChange = (props, onData) => {
  const handle = Meteor.subscribe('lists');

  console.log("handle");
  console.log(handle);
  if(handle.ready()) {
    const lists = Lists.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {lists});
  };
};


export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(Home));