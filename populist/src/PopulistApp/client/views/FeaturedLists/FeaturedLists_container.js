import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import FeaturedLists from './FeaturedLists_component';
import Lists from 'PopulistApp/collections/Lists'


const mapStateToProps = state => ({
  lists: state.lists    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {
  const handle = Meteor.subscribe('lists');

  if(handle.ready()) {
    const lists = Lists.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {lists});
  };

};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(FeaturedLists));
