import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Lists from 'PopulistApp/collections/Lists'
import ListItem from 'PopulistApp/collections/ListItem'
import ListDetail from './ListDetail_component';

const mapStateToProps = state => ({
  listDetail: state.listDetail,    // listDetail gets assigned to props here
  listItems: state.listItems
});

const onPropsChange = (props, onData) => {
  const handle = Meteor.subscribe('singleList', props.params.listId);
  if(handle.ready()) {
    const listDetail = Lists.findOne();
    const listItems = ListItem.find({}).fetch()
    console.log(listItems);
    onData(null, {listDetail, listItems});
  };
};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(ListDetail));
