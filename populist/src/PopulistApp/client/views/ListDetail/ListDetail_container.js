import { composeWithTracker } from 'react-komposer';
import { connect } from "react-redux";
import Lists from 'PopulistApp/collections/Lists'
import ListDetail from './ListDetail_component';
//import { loadData } from '../../utils/loadData';

const mapStateToProps = state => ({
  listDetail: state.listDetail    // listDetail gets assigned to props here
});

const onPropsChange = (props, onData) => {
  const handle = Meteor.subscribe('singleList', props.params.listId);
  console.log(props.params.listId);
  if(handle.ready()) {
    const listDetail = Lists.findOne();
    onData(null, {listDetail});
  };
};

export default connect(mapStateToProps)(composeWithTracker(onPropsChange)(ListDetail));

// const ListDetailWithData = loadData({
//   watch: ['params'],
//   run: ({dispatch, params}) => dispatch(loadSingle(params.listId))
// })(ListDetail);

// export default connect(
//   ({lists}) => ({listDetail: lists.currentList}),
// )(ListDetailWithData);