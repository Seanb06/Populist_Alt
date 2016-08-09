import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Lists from 'PopulistApp/collections/Lists'
import ListDetail from './ListDetail_component';

const mapStateToProps = state => ({
  listDetail: state.listDetail    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {
  const handle = Meteor.subscribe('singleList', props.params.listId);
  if(handle.ready()) {
    const listDetail = Lists.findOne();
    onData(null, {listDetail});
  };
};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(ListDetail));
